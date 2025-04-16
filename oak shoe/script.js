// Get modal elements
const authModal = document.getElementById('authModal');
const closeAuth = document.getElementById('closeAuth');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');

// Open modal (for example, on button click)
document.getElementById('loginBtn').addEventListener('click', () => {
  authModal.style.display = 'flex';
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('registerForm').style.display = 'none';
});

document.getElementById('registerBtn').addEventListener('click', () => {
  authModal.style.display = 'flex';
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('registerForm').style.display = 'block';
});

// Close modal
closeAuth.addEventListener('click', () => {
  authModal.style.display = 'none';
});

// Toggle between Login and Register
showRegister.addEventListener('click', () => {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('registerForm').style.display = 'block';
});

showLogin.addEventListener('click', () => {
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('registerForm').style.display = 'none';
});

function addToCart() {
  let cartCount = parseInt(localStorage.getItem('cartCount') || '0');
  cartCount++;
  localStorage.setItem('cartCount', cartCount);
  updateCartCount();
}
// Function to update the cart item count
function updateCartCount() {
  const cartCount = localStorage.getItem('cartCount') || 0;
  document.getElementById('cart-count').textContent = cartCount;
}

// Call the function on page load to set the initial cart count
window.onload = updateCartCount;


// Load cart from localStorage and update count
document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartCountElem = document.getElementById('cart-count');
  if (cartCountElem) {
    cartCountElem.textContent = cartCount;
  }
});
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
}
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const productElement = button.closest('.product-card'); // or `.product` depending on your HTML

    const product = {
      name: productElement.querySelector('h3')?.innerText || productElement.querySelector('p')?.innerText,
      price: parseFloat(productElement.querySelectorAll('p')[1]?.innerText.replace('$', '')),
      image: productElement.querySelector('img').getAttribute('src')
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Optional: Update cart count in header
    updateCartCount();
  });
});

