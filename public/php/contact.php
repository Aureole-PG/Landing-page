<?php
if(!$_POST) exit;
if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$DateAndTime = date('m-d-Y h:i:s a', time()); 

$address = "web@unitedwom.com";
$e_subject = 'Contacto desde el portal web';

$userAddress = $email;

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

$userAddress = $email;
$userHeaders = "From: $address" . PHP_EOL;
$userHeaders .= "Reply-To: $address" . PHP_EOL;
$userHeaders .= "MIME-Version: 1.0" . PHP_EOL;
$userHeaders .= "Content-type: text/html; charset=utf-8" . PHP_EOL;
// $userHeaders .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;


$userMsg = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Este es un mensaje</title>

    <style>
      .img {
        height: 25px;
      }
      .margin-inline {
        margin-inline: 10px;
      }
      .social {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
      }
      .t-withe {
        color: #fff;
      }
      .t-blue {
        color: #0d2a48;
      }
      .t-green {
        color: #89c599;
      }
      .t-gray {
        color: gray;
      }
      .social-container {
        display: flex;
        justify-content: space-around;
      }
      a {
        text-decoration: none;
      }
    </style>
  </head>';

$userMsg .= '<body>
    <table style="width: 100%; background-color: #fff; padding: 15px; ">
      <tr>
        <td align="center">
          <img
            style="width: 125px"
            src="https://www.unitedwom.com/logo192.png"
            alt=""
          />
        </td>
      </tr>';
$userMsg .= "<tr>
        <td>
          <p>Hola $name</p>
          <p>
            En <strong class='t-green'>unitedWom</strong> agradecemos que te
            hayas puesto en contacto con nosotras. Te informamos que a día $DateAndTime hemos tomado nota de tu consulta.
          </p>
          <p>
            Este mensaje es solo un confirmación automática de recepción.
            Gestionaremos tu consulta a la mayor brevedad posible.
          </p>
          <p style='margin: 50px 0 40px'>
            Gracias por confiar en <strong class='t-green'>unitedWom</strong>
          </p>
        </td>
      </tr>";
$userMsg .= '
<tr>
        <td>
          <table style="width: 100%">
            <tr>
              <td align="center" style="width: 50%">
                <p style="text-align: center">
                  SÍGUENOS
                  <a
                    class="margin-inline"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    ><img class="img" src="https://www.unitedwom.com/icons/facebook.png" alt=""
                  /></a>
                  <a
                    class="margin-inline"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    ><img class="img" src="https://www.unitedwom.com/icons/instagram.png" alt=""
                  /></a>
                  <a
                    class="margin-inline"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    ><img class="img" src="https://www.unitedwom.com/icons/youtube.png" alt=""
                  /></a>
                </p>
              </td>
              <td align="center" style="width: 50%">
                <p style="text-align: center">
                  APP <strong class="t-green">UnitedWom</strong>
                  <a
                    class="margin-inline"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img class="img" src="https://www.unitedwom.com/icons/app_store.png" alt="" />
                  </a>
                  <a
                    class="margin-inline"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    ><img class="img" src="https://www.unitedwom.com/icons/apple.png" alt=""
                  /></a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td align="center">
          <p style="text-align: center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.unitedwom.com/privacidadWeb"
              >Política de privacidad web</a
            >
            |
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.unitedwom.com/privacidadApp"
              >Política de privacidad app</a
            >
            |
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.unitedwom.com/cookies"
              >Políticas de cookies</a
            >
            |
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.unitedwom.com/condiciones"
              >Condiciones de uso</a
            >
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p style="text-align: center">
            © 2022 UNITEDWOM All rights reserved.
          </p>
          <p style="text-align: center">
            Por favor no respondas a este e-mail, ya que no se recibirá ni
            contestara ningún e-mail dirigido a la cuenta de correo que realiza
            ente envió. Si deseas contactar puedes hacerlo
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:hola@unitedwom.com"
              >aquí</a
            >.
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>';


if(mail($address, $e_subject, $e_body, $headers)) {
    echo json_encode( $_POST );
	mail($userAddress, $e_subject, $userMsg, $userHeaders);
} else {
	http_response_code(422);
	echo json_encode(array("error" => "missing field", "field" => "email"));
} 


?>



