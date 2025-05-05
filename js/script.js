"use strict";

const header = document.querySelector(".header");
const headerH = header ? header.offsetHeight : 0;

console.log(header.offsetHeight);

/* Fixed header while scrolling */
document.addEventListener("DOMContentLoaded", () => {
  const checkScroll = (scrollOffset) => {
    if (scrollOffset >= headerH) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  };

  let scrollOffset = window.pageYOffset;
  checkScroll(scrollOffset);

  window.addEventListener("scroll", () => {
    scrollOffset = window.pageYOffset;
    checkScroll(scrollOffset);
  });
});
