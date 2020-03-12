const $window = $(window);
const nav = $(".nav-link")
let scrolled = false

printSentence(
  'intro',
  $("#intro").html(),
  38
);

$(document).on("load", "#intro-section",(event) => {
  event.preventDefault()
  $("#intro").removeAttr("display: none")
})

$(document).on("scroll", "#marker1", function(event){
  event.preventDefault()
  if(isScrolledIntoView($("#marker1"), $window) && scrolled === false){
      printSentence('about-main', $("#about-main").html(), 38)
      scrolled = true
  }
})

$(document).on("click", "#learnMore",function(event){
  event.preventDefault()
  let el = document.getElementById("about-section");
  el.scrollIntoView()
})

$(".nav-link").on("click", function(event){
  event.preventDefault()
  let el = document.getElementById(`${$(this)[0].id}-section`)
  console.log(el)
  el.scrollIntoView()
})

function isScrolledIntoView($elem, $window) { //checking if an element is in view
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();
    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

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
