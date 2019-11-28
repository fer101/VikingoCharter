<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marietas - Vikingo Charters</title>
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i">
    <link rel="stylesheet" href="assets/fonts/simple-line-icons.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=PT+Sans">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.1.1/aos.css">

        <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-123735059-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-123735059-1');
    </script>

   <?php include'cabecera.php';?>
    <main class="page landing-page" style="font-family:'PT Sans', sans-serif;">
        <section class="clean-block clean-hero" style="background-image:url(&quot;assets/img/marietas-tour.jpg&quot;);color:rgba(39,39,39,0.85);">
            <div class="text">
                <img src="assets/img/vikingo.png">
                <h2 style="font-family:'PT Sans', sans-serif;">Vikingo Charters</h2>
                <p style="font-family:'PT Sans', sans-serif;">The Best Place For Fishing Since 1988</p>
            </div>
        </section>
        <section class="clean-block clean-info dark">
            <div class="container">
                <div class="block-heading">
                    <h2 class="text-info">Islas Marietas National Park</h2>
                    <p>The famous love beach at Islas Marietas National Park </p>
                </div>
                <div class="row align-items-center">
                    <div class="col-md-6"><img src="assets/img/marietas-tour.jpg" style="#"></div>
                    <div class="col-md-6">
                        <h3>Explore Marietas Island</h3>
                        <div class="getting-started-info">
                            <p>The Marietas islands were originally formed many thousands of years ago by volcanic activity, and are completely uninhabited. The islands are about an hour-long boat ride west-northwest from the coast of Puerto Vallarta or a 15-minute boat ride from the resort area of Punta Mita and are visited daily by hundreds of tourists. </p>

                            <p> Is a popular location for snorkeling and scuba diving.Not even during whale watching tours, people often report seeing sea turtles, manta rays, octopus, wild dolphins, humpback whales and thousands of species of tropical fish around the islands. The islands are also home to a few thousand birds, with species such as the blue-footed booby.</p>
                </div>
            </div>
        </section>
        <section class="clean-block slider dark">
            <div class="container">
                <div class="block-heading">
                    <h2 class="text-info">Marietas Island</h2>
                    <p>Some beautiful vistas from marietas island </p>
                </div>
                <div class="carousel slide" data-ride="carousel" id="carousel-1">
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active"><img class="w-100 d-block" src="assets/img/scenery/marietas-island.jpg" alt="The love beach"></div>
                        <div class="carousel-item"><img class="w-100 d-block" src="assets/img/scenery/marietas-tour.jpg" alt="Marietas Island"></div>
                        <div class="carousel-item"><img class="w-100 d-block" src="assets/img/scenery/blue-footed-bobby-marietas.jpg" alt="Blue Fotted Bobby"></div>
                    </div>
                    <div><a class="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev"><span class="carousel-control-prev-icon"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carousel-1" role="button"
                            data-slide="next"><span class="carousel-control-next-icon"></span><span class="sr-only">Next</span></a></div>
                    <ol class="carousel-indicators">
                        <li data-target="#carousel-1" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel-1" data-slide-to="1"></li>
                        <li data-target="#carousel-1" data-slide-to="2"></li>
                    </ol>
                </div>
            </div>
        </section>
    </main>

    <?php include'pie.php';?>

    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/theme.js"></script>
    <script src="assets/js/bs-animation.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.1.1/aos.js"></script>
</body>

</html>