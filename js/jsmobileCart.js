// Show cart_Product-details
const cartMobileBtn = document.querySelector('.js-mobile-btn__cart')
const cartMobile = document.querySelector('.header-cart-notify__moible')
var mobileOverlayCart = document.querySelector('.mobile-cart-overlay')
const closeCart =  document.querySelector('.close-mobile-cart')

cartMobileBtn.addEventListener('click', () => {
    cartMobile.classList.toggle('show')
    mobileOverlayCart.classList.toggle('show')
} );
closeCart.addEventListener('click', () => {
    cartMobile.classList.remove('show')
    mobileOverlayCart.classList.toggle('show')
});
mobileOverlayCart.addEventListener('click', () =>{
    cartMobile.classList.toggle('show')
    mobileOverlayCart.classList.toggle('show')
})