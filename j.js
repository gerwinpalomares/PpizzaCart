// Get the "Buy Now" button and add a click event listener
const sendbutton = document.querySelector('.sidebar button');
sendbutton.addEventListener('click', function() {
    // Clear the cart by setting it to an empty array
    cart = [];
    
    // Update the cart display
    displapycart();
    
    // Optional: Display a confirmation message (you can remove this if not needed)
    alert("Your purchase has been completed.");
});
