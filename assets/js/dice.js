document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".dice").forEach(element => element.onclick = () => {
    roll(element.dataset.faces)
  })
});

const roll = (faces = 6) => {
  if(faces === "fate"){

  }else if(Number.isInteger(faces)){

  }
}