<?php

$recepient = "4nucleusstudio@gmail.com";
$sitename = "Nucleus";

$name = trim($_GET["customer"]);
$email = trim($_GET["email"]);
$textarea = trim($_GET["textarea"]);

$pagetitle = "Feedback \"$sitename\"";
$message = "\nName: $name \nE-mail: $email \nTextarea: $textarea";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");