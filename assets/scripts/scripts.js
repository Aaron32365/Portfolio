/*var i = 0;
var txt = 'Hello World.';
var speed = 150;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("hello-world").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
*/

//    variable = [getElementById(""), getElementById(""),  ]etc...   use the foeEach() function, place variable instead of "hello-world" in typeWriter function
/*
var txt = {
  hello: "Hello World."
};
divs = [document.getElementById("hello-world").innerHTML];
function type(){
  var i = 0;
  for (var key in txt) {
    if (txt.hasOwnProperty(key)) {
      if(i < txt[key].length){
        divs[0] += txt[key].charAt(i);
        i++ 
      }
      
    }
  }
}
*/

var nodes = document.querySelector('.intro-text').childNodes;
console.log(nodes);
for(var i = 1; i < nodes.length; i += 1){
  var txts = nodes[i];
  const content = txts.innerText;
  if(content != '' || content != undefined){
    console.log(content);
   // console.log(content.length);
  }
}
