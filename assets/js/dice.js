document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".dice").forEach(element => element.onclick = () => {
    roll(element.dataset.faces)
  })
});

const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const roll = (faces = 6) => {

  if (faces === "fate") {
    roll_fate()
  }

  const int_faces = parseInt(faces, 10);
  if (isNaN(int_faces)) { return; }

  roll_classic(int_faces)
}

const roll_classic = (faces) => {
  value = rand(1, faces);
  document.querySelector("#fate-dice").innerHTML = ""
  document.querySelector("#value").innerHTML = value
}

const roll_fate = () => {
  values = new Array(4).fill(0).map((_) => rand(-1, 1))
  value = values.reduce((acc, numb) => acc + numb, 0)
  document.querySelector("#value").innerHTML = value
  document.querySelector("#fate-dice").innerHTML = values.map((val => {
    if (val < 0) {
      return '<i class="fa fa-minus-square-o fate-dice" aria-hidden="true"></i>'
    } else if (val > 0) {
      return '<i class="fa fa-plus-square-o fate-dice" aria-hidden="true"></i>'
    }
    return '<i class="fa fa-square-o fate-dice" aria-hidden="true"></i>'
  }))
}