// Show cart_Product-details
const cartMobileBtn = document.querySelector('.js-mobile-btn__cart')
const cartMobile = document.querySelector('.mobile-cart .header-cart-notify__moible')
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

//product store
const productItems = document.querySelectorAll(".product-cat__menu-item");
const productPans = document.querySelectorAll(".product-details");
productItems.forEach((tab, index) => {
  const pane = productPans[index];
  tab.onclick = function () {
    $(".product-cat__menu-item.active").classList.remove("active");
    $(".product-details.show").classList.remove("show");

    this.classList.add("active");
    pane.classList.add("show");
  };
});