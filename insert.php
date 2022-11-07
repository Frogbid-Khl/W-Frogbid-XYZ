<?php
include('include/dbController.php');
$db_handle = new DBController();
date_default_timezone_set("Asia/Dhaka");

if (isset($_POST["addData"])) {

    $name = $db_handle->checkValue($_POST['name']);
    $email = $db_handle->checkValue($_POST['email']);
    $phone = $db_handle->checkValue($_POST['phone']);

    $inserted_at=date("Y-m-d H:i:s");

    $insert = $db_handle->insertQuery("INSERT INTO `registration`(`name`, `email`, `phone`, `inserted_at`) VALUES ('$name','$email','$phone','$inserted_at')");

    $backend_message='';

    $i=0;
    foreach ($_POST as $key => $value) {
        if($i<count($_POST)-1){
            $backend_message.= htmlspecialchars($key).": ".htmlspecialchars($value)."<br>";
        }
        $i++;
    }

    $email_to = $db_handle->notify_email();
    $subject = 'Email From FrogBid XYZ';

    $headers = "From: FrogBid XYZ <" . $db_handle->from_email() . ">\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    $messege = "<html>
                    <body style='background-color: #eee; font-size: 16px;'>
                        <div style='max-width: 600px; min-width: 200px; background-color: #fff; padding: 20px; margin: auto;'>
                        
                            <p style='text-align: center;color:green;font-weight:bold'>New Member Info Data</p>   
                        
                            <p style='color:black'> " . $backend_message . "
                            </p>
                        </div>
                    </body>
                </html>
                ";

    if (mail($email_to, $subject, $messege, $headers)) {
        echo "<script>
                alert('Contact Successful');
                window.location.href='/';
                </script>";
    }

}
