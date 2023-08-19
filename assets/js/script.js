// JavaScript For Sticky Header

window.addEventListener("scroll", function(){
  const header = document.querySelector(".navigation");
  header.classList.toggle("sticky", window.scrollY > 100)

})

// JavaScript For Mobile Menu

const bars_icon = document.getElementById("bars");
const cross_icon = document.getElementById("cross-icon");
const quote_icon = document.getElementById("quote-icon");
const mobile_nav = document.getElementById("mobile-nav");

bars_icon.addEventListener("click", () => {
  mobile_nav.classList.add("active");
});

cross_icon.addEventListener("click", () => {
  mobile_nav.classList.remove("active");
});

quote_icon.addEventListener("click", () => {
  mobile_nav.classList.remove("active");
});


// JavaScript For Sticky Mobile Header

window.addEventListener("scroll", function(){
  const header = document.getElementById("Mobile-menu");
  header.classList.toggle("sticky", window.scrollY > 100)

})

// Owl Carousel JavaScript for Hero Slider

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  items:1,
  navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>']
})