const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// Sayfa kaydırıldığında butonun görünür olmasını sağlamak
window.onscroll = function() {
    var button = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };
  // Sayfanın en üstüne kaydırma işlemi
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Aşağı kaydırılıyor: navbar gizlenir
    navbar.classList.remove('show');
  } else {
    // Yukarı kaydırılıyor: navbar görünür
    navbar.classList.add('show');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Negatif değer kontrolü
});