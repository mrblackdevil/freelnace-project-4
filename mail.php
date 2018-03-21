<?php

$recepient = "spamcheck@strogov.ru,9978170@gmail.com,sro.nrs.2701@gmail.com";
$sitename = "TLConsulting - Юридическая компания";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["text"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nТелефон: $phone \nСообщение: $text";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");