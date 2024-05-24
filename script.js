document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the contact form
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        // Prevent default form submission
        event.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        
        // Validate form fields (you can add your validation logic here)
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Example: Sending form data to a server using fetch API
        fetch('https://example.com/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle successful form submission
            console.log('Form submitted successfully:', data);
            alert('Message sent!');
        })
        .catch(error => {
            // Handle errors
            console.error('There was a problem with the form submission:', error);
            alert('An error occurred. Please try again later.');
        });
    });
    
    // Add any additional JavaScript functionality here
});
