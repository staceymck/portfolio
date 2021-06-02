const navOptions = document.getElementById('js-nav'),
      navBar = document.querySelector('header'),
      hamburger = document.getElementById('js-hamburger');

const applyTheme = (target) => {
  const color = target.id.split("-")[1];
  document.body.className=`theme--${color}`;
}

const hamburgerClick = (e) => {
  return (e.target.parentNode === hamburger || e.target === hamburger) ? true : false
}

hamburger.addEventListener('keyup', (e) => {
  if (e.key === 13) {
    navOptions.classList.toggle('active');
    document.getElementById("js-nav-first").focus();
  }
})

window.addEventListener('click', (e) => {
  if (e.target.classList.contains("js-nav-link") || !navBar.contains(e.target)) {
    navOptions.classList.remove('active');
  } else if (hamburgerClick(e)) {
    navOptions.classList.toggle('active');
  } else if (e.target.classList.contains("js-theme-btn")) {
    applyTheme(e.target);
  }
})