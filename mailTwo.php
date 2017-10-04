<?php

$recepient = "artem@kit.msk.ru";
$sitename = "Разработка и маркетинг";
$wontPage = 'хочу брошюру';

$email = trim($_POST["yourEmail"]);
$message = "Хочу: $wontPage \nEmail: $text";

$pagetitle = "нужна брошюра! \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
