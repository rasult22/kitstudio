<?php

$recepient = "artem@kit.msk.ru";
$sitename = "Разработка и маркетинг";

$name = trim($_POST["yourName"]);
$phone = trim($_POST["yourPhone"]);
$email = trim($_POST["yourEmail"]);
$message = "Имя: $name \nТелефон: $phone \nEmail: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");