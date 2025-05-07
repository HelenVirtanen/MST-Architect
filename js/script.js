"use strict";

const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;

/* Fixed header while scrolling */
document.addEventListener("DOMContentLoaded", () => {
  const checkScroll = (offset) => {
    header.classList.toggle("fixed", offset >= headerHeight);
  };

  let scrollOffset = window.pageYOffset;
  checkScroll(scrollOffset);

  window.addEventListener("scroll", () => {
    scrollOffset = window.pageYOffset;
    checkScroll(scrollOffset);
  });
});