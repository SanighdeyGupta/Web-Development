var i = 0;
while((i>=0) && (i<document.querySelectorAll(".drum").length)){
document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
i++;
}
document.addEventListener("keydown", function(event){
   buttonPress(event.key);
   buttonAnimation(event.key);
 });
function handleClick() {
  var buttonInnerHTML = this.innerHTML;
  buttonPress(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}
function buttonPress(key) {
  switch (key) {
    case "w":
    var audio = new Audio("sounds/Tom-1.mp3");
    audio.play();
      break;
    case "a":
    var audio = new Audio("sounds/Tom-2.mp3");
    audio.play();
      break;
    case "s":
    var audio = new Audio("sounds/Tom-3.mp3");
    audio.play();
      break;
    case "d":
    var audio = new Audio("sounds/Tom-4.mp3");
    audio.play();
      break;
    case "j":
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
      break;
    case "k":
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
      break;
    case "l":
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
      break;
    default:

  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
