var searchVisible = 0;
var transparent = true;

var transparentDemo = true;
var fixedTop = false;

var navbar_initialized = false;

var big_image; 
var scroll;
var project_content;
var $project;
scroll = ( 2500 - $(window).width() ) / $(window).width();

var $ScrollTop;
var $ScrollBot;

var pixels;

var modal;
var $project_content;

var test = true;        

var timerStart = Date.now();
var delay;

var no_of_elements = 0;
var window_height;
var window_width;

var content_opacity = 0;
var content_transition = 0;
var no_touch_screen = false;

var burger_menu;



$(document).ready(function(){
    BrowserDetect.init();
    
    if(BrowserDetect.browser === 'Explorer' && BrowserDetect.version <= 9){
        $('body').html(better_browser);   
    }

    window_width = $(window).width();
    window_height = $(window).height();

    burger_menu = $('nav').hasClass('navbar-burger') ? true : false;
    
    if (!Modernizr.touch){
        $('body').addClass('no-touch');
        no_touch_screen = true;
    }
    
    rubik.initAnimationsCheck();
    
    // Init navigation toggle for small screens   
    if(window_width < 979 || burger_menu){
        rubik.initRightMenu();   
    }

    if(window_width < 979){
        $('.over-area').each(function(){
            var click = $(this).attr("onClick");
            if(click === ''){
                src = "rubik.showModal(this)";
                $(this).attr("onClick", src);
            }
        });
        
        rubik.checkResponsiveImage();
    } 
    
    
    
    if($('#contactUsMap').length !== 0){
        rubik.initGoogleMaps();   
    }
    
    if($('.content-with-opacity').length != 0){
        content_opacity = 1;
    }

});

$(window).on('scroll',function(){
   if(window_width > 980){
        rubik.checkScrollForParallax();
   }
   
   rubik.checkScrollForTransparentNavbar();    
         
});

$(window).load(function(){
    
    //after the content is loaded we reinitialize all the waypoints for the animations
    rubik.initAnimationsCheck();
    
});  

//activate collapse right menu when the windows is resized 
$(window).resize(function(){
    if($(window).width() < 979){
        rubik.initRightMenu();   
    }
    if($(window).width() > 979 && !burger_menu){
        $('nav').removeClass('navbar-burger');
        rubik.misc.navbar_menu_visible = 1;
        navbar_initialized = false;
    }
});

$('a[data-scroll="true"]').click(function(e){         
    var scroll_target = $(this).data('id');
    var scroll_trigger = $(this).data('scroll');
    
    if(scroll_trigger == true && scroll_target !== undefined){
        e.preventDefault();
        
        $('html, body').animate({
             scrollTop: $(scroll_target).offset().top - 50
        }, 1000);
    }
                
});


//rubik fc
rubik = {
    misc:{
        navbar_menu_visible: 0
    },
    initAnimationsCheck: function(){
        
        $('[class*="add-animation"]').each(function(){
           offset_diff = 30;
           if($(this).hasClass('title')){
               offset_diff = 110;
           }
           
           var waypoints = $(this).waypoint(function(direction) {
                if(direction == 'down'){
                        $(this.element).addClass('animate');    
                   } else {
                       $(this.element).removeClass('animate');
                   }
                }, {
                  offset: window_height - offset_diff
           });
        });
  
    },
    initRightMenu: function(){  
         if(!navbar_initialized){
            $nav = $('nav');
            $nav.addClass('navbar-burger');
             
            $navbar = $nav.find('.navbar-collapse').first().clone(true);
            $navbar.css('min-height', window.screen.height);
              
            ul_content = '';
             
            $navbar.children('ul').each(function(){
                content_buff = $(this).html();
                ul_content = ul_content + content_buff;   
            });
             
            ul_content = '<ul class="nav navbar-nav">' + ul_content + '</ul>';
            $navbar.html(ul_content);
             
            $('body').append($navbar);
                            
            background_image = $navbar.data('nav-image');
            if(background_image !== undefined){
                $navbar.css('background',"url('" + background_image + "')")
                       .removeAttr('data-nav-image')
                       .css('background-size',"cover")
                       .addClass('has-image');                
            }
             
            $toggle = $('.navbar-toggle');
             
            $navbar.find('a').removeClass('btn btn-round btn-default');
            $navbar.find('button').removeClass('btn-round btn-fill btn-info btn-primary btn-success btn-danger btn-warning btn-neutral');
            $navbar.find('button').addClass('btn-simple btn-block');

            $link = $navbar.find('a');
            
            $link.click(function(e){
                var scroll_target = $(this).data('id');
                var scroll_trigger = $(this).data('scroll');
                
                if(scroll_trigger == true && scroll_target !== undefined){
                    e.preventDefault();

                    $('html, body').animate({
                         scrollTop: $(scroll_target).offset().top - 50
                    }, 1000);
                }
                
             });

            
            $toggle.click(function (){    

                if(rubik.misc.navbar_menu_visible == 1) {                    
                    $('html').removeClass('nav-open'); 
                    rubik.misc.navbar_menu_visible = 0;
                    $('#bodyClick').remove();
                     setTimeout(function(){
                        $toggle.removeClass('toggled');
                     }, 550);
                
                } else {
                    setTimeout(function(){
                        $toggle.addClass('toggled');
                    }, 580);
                    
                    div = '<div id="bodyClick"></div>';
                    $(div).appendTo("body").click(function() {
                        $('html').removeClass('nav-open');
                        rubik.misc.navbar_menu_visible = 0;
                        $('#bodyClick').remove();
                         setTimeout(function(){
                            $toggle.removeClass('toggled');
                         }, 550);
                    });
                   
                    $('html').addClass('nav-open');
                    rubik.misc.navbar_menu_visible = 1;
                    
                }
            });
            navbar_initialized = true;
        }
   
    },

    checkResponsiveImage: function(){
      
        $('.section-header > div > img, .section-header video').each(function(){
            var $image = $(this);
            var src = $image.attr("responsive-src");
    
            if(!src){
               src = $image.attr('src'); 
            }
    
            div = '<div class="responsive-background" style="background-image:url(' + src + ')"/>';
            $image.after(div);
            $image.addClass('hidden-xs'); 
        });
    },  
    
    checkScrollForTransparentNavbar: debounce(function() {	
        	if($(document).scrollTop() > 560 ) {
                if(transparent) {
                    transparent = false;
                    $('nav[role="navigation"]').removeClass('navbar-transparent');
                }
            } else {
                if( !transparent ) {
                    transparent = true;
                    $('nav[role="navigation"]').addClass('navbar-transparent');
                }
            }
    }, 17),
    
    checkScrollForParallax: debounce(function() {	

        	no_of_elements = 0;
        	$('.parallax').each(function() {
        	    var $elem = $(this);
        	    
        	    if(isElementInViewport($elem)){
                  var parent_top = $elem.offset().top;          
                  var window_bottom = $(window).scrollTop();
                  var $image = $elem.find('img')
                              	  
            	  oVal = ((window_bottom - parent_top) / 3);
                  $image.css('transform','translate3d(0px, ' + oVal + 'px, 0px)');    
        	    }
            });
    		
    }, 6),
    
    checkScrollForContentTransitions: debounce(function() {
         $('.content-with-opacity').each(function() {
             var $content = $(this);
             
             if(isElementInViewport($content)){          
                  var window_top = $(window).scrollTop();
            	  opacityVal = 1 - (window_top / 230);
                  
                  if(opacityVal < 0){
                      opacityVal = 0;
                      return;
                  } else {
                    $content.css('opacity',opacityVal);    
                  }
                      
        	    }            
         });
    }, 6),
    
    showModal: function(button){
        var id = $(button).data('target');
        var $project = $(button).closest('.project');
        
        var scrollTop = $(window).scrollTop();
        var distanceTop = $project.offset().top;

        var projectTop = distanceTop - scrollTop; 
        var projectLeft = $project.offset().left;
        var projectHeight = $project.innerHeight();
        var projectWidth = $project.innerWidth();

        modal = $('#' + id);

        $(modal).css({
         'top'  :    projectTop,
         'left' :    projectLeft, 
         'width' :   projectWidth,
         'height' :  projectHeight,
         'z-index'  : '1032'
        });
        
        $(modal).addClass('has-background');
        
        setTimeout(function(){
           $(modal).addClass('open');
        },30);

        setTimeout(function(){
           $('body').addClass('noscroll');
           $(modal).addClass('scroll');
        },1000);
    
        $('.icon-close').click(function(){
          $project_content = $(this).closest('.project-content');
          $project_content.removeClass('open scroll');
          
          $('body').removeClass("noscroll");
          //$('a').removeClass('no-opacity');
            setTimeout(function(){
                $project_content.removeClass('has-background');
                setTimeout(function(){    
                    $project_content.removeAttr('style');     
                }, 450); 
            },500);
        });
    },
}

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		}, wait);
		if (immediate && !timeout) func.apply(context, args);
	};
};


function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}


var BrowserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "Other";
        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
    },
    searchString: function (data) {
        for (var i = 0; i < data.length; i++) {
            var dataString = data[i].string;
            this.versionSearchString = data[i].subString;

            if (dataString.indexOf(data[i].subString) !== -1) {
                return data[i].identity;
            }
        }
    },
    searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index === -1) {
            return;
        }

        var rv = dataString.indexOf("rv:");
        if (this.versionSearchString === "Trident" && rv !== -1) {
            return parseFloat(dataString.substring(rv + 3));
        } else {
            return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
        }
    },

    dataBrowser: [
        {string: navigator.userAgent, subString: "Chrome", identity: "Chrome"},
        {string: navigator.userAgent, subString: "MSIE", identity: "Explorer"},
        {string: navigator.userAgent, subString: "Trident", identity: "Explorer"},
        {string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
        {string: navigator.userAgent, subString: "Safari", identity: "Safari"},
        {string: navigator.userAgent, subString: "Opera", identity: "Opera"}
    ]

};

var better_browser = '<div class="container"><div class="better-browser row"><div class="col-md-2"></div><div class="col-md-8"><h3>We are sorry but it looks like your Browser doesn\'t support our website Features. In order to get the full experience please download a new version of your favourite browser.</h3></div><div class="col-md-2"></div><br><div class="col-md-4"><a href="https://www.mozilla.org/ro/firefox/new/" class="btn btn-warning">Mozilla</a><br></div><div class="col-md-4"><a href="https://www.google.com/chrome/browser/desktop/index.html" class="btn ">Chrome</a><br></div><div class="col-md-4"><a href="https://windows.microsoft.com/en-us/internet-explorer/ie-11-worldwide-languages" class="btn">Internet Explorer</a><br></div><br><br><h4>Thank you!</h4></div></div>';

