(function () {
  var toggle = document.querySelector('.navtoggle');
  var nav = document.querySelector('nav.mainnav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  document.querySelectorAll('.faq').forEach(function (faq) {
    faq.addEventListener('click', function () {
      faq.classList.toggle('open');
    });
  });
})();
