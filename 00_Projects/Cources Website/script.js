document.querySelector('.profile-img').addEventListener('click', function(event) {
    event.stopPropagation();
    const dropdown = document.querySelector('.dropdown-menu');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
});

document.addEventListener('click', function() {
    const dropdown = document.querySelector('.dropdown-menu');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    }
});

document.querySelector('.dropdown-menu').addEventListener('click', function(event) {
    event.stopPropagation();
});



document.addEventListener('DOMContentLoaded', function() {
    const cartButtons = document.querySelectorAll('.add-to-cart');
    const cartCountElement = document.getElementById('cart-count');
    const cartIcon = document.getElementById('cart-icon');
    const cartModal = document.getElementById('cart-modal');
    const closeModal = document.querySelector('.close');
    const cartItemsElement = document.getElementById('cart-items');


    let cartCount = JSON.parse(localStorage.getItem('cartCount')) || 0;
    cartCountElement.textContent = cartCount;

    cartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const courseName = button.getAttribute('data-course-name');
            const coursePrice = button.getAttribute('data-course-price');
            addToCart(courseName, coursePrice);
        });
    });

    cartIcon.addEventListener('click', function(event) {
        event.preventDefault();
        showCart();
    });

    closeModal.addEventListener('click', function() {
        cartModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == cartModal) {
            cartModal.style.display = 'none';
        }
    });

    function addToCart(courseName, price) {
    
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push({ courseName, price });
        localStorage.setItem('cart', JSON.stringify(cart));

   
        cartCount++;
        localStorage.setItem('cartCount', JSON.stringify(cartCount));
        cartCountElement.textContent = cartCount;

        alert(`${courseName} has been added to your cart!`);
    }

    function showCart() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItemsElement.innerHTML = '';

        cart.forEach((item, index) => {
            let li = document.createElement('li');
            li.textContent = `${item.courseName} - ₹${item.price}`;
            let removeButton = document.createElement('span');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-button');
            removeButton.addEventListener('click', function() {
                removeFromCart(index);
            });
            li.appendChild(removeButton);
            cartItemsElement.appendChild(li);
        });

        cartModal.style.display = 'block';
    }

    function removeFromCart(index) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (cart.length > index) {
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));

            cartCount = Math.max(0, cartCount - 1);
            localStorage.setItem('cartCount', JSON.stringify(cartCount));
            cartCountElement.textContent = cartCount;

            showCart();
        }
    }});