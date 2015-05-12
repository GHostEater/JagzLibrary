<?php
header("application/json");

$filename = $_FILES['file']['name'];
$destination = '../img/authors/' . $_POST['name'] . '.jpg';
move_uploaded_file( $_FILES['file']['tmp_name'] , $destination );

$filename2 = $_POST['name'] . '.jpg';

echo $_POST['date_birth'];
echo $_POST['bio'];

$host = 'localhost';
$db = 'library';
$db_user = 'root';
$db_pass = '';
$con = mysql_connect($host,$db_user,$db_pass) or die("Could Not Connect");
$db_select = mysql_select_db($db,$con);

$name = $_POST['name'];
$date_birth = $_POST['date_birth'];



$bio = mysql_real_escape_string($_POST['bio']);

mysql_query("INSERT INTO author VALUES (NULL, '$name', '$date_birth', '$bio', '$filename2');");

?>