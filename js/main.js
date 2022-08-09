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
cart.addEventListener('click', () => {
    close.classList.toggle('show')
})
cart.addEventListener('click', () => {
    notify.classList.toggle('show')
})

const tabRecruit =$$('.recruit-pagination-list__item')
const paneRecruit =$$('.main-recruit-content__list')

tabRecruit.forEach((tab,index) => {
    const pane = paneRecruit[index]
    tab.onclick = function () {
      $('.recruit-pagination-list__item.active').classList.remove('active');
      $('.main-recruit-content__list.show').classList.remove('show');
  
      this.classList.add('active');
      pane.classList.add('show');
    }
})


