document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".dice").forEach(element => element.onclick = () => {
    roll(element.dataset.faces)
  })
});

const roll = (faces = 6) => {
  if(faces === "fate"){
    roll_fate()
  }else if(Number.isInteger(faces)){
    roll_classic(faces)
  }
}

const roll_classic = (faces) => {

}

const roll_fate = () => {
  
}