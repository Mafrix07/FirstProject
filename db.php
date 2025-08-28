<?php
$host="localhost";
$user="root";
$password="";
$dbname="firstproject";

//connexion
$conn=new mysqli($host,$user,$password,$dbname);

//verification
if($conn-> connect_error){
    die("echec de connexion:".$conn-> connect_error);
}
echo "connexion reussie" ;
?>
