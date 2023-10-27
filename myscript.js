function hello(){
    alert("Hello!");
}

/*
let cart = [];
let cartTotal = 0;

function addToCart(productId) {
    // In a real application, you would need to implement product addition logic here.
    // For this example, we'll simply update the cart visually.
    
    // cart.push(productId);
    // cartTotal += getProductPrice(productId);

    if (productId === 1) {
        cartTotal = 10.00;
    } else {
        cartTotal = 15.00;
    }
    // Update the cart display
    updateCartDisplay();
}

function getProductPrice(productId) {
    // In a real application, you'd fetch the product's price from a database.
    // For this example, we'll return static prices.
    if (productId === 1) {
        return 10.00;
    } else if (productId === 2) {
        return 15.00;
    }
    return 0.00;
}
*/

function updateCartDisplay() {
    const cart = document.getElementById("cart");
    const cartItems = cart.children[0];
    const cartTotalElement = cart.children[1];

    cartItems.innerHTML = "New Item!";
    cartTotalElement.textContent = 10.toFixed(2);
}

