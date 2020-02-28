/*
let i = 0;
function typeWriter() {
  var txt = "This is a test"
  var speed = 150;
  if (i < txt.length) {
    document.getElementById("hello-world").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
*/

var $window = $(window);
var $elem = $(".typeWrite")

    function isScrolledIntoView($elem, $window) { //checking if element is in view
        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();
        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }


$(document).on("scroll", function () {
    if (isScrolledIntoView($elem, $window)) { //if the element is in view, typewrite animation
      $elem.addClass("animateTypeWrite")
      $elem.show()
    }
})

console.log($(".typeWrite").text())