document.addEventListener("DOMContentLoaded", function() {
	document.querySelectorAll(".dice").forEach(element => element.onclick = () => {
		roll(element.dataset.faces)
	})
});

const rand = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const roll = (faces = 6) => {
	const int_faces = parseInt(faces, 10);
	if (isNaN(int_faces)) {
		return;
	}

	roll_classic(int_faces)
}

const roll_classic = (faces) => {
	value = rand(1, faces);
	document.querySelector("#value").innerHTML = value
}
