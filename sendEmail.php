<?php
// Get the form fields, remove whitespace
$name = trim($_POST['name']);
$email = trim($_POST['email']);
$message = trim($_POST['message']);

// Set the recipient email address
$to = "viktor47481@gmail.com";

// Set the email subject
$subject = "New contact form submission from $name";

// Build the email content
$email_content = "Name: $name\n";
$email_content .= "Email: $email\n\n";
$email_content .= "Message:\n$message\n";

// Build the email headers
$headers = "From: $name <$email>";

// Send the email
mail($to, $subject, $email_content, $headers);

// Redirect to the thank you page
header("Location: thankyou.html");
exit();
?>
