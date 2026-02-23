(function () {
  'use strict';

  var menuToggle = document.querySelector('.menu-toggle');
  var navMobile = document.querySelector('.nav-mobile');

  if (menuToggle && navMobile) {
    menuToggle.addEventListener('click', function () {
      var open = navMobile.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    navMobile.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMobile.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  var consultForm = document.getElementById('consult-form');
  if (consultForm) {
    consultForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var phone = consultForm.querySelector('input[name="phone"]');
      if (phone && phone.value.trim()) {
        alert('Спасибо! Мы перезвоним по номеру ' + phone.value.trim() + ' в ближайшее время.');
        phone.value = '';
      }
    });
  }

  var requestForm = document.getElementById('request-form');
  if (requestForm) {
    requestForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = requestForm.querySelector('input[name="req_name"]');
      var phone = requestForm.querySelector('input[name="req_phone"]');
      if (name && name.value.trim() && phone && phone.value.trim()) {
        alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время для расчёта стоимости и сроков.');
        requestForm.reset();
      } else {
        alert('Пожалуйста, заполните контактное лицо и телефон.');
      }
    });
  }

  // Плавное появление блоков при прокрутке
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Фолбэк: без Observer просто показываем все блоки
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
