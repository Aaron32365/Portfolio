/*
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
    }
})
console.log($(".intro-sub"))

if(isScrolledIntoView($(".intro-sub"), $window)){
  setTimeout(function(){
    $(".intro-sub").addClass("animateTypeWrite")
  }, 4000)
}


*/

console.log($(".intro-sub").text())


///////// a new begenning ////////

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
  40
);
console.log($("#intro").text())
