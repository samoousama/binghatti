window.addEventListener('load', function() {
  const firstBox = document.querySelector('.hero-payment-plan .hero-plan-block:nth-child(1)');
  firstBox.classList.add('active');
});

// -------------------------
// 5. Brighten active/hovered image
function updateActiveCenter() {
  const trackRect = track.getBoundingClientRect();
  const trackCenter = trackRect.left + trackRect.width / 2;

  let closestIndex = 0;
  let closestDistance = Infinity;

  items.forEach((item, index) => {
    const itemRect = item.getBoundingClientRect();
    const itemCenter = itemRect.left + itemRect.width / 2;
    const distance = Math.abs(trackCenter - itemCenter);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  items.forEach(item => {
    item.querySelector('img').style.filter = 'brightness(0.5)'; // dim all
    item.querySelector('img').style.transform = 'scale(0.95)';
  });

  // Brighten active center image
  const activeImg = items[closestIndex].querySelector('img');
  activeImg.style.filter = 'brightness(1)';
  activeImg.style.transform = 'scale(1.05)';
}



jQuery(document).ready(function($) {
  var header = $('header');
  var scrollPoint = 100;

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > scrollPoint) {
      header.addClass('header-scrolled');
    } else {
      header.removeClass('header-scrolled');
    }
  });
});



(function () {

  var slides = document.querySelectorAll("#gallery .gallery-slide");
  var thumbs = document.querySelectorAll("#gallery .gallery-thumb");
  var prev = document.querySelector("#gallery .gallery-prev");
  var next = document.querySelector("#gallery .gallery-next");

  if (!slides.length) return;

  var current = 0;

  function show(i) {

    if (i < 0) i = slides.length - 1;
    if (i >= slides.length) i = 0;

    for (var s = 0; s < slides.length; s++) {
      slides[s].classList.remove("active");
      thumbs[s].classList.remove("active");
    }

    slides[i].classList.add("active");
    thumbs[i].classList.add("active");

    current = i;
  }

  prev.onclick = function () {
    show(current - 1);
  };

  next.onclick = function () {
    show(current + 1);
  };

  for (let t = 0; t < thumbs.length; t++) {
    thumbs[t].onclick = function () {
      show(t);
    };
  }

})();