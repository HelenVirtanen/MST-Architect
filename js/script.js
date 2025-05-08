"use strict";

const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;

document.addEventListener("DOMContentLoaded", () => {
  /* Fixed header while scrolling */
  const checkScroll = (offset) => {
    header.classList.toggle("fixed", offset > 0);
  };

  let scrollOffset = window.pageYOffset;
  checkScroll(scrollOffset);

  window.addEventListener("scroll", () => {
    scrollOffset = window.pageYOffset;
    checkScroll(scrollOffset);
  });

  /* Nav menu toggle */
  document.addEventListener("click", (event) => {
    const target = event.target.closest("#nav_toggle");
    if (!target) return;

    event.preventDefault();
    target.classList.toggle("active");
    const menu = document.getElementById("menu");
    if (menu) menu.classList.toggle("active");
  });

  /* Scroll lower than fixed header */
  document.querySelectorAll('a[href^="#"]').forEach((anchor, index) => {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      let additionalOffset = 0;

      if (index === 0) {
        additionalOffset = headerHeight;
      }

      window.scrollTo({
        top: targetElement.offsetTop - headerHeight + additionalOffset,
      });
    });
  });
});
