new Swiper(".swiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 100,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
});

new Swiper(".swiper-tech", {
  loop: true,
  autoPlay: true,
  slidesPerView: 1,
  centeredSlides: true,
  autoplay: {
   delay: 2500,
   disableOnInteraction: false,
 },
});
