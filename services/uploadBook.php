<?php
header("application/json");

$filename = $_FILES['file']['name'];
$destination = '../img/books/' .$_POST['publisher']. $_POST['title'].'.jpg';
move_uploaded_file( $_FILES['file']['tmp_name'] , $destination );

$filename2 = $_POST['publisher']. $_POST['title'].'.jpg';

$host = 'localhost';
$db = 'library';
$db_user = 'root';
$db_pass = '';
$con = mysql_connect($host,$db_user,$db_pass) or die("Could Not Connect");
$db_select = mysql_select_db($db,$con);

$title = $_POST['title'];
$author_id = $_POST['author_id'];
$publisher = $_POST['publisher'];
$published = $_POST['published'];
$book_info = mysql_real_escape_string($_POST['book_info']);
$book_img = $_POST['book_img'];

mysql_query("INSERT INTO books VALUES (NULL,'$title', '$author_id', '$publisher', '$published', '$book_info', '$filename2');");

?>