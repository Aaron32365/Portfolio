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
  32
);
///////////////////////////////////////////////////////////

//activates typwrite animation for about-section on view
///////////////////////////////////////////////////////////
document.onscroll = function(){
  if(isScrolledIntoView($("#marker1"), $window) && scrolled === false){ //create a second marker for typewrite animation
        printSentence('about-main', $("#about-main").html(), 32)
        scrolled = true
    }
}
///////////////////////////////////////////////////////////


// $(".fab").on("mouseover", ()=> {
//   let $elements = $(".fab")
//   for(let i = 0; i < $elements.length; i++) {
//     let $el = $elements[i]
//     console.log($el)
//     // if($el.is(":hover") ){
//       // if($(".fab:hover").length != 0){
//       //   console.log("red")
//       // }
//     // }
//   }
// })



$(document).ready(function(){
  let hovered = false
  let $elements = $(".fab")
  let div = $("#skillsTextContainer")

  $elements.mouseover(function() {
    div.text(`${$(this)[0].firstChild.innerHTML}`)
  })
  $elements.mouseout(function(){
    div.text("")
  })
})




//navbar control for mobile screens
//////////////////////////////////////////////////////////////
let resized = false
$window.resize(function(){
  if(window.innerWidth < 588 && resized === false) {
    resized = true
    console.log('test')
      let elements = document.getElementsByClassName("nav-link")
      for(let i = 0; i < elements.length; i++){
        switch(elements[i].id){
          case "home":
            elements[i].innerHTML = `<i class="col-4 fas fa-home"></i>`
            break
          case "about":
            elements[i].innerHTML = `<i class=" col-4 fas fa-portrait"></i>`
            break
          case "portfolio":
            elements[i].innerHTML = `<i class=" col-4 fas fa-archive"></i>`
            break
          case "contact":
          elements[i].innerHTML = `<i class=" col-4 fas fa-id-card"></i>`
            break
        }
      }
  }
  // else{

  // }
});
//////////////////////////////////////////////////////////////


//Displays additional "About" information on button click 
///////////////////////////////////////////////////////////
$(document).on("click", "#more-about", function(event){
  event.preventDefault()
  $("#more-about").attr("style", "display: none")
  $("#about-container").attr("style", "height: auto")
  printSentence("more-about-content", $("#more-about-content").html(), 32)
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

generatePortfolio()

function generatePortfolio(){
  var container = $("#portfolio-items")

  var itemList = [{
    title: "Weather Dashboard",
    imgUrl: "assets/imgs/weather-outlook.PNG",
    githubUrl: "https://github.com/Aaron32365/Weather-Dashboard",
    applicationUrl: "https://aaron32365.github.io/Weather-Dashboard/",
    description: "Plan ahead and check out the local weather for any city using API calls"
  },{
    title: "Weather Dashboard",
    imgUrl: "assets/imgs/weather-outlook.PNG",
    githubUrl: "https://github.com/Aaron32365/Weather-Dashboard",
    applicationUrl: "https://aaron32365.github.io/Weather-Dashboard/",
    description: "Plan ahead and check out the local weather for any city using API calls"

  },{
    title: "Weather Dashboard",
    imgUrl: "assets/imgs/weather-outlook.PNG",
    githubUrl: "https://github.com/Aaron32365/Weather-Dashboard",
    applicationUrl: "https://aaron32365.github.io/Weather-Dashboard/",
    description: "Plan ahead and check out the local weather for any city using API calls"
  },{
    
    title: "Weather Dashboard",
    imgUrl: "assets/imgs/weather-outlook.PNG",
    githubUrl: "https://github.com/Aaron32365/Weather-Dashboard",
    applicationUrl: "https://aaron32365.github.io/Weather-Dashboard/",
    description: "Plan ahead and check out the local weather for any city using API calls"
  }]

  for(let i = 0; i < itemList.length; i++){
    let div = $("<div>")
    let imgDiv = $("<div>")
    let descDiv = $("<div>")
    let buttons = $("<div class='col-sm-12 buttons'>")
    let githubButton = $(`<a target="_blank" href="${itemList[i].githubUrl}">`)
    let applicationButton = $(`<a target="_blank" href="${itemList[i].applicationUrl}">`)

    div.addClass("portfolio-item row")
    imgDiv.addClass("portfolio-imgs col-12 col-sm-9 col-md-7 col-lg-4")
    descDiv.addClass("portfolio-desc col-12 col-lg-7")
    githubButton.addClass("portfolio-button githubButton")
    applicationButton.addClass("portfolio-button appButton")
    
    githubButton.html(`Github`)
    applicationButton.html(`Application`)

    descDiv.html(`<div class='portfolio-desc-title'> ${itemList[i].title} </div> <br> ${itemList[i].description} <br>`)
    imgDiv.attr("style", `background-image: url(${itemList[i].imgUrl})`)
    div.append(imgDiv)
    buttons.append(githubButton)
    buttons.append(applicationButton)
    descDiv.append(buttons)
    div.append(descDiv)
    container.append(div)
  }
}