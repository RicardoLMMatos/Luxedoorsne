// Modal
var modal = document.getElementById('myModal');

var images = document.getElementsByClassName("image");
for(var i = 0; i < images.length; i++) {images[i].onclick = showCaption;}
var modalImg = document.getElementById("img");
function showCaption(){
modal.style.display = "block";
modalImg.src = this.src;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {modal.style.display = "none";}
modal.onclick = function() {modal.style.display = "none";}


// move on scroll//

    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-out',
      delay: 1,
      disable: 'mobile',
    });
 


// Read more and read less functionality
function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
} 

// Burger menu functionality

function burgerMenu() {
  var x = document.getElementById("mobileNav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const burgerButton = document.getElementById('burger-button');
const mobileNav = document.getElementById("mobileNav");

burgerButton.addEventListener('click', toggleMenu);
mobileMenu.addEventListener('click', toggleMenu); // Also close on touch inside the menu

function toggleMenu() {
  mobileMenu.classList.toggle('active');
  // Optionally, hide the burger button when the menu is open and show it when closed
  burgerButton.style.display = mobileMenu.classList.contains('active') ? 'none' : 'block';
}

// Close the menu if the user clicks outside of it
document.addEventListener('click', function(event) {
  if (!mobileMenu.contains(event.target) && !burgerButton.contains(event.target) && mobileMenu.classList.contains('active')) {
    toggleMenu();
  }
});