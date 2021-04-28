
/* SMOOTH SCROLL TO WORK */

$(document).on('click', '#scrolly', function(event){
  event.preventDefault();
  $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top - 20
  }, 1000);
});

/* ANIMATE ON SCROLL */

$(window).on("load",function() {
  $(window).scroll(function() {
    let windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {

      let objectBottom = $(this).offset().top - 170 + $(this).outerHeight();
      
      if (objectBottom < windowBottom) { 
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } 
      else { 
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); 
});

/* CAROUSEL */

var index = 0; 
var videos = ["one", "two", "three", "four"];

var slides = document.getElementsByClassName("slides"); 
var nextArrow = document.getElementById("next");

var previousArrow = document.getElementById("previous");

var place = document.getElementById("place");

var dotsContainer = document.getElementById("dotsContainer");

var dotArray = document.getElementsByClassName("dots"); 

createDots(); 
showSlides(index); 

function showSlides(x) {
	if (x > slides.length-1) {
		index = 0; 
	}
	if (x < 0) {
		index = slides.length-1; 
	}
	for (i=0; i < slides.length; i++) {
		slides[i].style.display = "none"; 
		dotArray[i].className = "dots";  
	}
	slides[index].style.display = "block";
	dotArray[index].className += " activeDot"; 
	place.innerHTML = videos[index]; 
}
nextArrow.onclick = function() {
	index += 1; 
	showSlides(index); 
} 
previousArrow.onclick = function() {
	index -= 1; 
	showSlides(index); 
} 
dotArray[0].onclick = showSlides(1); 

function createDots() {
	for (i=0; i<slides.length; i++) {
	var dot = document.createElement("span");
	dot.className = "dots"; 
	dotsContainer.appendChild(dot); 
	}
}