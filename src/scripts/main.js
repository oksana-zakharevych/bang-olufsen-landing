'use strict';

const menuHeader = document.querySelector('.header__menu');
const menuOpenButton = document.querySelector('.header__burger');
const menuCloseButton = document.querySelector('.menu__close');
const navLinkScrollable = document.querySelectorAll('.nav__link--scrollable');
const navLinkToBottom = document.querySelector('.nav__link--to-bottom');

menuOpenButton.addEventListener('click', () => {
  openMenu();
});

menuCloseButton.addEventListener('click', () => {
  closeMenu();
});

navLinkScrollable.forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

navLinkToBottom.addEventListener('click', () => {
  closeMenu();
  scrollToBottom();
});

function openMenu() {
  menuHeader.classList.add('header__menu--active');
}

function closeMenu() {
  menuHeader.classList.remove('header__menu--active');
}

function scrollToBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}
