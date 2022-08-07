const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs =$$('.recruit-pagination-list__item')
const panes =$$('.main-recruit-content__list')

tabs.forEach((tab,index) => {
    const pane = panes[index]
    tab.onclick = function () {
      $('.recruit-pagination-list__item.active').classList.remove('active');
      $('.main-recruit-content__list.show').classList.remove('show');
  
      this.classList.add('active');
      pane.classList.add('show');
    }
})