<?php
    header('Access-Control-Allow-Origin: *');
    
    $conn = new mysqli('localhost', 'root',"", 'test');

    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }
    else{
        $name = $_POST['name'];
        $email = $_POST['email'];
        $service = $_POST['service'];
        $message = $_POST['message'];
        
        $sql = "INSERT INTO contacts(name,email,service,message) VALUES('$name','$email','$service', '$message');";
        $res = mysqli_query($conn, $sql);
         
        if($res){
             echo '<script>window.location.href = "/";</script>';
        }
        else{
            echo "Error!";
        }
        $conn->close();
    }
?>