//JS function for navbar/Phone
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


//jQuery for carousel
$(function() {
$("#newproducts").owlCarousel({
  startPosition:11,
  navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:2
        },
        768:{
            items:5
        }
    }
  });
  });


//Js for Tabs
function openPage(evt, kindName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(kindName).style.display = "block";
  evt.currentTarget.className += " active";
}
