'use strict';
var accordions = document.querySelectorAll('.faq__item');
var accordionsFilter = document.querySelectorAll('.filter__form-item');

(function () {
  var closeAccordions = function () {
    accordions.forEach(function (i) {
      i.classList.remove('faq__item--active');
    });
  };

  accordions.forEach(function (item) {
    // var accordionTitle = document.querySelectorAl('h3');
    item.classList.add('faq__item--js');
    // accordionTitle.addEventListener('click', function () {
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
