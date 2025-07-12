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

