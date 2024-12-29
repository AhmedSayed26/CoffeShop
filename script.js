let navBar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navBar.classList.toggle('active');
    cartItem.classList.remove('active');
    searchBar.classList.remove('active');
    console.log("turn active menu")
};

let cartItem = document.querySelector('.cart-item-container');
document.querySelector('#cart-btn').onclick  = () =>{
    cartItem.classList.toggle('active');
    navBar.classList.remove('active');
    searchBar.classList.remove('active');
    console.log("turn active cart")
}

let searchBar = document.querySelector('.search-form')
document.querySelector('#search-btn').onclick = () => {
    searchBar.classList.toggle('active');
    navBar.classList.remove('active');
    cartItem.classList.remove('active');
    console.log("turn active search bar")
}
window.onscroll = () => {
    navBar.classList.remove('active');
    cartItem.classList.remove('active');
    searchBar.classList.remove('active');
};

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartContainer = document.querySelector('.cart-item-container');
const checkoutButton = cartContainer.querySelector('.checkout-now');
const popupMessage = document.getElementById('popupMessage');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const box = event.target.closest('.box');
        const itemName = box.querySelector('h3').textContent;
        const itemPrice = box.querySelector('.price').textContent;
        const itemImage = box.querySelector('img').src;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span class="fas fa-times" id="removeITEM"></span>
            <img src="${itemImage}" alt="${itemName}">
            <div class="content">
                <h3>${itemName}</h3>
                <div class="price">${itemPrice}</div>
            </div>
        `;

        cartContainer.insertBefore(cartItem, checkoutButton);
        //once you click add to cart
        popupMessage.classList.add('active');
        // after you click add to cart display none >> popup message
        setTimeout(() => {
            popupMessage.classList.remove('active');
        }, 2500);

        
        cartItem.querySelector('.fa-times').addEventListener('click', () => {
            cartItem.remove();
        });
    });
});

let hoverProductsImg = document.querySelectorAll('.details');

hoverProductsImg.forEach(img => {
    const originalSrc = img.src;
    img.addEventListener('mouseover', (event) => {
        img.src = "../images/products111.webp"
        event.target.style.transition = "transform 0.9s ease-in-out";
    });

    img.addEventListener('mouseout', (event) => {
        img.src = originalSrc; 
        event.target.style.transform = "scale(1)"; 
    });
});


let inputs = document.querySelectorAll("input")
inputs.forEach(input =>{
    input.addEventListener("input",function(){
        window.sessionStorage.setItem(input.id , input.value);
    })
    if(window.sessionStorage.getItem(input.id)){
        input.value = window.sessionStorage.getItem(input.id);
    }
});





