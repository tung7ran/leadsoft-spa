const $ = document.querySelector.bind(document);


const tabs = document.querySelectorAll('.tab-item');
const panes = document.querySelectorAll('.tab-pane');
const tabActive = $('.tab-item.active');
tabs.forEach((tab, index) => {
    const pane = panes[index];
    tab.onclick = function(){
        
        $('.tab-item.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');
        
        this.classList.add('active');
        pane.classList.add('active');
    }
});

// // ------------------------------------------------------------------
/*
const tabCategory = document.querySelectorAll('.tab-category');
const tabPane = document.querySelectorAll('.tab-product');
const tabsActive = $('.tab-category.active');
tabCategory.forEach((tab, index) => {
    const pane = tabPane[index];
    tab.onclick = function(){
        $('.tab-category.active').classList.remove('active');
        $('.tab-product.active').classList.remove('active');
        this.classList.add('active');
        pane.classList.add('active');
    }
});
*/
// --------------------------------------------------------------------------------

const cart = document.querySelector('.header-contact-right__cart')
const notify =  document.querySelector('.header-cart--notify')
const close =  document.querySelector('.header-cart--notify__info--top-icon')
cart.addEventListener('click', () => {
    close.classList.toggle('show')
});
cart.addEventListener('click', () => {
    notify.classList.toggle('show')
});

// // ---------------------------------------------------------------------------------
const openModalBtn = document.getElementById("open-modal-btn");
const modal = document.getElementById("open-contact");
 
function toggleModal() {
  modal.classList.toggle("hide");
}
if (modal){
    modal.addEventListener("click", (e) => {
      if (e.target == e.currentTarget) toggleModal();
    // console.log(e.target);
    }, false);
}
if (openModalBtn){
    openModalBtn.addEventListener("click", toggleModal, false);
}

// // ---------------------------------------------------------------------------------
// const tabRecruit =$$('.recruit-pagination-list__item')
// const paneRecruit =$$('.main-recruit-content__list')
const tabRecruit = document.querySelectorAll('.recruit-pagination-list__item');
const paneRecruit = document.querySelectorAll('.main-recruit-content__list');
tabRecruit.forEach((tab,index) => {
    const pane = paneRecruit[index]
    tab.onclick = function () {
      $('.recruit-pagination-list__item.active').classList.remove('active');
      $('.main-recruit-content__list.show').classList.remove('show');
  
      this.classList.add('active');
      pane.classList.add('show');
    }
});
// // ----------------------------------------------------------------

const openModalGift = document.getElementById("promotion--detail__btn");
const modalGift = document.getElementById("open-form");
 
function toggleModalGift() {
    modalGift.classList.toggle("hide");
}
if (modalGift){
    modalGift.addEventListener("click", (e) => {
      if (e.target == e.currentTarget) toggleModalGift();
    }, false);
}
if (openModalGift){
    openModalGift.addEventListener("click", toggleModalGift, false);
}

// scroll menu
        const navMobileBtn = document.querySelector('.js-mobile-btn')
        const mobileMenu = document.querySelector('.js-mobile-menu')
        var mobileOverlay = document.querySelector('.mobile-menu-overlay')
        navMobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('show')
            mobileOverlay.classList.toggle('show')
        } );
        mobileOverlay.addEventListener('click', () => {
            mobileMenu.classList.remove('show')
            mobileOverlay.classList.remove('show')
        }
        );
        // scroll menu__list
       
// slider
var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
    },
  });

  
  //  tabs service
