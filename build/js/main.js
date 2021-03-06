'use strict';
(function () {
  var body = document.querySelector('body');
  var accordions = document.querySelectorAll('.faq__item');
  var accordionsFilter = document.querySelectorAll('.filter__form-item');
  var linkHeaderLogin = document.querySelector('.header__user-link--login');
  var linkMainNavLogin = document.querySelector('.main-nav__user-link--login');
  var modalForm = document.querySelector('.modal-form');
  var inputEmailLogin = modalForm.querySelector('#email-login');
  var inputPasswordLogin = modalForm.querySelector('#password');
  var isStorageSupport = true;
  var buttonClose = modalForm.querySelector('.modal-form__button-close');
  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__button-menu');
  var headerRow = document.querySelector('.header__row');
  var header = document.querySelector('.header');

  if (document.querySelector('.filter')) {
    var filter = document.querySelector('.filter');
    var filterButton = filter.querySelector('.filter__button');
    var filterButtonClose = filter.querySelector('.filter__button-close');

    filter.classList.remove('filter--nojs');
    filter.classList.add('filter--closed');

    filterButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      if (filter.classList.contains('filter--closed')) {
        filter.classList.remove('filter--closed');
        filter.classList.add('filter--opened');
        body.classList.add('lock');
      }
    });

    filterButtonClose.addEventListener('click', function (evt) {
      evt.preventDefault();
      if (!filter.classList.contains('filter--closed')) {
        filter.classList.add('filter--closed');
        filter.classList.remove('filter--opened');
        body.classList.remove('lock');
      }
    });

    window.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27) {
        if (filter.classList.contains('filter--opened')) {
          evt.preventDefault();
          filter.classList.add('filter--closed');
          filter.classList.remove('filter--opened');
          body.classList.remove('lock');
        }
      }
    });

  }

  navMain.classList.remove('main-nav--nojs');
  navMain.classList.add('main-nav--closed');
  headerRow.classList.remove('header__row--menu-nojs');
  headerRow.classList.add('header__row--menu-closed');

  navToggle.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
      headerRow.classList.remove('header__row--menu-closed');
      headerRow.classList.add('header__row--menu-opened');
      header.classList.add('header--opened');
      body.classList.add('lock');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      headerRow.classList.add('header__row--menu-closed');
      headerRow.classList.remove('header__row--menu-opened');
      header.classList.remove('header--opened');
      body.classList.remove('lock');
    }
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (navMain.classList.contains('main-nav--opened')) {
        evt.preventDefault();
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
        headerRow.classList.add('header__row--menu-closed');
        headerRow.classList.remove('header__row--menu-opened');
        header.classList.remove('header--opened');
        body.classList.remove('lock');
      }
    }
  });

  linkHeaderLogin.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalForm.classList.remove('modal-form--hidden');
    modalForm.classList.add('modal-form--show');
    body.classList.add('lock');
    inputEmailLogin.focus();
  });

  linkMainNavLogin.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalForm.classList.remove('modal-form--hidden');
    modalForm.classList.add('modal-form--show');
    body.classList.add('lock');
    inputEmailLogin.focus();
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (modalForm.classList.contains('modal-form--show')) {
        evt.preventDefault();
        modalForm.classList.add('modal-form--hidden');
        modalForm.classList.remove('modal-form--show');
        body.classList.remove('lock');
      }
    }
  });

  modalForm.addEventListener('click', function (evt) {
    if (evt.target === modalForm) {
      modalForm.classList.add('modal-form--hidden');
      modalForm.classList.remove('modal-form--show');
      body.classList.remove('lock');
    }
  });

  buttonClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalForm.classList.remove('modal-form--show');
    modalForm.classList.add('modal-form--hidden');
    body.classList.remove('lock');
  });

  var resetForm = function () {
    inputEmailLogin.value = '';
    inputPasswordLogin.value = '';
  };

  modalForm.addEventListener('submit', function (evt) {
    if (!inputEmailLogin.value || !inputPasswordLogin.value) {
      evt.preventDefault();
    } else {
      evt.preventDefault();
      modalForm.classList.remove('modal-form--show');
      modalForm.classList.add('modal-form--hidden');
      body.classList.remove('lock');
      if (isStorageSupport) {
        localStorage.setItem('inputEmailLogin', inputEmailLogin.value);
      }
    }

    var formData = new FormData(evt.target);

    fetchData('https://echo.htmlacademy.ru/',
        {
          method: 'POST',
          body: formData,
        }, function () {
          resetForm();
        });
  });

  var fetchData = function (url, options, onSuccess) {
    fetch(url, options)
        .then(function (response) {
          response.json();
        })
        .then(function (response) {
          onSuccess(response);
        });
  };

  var closeAccordions = function () {
    accordions.forEach(function (i) {
      i.classList.remove('faq__item--active');
    });
  };

  accordions.forEach(function (item) {
    item.classList.add('faq__item--js');
    item.addEventListener('click', function () {
      if (item.classList.contains('faq__item--active')) {
        item.classList.remove('faq__item--active');
        return;
      }
      closeAccordions();
      item.classList.add('faq__item--active');
    });
  });

  window.addEventListener('keydown', function (evt) {
    var item = evt.target;
    if (evt.keyCode === 13) {
      if (item.classList.contains('faq__item--active')) {
        item.classList.remove('faq__item--active');
        return;
      }
      closeAccordions();
      item.classList.add('faq__item--active');
    }
  });

  accordionsFilter.forEach(function (item) {
    item.classList.add('filter__form-item--js');
    item.addEventListener('click', function () {
      if (item.classList.contains('filter__form-item--active')) {
        item.classList.remove('filter__form-item--active');
        return;
      }
      item.classList.add('filter__form-item--active');
    });
  });

  window.addEventListener('keydown', function (evt) {
    var item = evt.target;
    if (evt.keyCode === 13) {
      if (item.classList.contains('filter__form-item--active')) {
        item.classList.remove('filter__form-item--active');
        return;
      }
      item.classList.add('filter__form-item--active');
    }
  });

  if (document.querySelector('.filter__form')) {
    // add all the elements inside modal which you want to make focusable
    var focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    var filterForm = document.querySelector('.filter__form'); // select the modal by it's id
    var firstFocusableElement = filterForm.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
    var focusableContent = filterForm.querySelectorAll(focusableElements);
    var lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal


    document.addEventListener('keydown', function (e) {
      var isTabPressed = e.key === 'Tab' || e.keyCode === 9;

      if (!isTabPressed) {
        return;
      }

      if (e.shiftKey) { // if shift key pressed for shift + tab combination
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus(); // add focus for the last focusable element
          e.preventDefault();
        }
      } else { // if tab key is pressed
        if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
          firstFocusableElement.focus(); // add focus for the first focusable element
          e.preventDefault();
        }
      }
    });

    firstFocusableElement.focus();
  }

  /* eslint-disable */
  if (document.querySelector('.new-products__swiper')) {
    var newProductsSwiper = document.querySelector('.new-products__swiper');
    var newProductsToggle = document.querySelector('.new-products__toggle');
    newProductsSwiper.classList.remove('new-products__swiper--nojs');
    newProductsToggle.classList.remove('new-products__toggle--nojs');


    if (document.querySelector('.swiper')) {

      var swiper = new Swiper('.swiper', {

        // Navigation arrows
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        },

        simulateTouch: false,

        pagination: {
          el: '.swiper-pagination',
          clickable: 'true',
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },

        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 30,
          },
        }
      });

      var swiperMobile = new Swiper('.swiper', {

        // Navigation arrows
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        },

        simulateTouch: false,

        pagination: {
          el: '.swiper-pagination-fraction',
          clickable: 'true',
          type: "fraction",
          renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>';
          },
        },


        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 30,
          },
        }
      });

      swiper.on('slideChange', function () {
        var currentNumber = document.querySelector('.swiper-pagination-fraction .swiper-pagination-current');
        var indexPage = swiper.realIndex / 2 + 1;
        currentNumber.innerHTML = indexPage;
      });
    }
  }
})();
