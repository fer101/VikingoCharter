<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex">
    <meta name="googlebot" content="noindex">
	<title>Message sent successfully!</title>
	<link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i">
    <link rel="stylesheet" href="assets/fonts/simple-line-icons.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=PT+Sans">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.1.1/aos.css">

    <?php include'cabecera.php';?>


<main class="page contact-us-page">
        <section class="clean-block clean-form dark">
            <div class="container">
                <div class="block-heading">                    
                    <p>Send a message here or call: <a title="Call" href="tel:+523222238099" style="text-decoration: none; color: black; padding-left: 10px">+52 (322) 223 8099</a></p>
                </div>
                	<div id="envias" align="center">Your message has been sent correctly, we will respond as soon as possible. 
                	You can call us if you want immediate information. 
                	 <br>						
						<a href="/"><button type="button" class="btn btn-success">Done</button></a>
					</div>
				<?php 										
					$destino="contact@vikingocharters.com";					
					$asunto = $_POST ['asunto'];
					$correo = $_POST['nombre'].'<'.$_POST ['correo'].'>';					
					$cuerpo = "$_POST[mensaje]";

					mail($destino,$asunto,utf8_decode($cuerpo),"FROM: ".$correo);					

				 ?>
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