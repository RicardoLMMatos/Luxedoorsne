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

// function burgerMenu() {
//   var x = document.getElementById("mobileNav");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }
function burgerMenu() {
  var nav = document.getElementById("mobileNav");
  
  // Toggle menu visibility
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";

    // Add click listener only when menu is open
    nav.addEventListener("click", function handleNavClick(e) {
      // Close menu if:
      // - The click is on an <a> link
      // - Or anywhere in the nav container
      if (e.target.tagName === "A" || e.target === nav) {
        nav.style.display = "none";
        nav.removeEventListener("click", handleNavClick); // Remove listener to prevent duplicates
      }
    });
  }
}
