let cart = [];
let cartTotal = 0;

function addToCart(productId) {
    // In a real application, you would need to implement product addition logic here.
    // For this example, we'll simply update the cart visually.
    cart.push(productId);
    cartTotal += getProductPrice(productId);
    
    // Update the cart display
    updateCartDisplay();
}

function getProductPrice(productId) {
    // In a real application, you'd fetch the product's price from a database.
    // For this example, we'll return static prices.
    if (productId == 1) {
        return 10.00;
    } else if (productId == 2) {
        return 15.00;
    }
    return 0.00;
}

function updateCartDisplay() {
    const shoppingCart = document.getElementById('cart');
    const cartItems = shoppingCart.children[0];
    const cartTotalElement = shoppingCart.children[1];
    cartItems.innerHTML = cart.map(productId => <li>Product ${productId}</li>).join('');
    cartTotalElement.textContent = cartTotal.toFixed(2);
}
