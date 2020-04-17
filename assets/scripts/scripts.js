//global variable declarations
///////////////////////////////////////////////////////////
const $window = $(window);
const nav = $(".nav-link")
let scrolled = false
///////////////////////////////////////////////////////////


//when page loads, begin typewrite animation for intro-section
///////////////////////////////////////////////////////////
printSentence(
  'intro',
  $("#intro").html(),
  38
);
///////////////////////////////////////////////////////////

//activates typwrite animation for about-section on view
///////////////////////////////////////////////////////////
document.onscroll = function(){
  if(isScrolledIntoView($("#marker1"), $window) && scrolled === false){
        printSentence('about-main', $("#about-main").html(), 38)
        scrolled = true
    }
}
///////////////////////////////////////////////////////////


//Displays additional "About" information on button click 
///////////////////////////////////////////////////////////
$(document).on("click", "#more-about", function(event){
  event.preventDefault()
  $("#more-about").attr("style", "display: none")
  $("#about-container").attr("style", "height: auto")
  printSentence("more-about-content", $("#more-about-content").html(), 40)
  $("#more-about-content").attr("style", "display: inline")
})
///////////////////////////////////////////////////////////



// controls Intro "Learn More" button functionality
///////////////////////////////////////////////////////////
$(document).on("click", "#learnMore", function(event){
  event.preventDefault()
  let el = document.getElementById("about-section");
  el.scrollIntoView()
})
///////////////////////////////////////////////////////////


//controls navbar links functionality
///////////////////////////////////////////////////////////
$(".nav-link").on("click", function(event){
  event.preventDefault()
  let el = document.getElementById(`${$(this)[0].id}-section`)
  el.scrollIntoView()
})
///////////////////////////////////////////////////////////


//function for checking if an element is within device view
///////////////////////////////////////////////////////////
function isScrolledIntoView($elem, $window) {
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();
    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}


//typewriting animation function
///////////////////////////////////////////////////////////
function printSentence(id, sentence, speed) {
  var index = 0,
      timer = setInterval(function() {
    var char = sentence.charAt(index);
    if(char === '<') {
      index = sentence.indexOf('>' , index)
    }
    document.getElementById(id).innerHTML = sentence.substr(0, index);
    if(++index === sentence.length){
      clearInterval(timer);
    }
  }, speed);
} 
///////////////////////////////////////////////////////////
