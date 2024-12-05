document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents form from submitting normally

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("msg").value;

    // Display a message (for now, just log it to the console)
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    
    alert("Thank you for your message, " + name + "!");
    
    // Clear the form after submission
    document.getElementById("form").reset();
});