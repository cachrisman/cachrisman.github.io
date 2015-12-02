<?php
  if (isset($_REQUEST['inspect'])) {
    var_dump($_SERVER);
  } else {
    header('Access-Control-Allow-Origin: http://' . $_SERVER['HTTP_HOST']);
    header('Content-type: text/plain');
    readfile('app.js');
  }
?>