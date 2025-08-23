<?php
// index.php
echo "Hello, World!";
// Email details
$to = "recipient@example.com"; // Replace with recipient's email
$subject = "Test Email from PHP";
$message = "This is a test email sent from a PHP script.";
$headers = "From: youraddress@example.com\r\n"; // Replace with your email

// Send email
if(mail($to, $subject, $message, $headers)) {
    echo "Email sent successfully!";
} else {
    echo "Failed to send email.";
}
?> 