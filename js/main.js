const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const panes = $$('.tab-pane');
// console.log(tabs, panes);
const tabActive = $('.tab-item.active');


tabs.forEach((tab, index) => {
    const pane = panes[index];
    tab.onclick = function(){
        
        $('.tab-item.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');
        
        this.classList.add('active');
        pane.classList.add('active');
    }
})


// ------------------------------------------------------------------
const tabCategory = $$('.tab-category');
const tabPane = $$('.tab-product');
// console.log(tabs, panes);
const tabsActive = $('.tab-category.active');


tabCategory.forEach((tab, index) => {
    const pane = tabPane[index];
    tab.onclick = function(){
        
        $('.tab-category.active').classList.remove('active');
        $('.tab-product.active').classList.remove('active');
        
        this.classList.add('active');
        pane.classList.add('active');
    }
})
// 
const cart = document.querySelector('.header-contact-right__cart')
const notify =  document.querySelector('.header-cart--notify')
const close =  document.querySelector('.header-cart--notify__info--top-icon')
console.log(close)
cart.addEventListener('click', () => {
    close.classList.toggle('show')
})
cart.addEventListener('click', () => {
    notify.classList.toggle('show')
})

// ---------------------------------------------------------------------------------
const modal = document.querySelector(".form--contact");
const openModalBtn = document.querySelector(".open-modal-btn");
// const iconCloseModal = document.querySelector(".modal__header i");
// const buttonCloseModal = document.querySelector(".modal__footer button");

function toggleModal() {
  modal.classList.toggle("hide");
}

openModalBtn.addEventListener("click", toggleModal);
// iconCloseModal.addEventListener("click", toggleModal);
// buttonCloseModal.addEventListener("click", toggleModal);

modal.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) toggleModal();
});
