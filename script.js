const box = document.getElementById("box")
const main =document.getElementById("main");
const audio = document.getElementById("audio")
function continuep(){
  document.body.style.backgroundAttachment = "";
  document.body.style.backgroundColor = "black"
  box.style.display = "none"
  main.style.display = "block"
  audio.play();
}