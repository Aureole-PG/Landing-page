<?php
if(!$_POST) exit;
if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$address = "web@unitedwom.com";
$e_subject = 'Contacto desde el portal web';

$e_body = "<p>Ha recibido un mensaje desde el portal web, a continuación el detalle:</p>";
$e_body .= "<p><b>Nombre:</b> $name<br />";
$e_body .= "<b>Correo:</b> $email<br />";
$e_body .= "<b>Teléfono:</b> $phone<br />";
$e_body .= "<b>Opción:</b> $subject<br />";
$e_body .= "<b>Mensaje:</b> $message</p>";

$headers = "From: $email" . PHP_EOL;
$headers .= "Reply-To: $email" . PHP_EOL;
$headers .= "MIME-Version: 1.0" . PHP_EOL;
$headers .= "Content-type: text/html; charset=utf-8" . PHP_EOL;
$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;
if(mail($address, $e_subject, $e_body, $headers)) {
    echo json_encode( $_POST );
	
} else {
	http_response_code(422);
	echo json_encode(array("error" => "missing field", "field" => "email"));
} 


?>

