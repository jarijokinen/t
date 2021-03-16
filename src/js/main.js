import '../css/main.scss';

// eslint-disable-next-line @wordpress/no-global-event-listener
document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const nav = document.querySelector('.header-nav');
  const navToggle = document.createElement('div');
  navToggle.classList.add('header-nav-toggle');

  navToggle.onclick = () => {
    nav.classList.toggle('header-nav-on');
    body.classList.toggle('noscroll');
  };

  document.querySelector('.header-nav').appendChild(navToggle);

  window.onscroll = () => {
    if (
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scroll > 50
    ) {
      body.classList.remove('at-top');
    } else {
      body.classList.add('at-top');
    }
  };
});
