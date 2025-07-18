function toggleDarkMode(){
  document.documentElement.classList.toggle('dark');
}

function toggleHamburger() {
    const btn = document.getElementById('hamburger');
    const sideBar = document.getElementById('sidebar');

    btn.classList.toggle('open');
    sideBar.classList.toggle('translate-x-full');
    sideBar.classList.toggle('translate-x-0');
  }

  // Tutup sidebar saat klik di luar
  document.addEventListener('click', function (event) {
    const btn = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');

    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnHamburger = btn.contains(event.target);
    const isSidebarOpen = sidebar.classList.contains('translate-x-0');

    if (!isClickInsideSidebar && !isClickOnHamburger && isSidebarOpen) {
      toggleHamburger();
    }
  });

function initTypingEffect(selector) {
    new Typed(selector, {
        strings: ["Komputer", "Laptop"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });
  }

  window.onload = function(){
    initTypingEffect('#typed-output')
  }



  function initAllCarousels() {
    const carousels = document.querySelectorAll('.carousel');
  
    carousels.forEach((carousel) => {
      const container = carousel.closest('.overflow-hidden');
      const indicators = container.querySelectorAll('.indicators span');
      const prevBtn = container.querySelector('.button-prev');
      const nextBtn = container.querySelector('.button-next');
  
      let currentIndex = 0;
  
      function goToSlide(index) {
        currentIndex = index;
        carousel.style.transform = `translateX(-${index * 100}%)`;
  
        indicators.forEach((dot, i) => {
          dot.classList.toggle('bg-green-400', i === index);
          dot.classList.toggle('bg-white', i !== index);
        });
      }
  
      // Klik indikator
      indicators.forEach(dot => {
        dot.addEventListener('click', () => {
          goToSlide(parseInt(dot.dataset.index));
        });
      });
  
      // Klik tombol
      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          if (currentIndex > 0) goToSlide(currentIndex - 1);
        });
      }
  
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          if (currentIndex < indicators.length - 1) goToSlide(currentIndex + 1);
        });
      }
  
      // Swipe
      let startX = 0;
      carousel.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
      });
  
      carousel.addEventListener('touchend', e => {
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
  
        if (diff > 50 && currentIndex < indicators.length - 1) {
          goToSlide(currentIndex + 1);
        } else if (diff < -50 && currentIndex > 0) {
          goToSlide(currentIndex - 1);
        }
      });
  
      goToSlide(0); // inisialisasi awal
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    initAllCarousels();
  });
  
