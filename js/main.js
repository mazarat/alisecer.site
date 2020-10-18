window.addEventListener("scroll", () => {
  const menuScroll = document.querySelector(".headbang");

  let winPosition = window.scrollY > 80;
  menuScroll.classList.toggle("headactive", winPosition);
});
