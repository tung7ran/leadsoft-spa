// const $ = document.querySelector.bind(document);



  const tabs = document.querySelectorAll(".tab-item");
  const panes = document.querySelectorAll(".tab-pane");
  const tabActive = $(".tab-item.active");
  tabs.forEach((tab, index) => {
    const pane = panes[index];
    tab.onclick = function () {
      $(".tab-item.active").classList.remove("active");
      $(".tab-pane.active").classList.remove("active");
  
      this.classList.add("active");
      pane.classList.add("active");
    };
  });

  // // ------------------------------------------------------------------

const tabCategory = document.querySelectorAll(".tab-category");
const tabPane = document.querySelectorAll(".slide-container");
const tabsActive = $(".tab-category.active");
tabCategory.forEach((tab, index) => {
  const pane = tabPane[index];
  tab.onclick = function () {
    $(".tab-category.active").classList.remove("active");
    $(".slide-container.active").classList.remove("active");
    this.classList.add("active");
    pane.classList.add("active");
  };
});

// --------------------------------------------------------------------------------

const cart = document.querySelector(".header-contact-right__cart");
const notify = document.querySelector(".header-cart--notify");
const close = document.querySelector(".header-cart--notify__info--top-icon");
cart.addEventListener("click", () => {
  close.classList.toggle("show");
});
cart.addEventListener("click", () => {
  notify.classList.toggle("show");
});

// // ---------------------------------------------------------------------------------
const openModalBtn = document.querySelector(".service--detail__btn");
const modal = document.querySelector(".form--contact");

function toggleModal() {
  modal.classList.toggle("hide");
}


if (modal) {
  modal.addEventListener(
    "click",
    (e) => {
      if (e.target == e.currentTarget) toggleModal();
    },
    false
  );
}
if (openModalBtn) {
  openModalBtn.addEventListener("click", toggleModal, false);
}

// // ---------------------------------------------------------------------------------
const tabRecruit = document.querySelectorAll(".recruit-pagination-list__item");
const paneRecruit = document.querySelectorAll(".main-recruit-content__list");
tabRecruit.forEach((tab, index) => {
  const pane = paneRecruit[index];
  tab.onclick = function () {
    $(".recruit-pagination-list__item.active").classList.remove("active");
    $(".main-recruit-content__list.show").classList.remove("show");

    this.classList.add("active");
    pane.classList.add("show");
  };
});
// // ----------------------------------------------------------------

// scroll menu
const navMobileBtn = document.querySelector(".js-mobile-btn");
const mobileMenu = document.querySelector(".js-mobile-menu");
var mobileOverlay = document.querySelector(".mobile-menu-overlay");
navMobileBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
  mobileOverlay.classList.toggle("show");
});
mobileOverlay.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
  mobileOverlay.classList.remove("show");
});
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
      1040: {
        slidesPerView: 4,
      }

  },
});

//  address single page
const addressItems = document.querySelectorAll(".address-nav-location__item");
const addressPanes = document.querySelectorAll(".location-details");
// const tabActive = $(".address-nav-location__item.active");
addressItems.forEach((tab, index) => {
  const pane = addressPanes[index];
  tab.onclick = function () {
    $(".address-nav-location__item.active").classList.remove("active");
    $(".location-details.active").classList.remove("active");

    this.classList.add("active");
    pane.classList.add("active");
  };
});


// Show contect service
const tabsHeading = document.querySelectorAll(".tab-item-heading");
const panesContent = document.querySelectorAll(".tab-pane-content");

tabsHeading.forEach((tab, index) => {
  const paneContent = panesContent[index];

  tab.onclick = function () {
    $(".tab-item-heading.active").classList.remove("active");
    $(".tab-pane-content.active").classList.remove("active");

    this.classList.add("active");
    paneContent.classList.add("active");
  };
});

// show google maps
const showBtns = document.querySelectorAll(".location-view");
const modalMaps = document.querySelector('.modal--maps');
const modalContainer = document.querySelector(".modal--maps--address");
const modalClose = document.querySelector('.js-modal-close')

function showModalMaps(){
  modalMaps.classList.add('open');
}
function hideModalMaps(){
  modalMaps.classList.remove('open');
}

for(const showBtn of showBtns){
  showBtn.addEventListener("click", showModalMaps);
}

modalClose.addEventListener("click", hideModalMaps);
modalMaps.addEventListener('click', hideModalMaps)
modalContainer.addEventListener('click', function(e) {
    e.stopPropagation()
})

// Scroll To Top

      var mybutton = document.getElementById("myBtn");

        window.onscroll = function() {
            scrollFunction()
        };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }

        function topFunction() {
          window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
        }


// Search mobile
const formSearch = document.querySelector('.search-mobile-form');
const searchBtn = document.querySelector('.search-mobile');

function toggleModalSearch() {
  formSearch.classList.toggle("hide");
}
searchBtn.addEventListener("click", toggleModalSearch);

// formSearch.addEventListener("click", (e) => {
//   if (e.target == e.currentTarget) toggleModalSearch();
// });












