
var element = document.querySelector('.header-menu');
var initialOffset = element.offsetTop;

window.addEventListener('scroll', function() {
  var scrollPos = window.pageYOffset || document.documentElement.scrollTop;
  var headertitle = document.querySelectorAll('.scroll-header .header-title');

  if (scrollPos >= initialOffset ) {
    headertitle.forEach(function(link) {
      //link.style.display = 'none';
      element.classList.add('fixed-element');
    });
  } else {
    headertitle.forEach(function(link) {
      //link.style.display = 'inline-block';
      element.classList.remove('fixed-element');
    });
  }
});

