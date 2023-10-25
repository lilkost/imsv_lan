  
const questionForm = new Swiper('.question__form', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 10,

  pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
  },

  navigation: {
    nextEl: '.question__button-next',
    prevEl: '.question__button-prev',
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  on: {
      init: function () {
        let lenght = document.querySelectorAll('.question__slide').length
          let paginLenght = document.querySelector('.question__pagination span')
          paginLenght.textContent = `из ${lenght}`
      },
    },

});

questionForm.on('slideChange', function () {
  let lenght = document.querySelectorAll('.question__slide').length
  let paginCurrent = document.querySelector('.question__pagination strong')
  paginCurrent.textContent = questionForm.activeIndex + 1;
  // thumb.style.width = `calc(100% / ${lenght - (questionForm.activeIndex + 1)})`;
});

if(document.querySelector('.modal-example')) {
let btnOpenModal = document.querySelector('.page-top__btn');
let btnCloseModal = document.querySelector('.modal-example__close');
let modalEx = document.querySelector('.modal-example');

btnOpenModal.addEventListener('click', ()=>{
  modalEx.classList.toggle('open');
});

btnCloseModal.addEventListener('click', ()=> {
  modalEx.classList.toggle('open');
})
}

if(document.querySelector('.page-top__list')) {
let items = document.querySelectorAll('.page-top__item');

for(let i = 0; i <=items.length; i++) {
  if(i === 0) {
    items[i].setAttribute('count', `0${i+1}`)
  }
  else if( i > 0){
    items[i].setAttribute('count', `${i+1}`)
  }
}
}


if(document.querySelector('.marquee')) {
  new Marquee('marqueeOne', {
    direction: 'rtl',
    speed: .6, 
    delayAfter: .1, 
    delayBefore: .1
  });
  new Marquee('marqueeTwo', {
    direction: 'rtl',
    speed: .6, 
    delayAfter: .1, 
    delayBefore: .1
  });
}

if(document.querySelector('.advantages__item')){
  let items = document.querySelectorAll('.advantages__item');
  items.forEach(function(item,index){
    item.querySelector('.advantages__item-id').textContent = index+1 < 10 ? `0${index+1}` : index + 1;
  });
}

if(document.querySelector('.experts__slider')) {
  const expertsSlider = new Swiper('.experts__slider', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3.15,
    spaceBetween: 20,

    navigation: {
      nextEl: '.experts__slider-next',
      prevEl: '.experts__slider-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      1441: {
        slidesPerView: 3.15,
      },
      1440: {
        slidesPerView: 2.5,
      },
      1281:{
        slidesPerView: 2.5
      },
      1280:{
        slidesPerView: 2.2
      },
      1001:{
        slidesPerView: 2.2
      },
      1000:{
        slidesPerView: 1.75
      },
      480:{
        slidesPerView: 1.5
      },
      280:{
        slidesPerView: 1,
      }
    }
  });
}

if(document.querySelector('.reviews__slider')) {
  const reviewsSlider = new Swiper('.reviews__slider', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    spaceBetween: 19,

    pagination: {
      el: '.reviews__pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.reviews__slider-next',
      prevEl: '.reviews__slider-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      993: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 2,
      },
      769:{
        slidesPerView: 2,
      },
      768:{
        slidesPerView: 1.5,
      },
      569:{
        slidesPerView: 1.5,
      },
      280:{
        slidesPerView: 1
      }
    }
  });
}

if(document.querySelector('.questions__item')) {
  let items = document.querySelectorAll('.questions__item');

  items.forEach(item=> {
    item.addEventListener('click', ()=> {
      item.classList.toggle('questions__item_active')
    });
  })
}
if(document.querySelector('.reviews__slide-video')) {
  Fancybox.bind('[data-fancybox]');
}  

if(document.querySelector('#phoneBanner')) {
  let phoneInput = document.querySelector("#phoneBanner");
  const phoneMask = new IMask(phoneInput, {
    mask: "+{7}(000)000-00-00",
  });
}
if(document.querySelector('#phoneMedia')) {
  let phoneInput = document.querySelector("#phoneMedia");
  const phoneMask = new IMask(phoneInput, {
    mask: "+{7}(000)000-00-00",
  });
}

if(document.querySelector('.media__textarea')) {
  let input = document.querySelector('.media__textarea');
  function countRows(id) {
    var area = document.querySelector('.media__textarea');
    var c = 1;
    var len = 0;
    for ( i = 0; i < area.value.length; i++ ) {
      if ( area.value[i] == '\n' ) c++;
      if ( c == 5 ) len = i;
    }
    if ( len > 0 ) area.value = area.value.slice(0, len + 1);
  }
  input.addEventListener('input', ()=>{
    countRows(input)
  });
  input.addEventListener('onkeydown', ()=> {
    countRows(input);
  })
}