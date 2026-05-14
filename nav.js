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

  // -------- Auto-tag elements for reveal-on-scroll --------
  document.querySelectorAll('.section, .ctaband, .proofbar, .breadcrumb').forEach(function (el) {
    el.classList.add('reveal');
  });
  ['.cardgrid', '.steps', '.reviewgrid', '.faqlist', '.twocol', '.bringlist'].forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el) { el.classList.add('reveal-stagger'); });
  });
  document.querySelectorAll('.servrow').forEach(function (row) {
    var parent = row.parentElement;
    if (parent && !parent.classList.contains('reveal-stagger')) {
      parent.classList.add('reveal-stagger');
    }
  });

  // -------- Reveal on scroll --------
  var targets = document.querySelectorAll('.reveal, .reveal-stagger');
  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  targets.forEach(function (el) { io.observe(el); });
})();
