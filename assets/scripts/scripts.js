
var $window = $(window);

    function isScrolledIntoView($elem, $window) { //checking if element is in view
        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();
        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

$(document).on("load", $("#intro-section"),(event) => {
  event.preventDefault()
  $("#intro").removeAttr("display: none")
})

let scrolled = false
$(document).on("scroll", $("#marker1"), function(event){
  event.preventDefault()
  if(isScrolledIntoView($("#marker1"), $window) && scrolled === false){
      printSentence('about', $("#about").html(), 38)
    scrolled = true
  }
})


$(document).on("click",$("#learnMore"),() => {
  $("#about-section").scrollIntoView()
})

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
} //printSentence

printSentence(
  'intro',
  $("#intro").html(),
  38
);
console.log($("#intro").text())

$(document).on('click', $("#more-about"), event =>{
  event.preventDefault()
  
})