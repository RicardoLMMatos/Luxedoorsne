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
 


