<?php

$imePrezime = $_POST["imePrezime"]; 
$adresa = $_POST["adresa"]; 
$brojTelefona = $_POST["brojTelefona"]; 
$grad = $_POST["grad"]; 
$cokolada = $_POST["cokolada"]; 
if (isset($_POST['dodatak'])) {
    if (is_array($_POST['dodatak'])) {
        $dodatak = implode(', ', $_POST['dodatak']);
    } else {
        $dodatak = $_POST['dodatak'];
    }
} else {
    $dodatak = "Nema dodataka";
}
$komentar = filter_input(INPUT_POST, "kom", FILTER_SANITIZE_STRING);

$host = 'localhost';
$dbname = 'narudzbina_mysql';
$username = 'root';
$password = '';

$conn = mysqli_connect( hostname:$host, 
                        username: $username, 
                        password: $password, 
                        database: $dbname);

if (mysqli_connect_errno()){
    die("Greska pri konekciji: " . mysqli_connect_error()); 
}

$sql = "INSERT INTO narudzbine (imePrezime,
                                adresa,
                                brojTelefona,
                                grad,
                                cokolada,
                                dodatak,
                                komentar)
        VALUES (?,?,?,?,?,?,?)" ; 

$stmt = mysqli_stmt_init($conn);

if(! mysqli_stmt_prepare($stmt,$sql)){
    die(mysqli_error($conn));
}

mysqli_stmt_bind_param($stmt, "sssssss",
                        $imePrezime,
                        $adresa,
                        $brojTelefona,
                        $grad,
                        $cokolada,
                        $dodatak,
                        $komentar
                        );

mysqli_stmt_execute($stmt);

///////////////////////////////////
$connection = mysqli_connect("localhost", "root", "", "narudzbina_mysql");

if (!$connection) {
    die("Konekcija na bazu nije uspela: " . mysqli_connect_error());
}

$query="SELECT * FROM narudzbine";
$result = mysqli_query($connection, $query);

$data = array();

while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}

$json_data = json_encode($data, JSON_PRETTY_PRINT);

file_put_contents('podaci.json', $json_data);

mysqli_close($connection);


echo "Prijava uspesno evidentirana."

?>