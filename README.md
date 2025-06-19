# yuuyooContact
Contact us form for YuuYoo with Javascript and PHP based on https://mailtrap.io/blog/javascript-contact-form/


*** NEEDED!!!
Add reCaptcha, a security feature that prevents bots, to your contact form. 

Here's how to add it:
Create a reCaptcha account at Google reCaptcha and follow the instructions to create a new site.
Add the Google-provided reCaptcha script to the contact.html file, and include the g-recaptcha div within your form.

```
<head>
  <!-- Add the following line within your head tag -->
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</head>
<body>
  <form>
    <!-- Your form fields here -->
    <div class="g-recaptcha" data-sitekey="your-recaptcha-site-key"></div>
    <button type="submit">Submit</button>
  </form>
</body>

<?php
  $recaptcha_secret = "your-recaptcha-secret-key";
  $recaptcha_response = $_POST["g-recaptcha-response"];

  $url = "https://www.google.com/recaptcha/api/siteverify?secret=$recaptcha_secret&response=$recaptcha_response";
  $response = file_get_contents($url);
  $response_data = json_decode($response, true);

  if (!$response_data["success"]) {
    // reCaptcha validation failed, return an error message
  } else {
    // Your email sending code here
  }
?>
```
