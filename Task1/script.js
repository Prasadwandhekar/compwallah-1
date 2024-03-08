// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    // Retrieve form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    // You can add further processing like validation or sending data to a server
    
    // Example: Display an alert with the form data
    alert('Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
});
