<?php
header("Content-Type: application/json");

$host = 'localhost';
$db = 'library';
$db_user = 'root';
$db_pass = '';
$con = mysql_connect($host,$db_user,$db_pass) or die("Could Not Connect");
$db_select = mysql_select_db($db,$con);

$result = mysql_query("SELECT * FROM books");
$n_rows = mysql_num_rows($result);

for ($i=0; $i<$n_rows; $i++){
	$row = mysql_fetch_array($result);
	extract($row);

	$book_id = $sn;

	$result2 = mysql_query("SELECT * FROM author WHERE sn = $author_id");
	$row2 = mysql_fetch_array($result2);
	extract($row2);

	$author_name = $name;
		
	$resultsArray[$i] = array( 'book_id' => $book_id,
							   'title' => $title,
							   'author' => $author_name,
							   'author_id' => $author_id,
							   'publisher' => $publisher,
							   'published' => $published,
							   'book_info' => $book_info,
							   'book_img' => $book_img);
							   
}

echo json_encode($resultsArray);
?>