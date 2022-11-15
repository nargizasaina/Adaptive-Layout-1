function navToggle() {
    let navBtn = document.getElementById('navBtn');
    let mainNav = document.getElementById('mainNav');
    let heightNav = mainNav.firstElementChild.offsetHeight;
  
    navBtn.onclick = function () {
      if (mainNav.classList.contains('header__nav-hidden')) {
        mainNav.classList.remove('header__nav-hidden');
        mainNav.style.height = heightNav + 'px';
      } else {
        mainNav.classList.add('header__nav-hidden');
        mainNav.style.height = 0;
      }
    }
}
  
navToggle();