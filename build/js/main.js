'use strict';
var body = document.querySelector('body');
var accordions = document.querySelectorAll('.faq__item');
var accordionsFilter = document.querySelectorAll('.filter__form-item');
var linkLogin = document.querySelector('.main-nav__link-login');
var modalForm = document.querySelector('.modal-form');
var inputEmailLogin = modalForm.querySelector('#email-login');
var inputPasswordLogin = modalForm.querySelector('#password');
var isStorageSupport = true;
var buttonClose = modalForm.querySelector('.modal-form__button-close');

(function () {
  linkLogin.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalForm.classList.remove('modal-form--hidden');
    modalForm.classList.add('modal-form--show');
    body.classList.add('lock');
    inputEmailLogin.focus();
  });
})();

(function () {
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
})();

(function () {
  modalForm.addEventListener('click', function (evt) {
    if (evt.target === modalForm) {
      modalForm.classList.add('modal-form--hidden');
      modalForm.classList.remove('modal-form--show');
      body.classList.remove('lock');
    }
  });
})();

(function () {
  buttonClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalForm.classList.remove('modal-form--show');
    modalForm.classList.add('modal-form--hidden');
    body.classList.remove('lock');
  });
})();

(function () {
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
})();

(function () {
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
})();

(function () {
  var closeAccordions = function () {
    accordions.forEach(function (i) {
      i.classList.remove('faq__item--active');
    });
  };

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
})();

(function () {
  var closeAccordions = function () {
    accordionsFilter.forEach(function (i) {
      i.classList.remove('filter__form-item--active');
    });
  };

  accordionsFilter.forEach(function (item) {
    item.classList.add('filter__form-item--js');
    item.addEventListener('click', function () {
      if (item.classList.contains('filter__form-item--active')) {
        item.classList.remove('filter__form-item--active');
        return;
      }
      closeAccordions();
      item.classList.add('filter__form-item--active');
    });
  });
})();

(function () {
  var closeAccordions = function () {
    accordionsFilter.forEach(function (i) {
      i.classList.remove('filter__form-item--active');
    });
  };

  window.addEventListener('keydown', function (evt) {
    var item = evt.target;
    if (evt.keyCode === 13) {
      if (item.classList.contains('filter__form-item--active')) {
        item.classList.remove('filter__form-item--active');
        return;
      }
      closeAccordions();
      item.classList.add('filter__form-item--active');
    }
  });
})();

/* eslint-disable */
(function () {
  // import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'
  var swiper = new Swiper('.swiper', {

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
      // type: 'fraction',
      // renderFraction: function (currentClass, totalClass) {
      //   return '<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>';
      // },
      breakpoints: {
        320: {
          type: 'fraction',
          renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>';
          },
        },

        1024: {
          type: 'bullets',
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        }
      }
    },

    autoHeight: 'true',

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
})();
