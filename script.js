const container = document.querySelector(".container");
const pointer = document.querySelector(".container__pointer-container");
const text = document.querySelector(".container__text");

let active = false;
let timeout1;
let timeout2;
let interval;

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

// Start Animation
function startAnimation() {

	text.innerText = "Breath in!";
	container.className = "container grow";
	pointer.classList = "container__pointer-container rotate";

	timeout1 = setTimeout(() => {

		text.innerText = "Hold...";

		timeout2 = setTimeout(() => {

			text.innerText = "Breath out!";
			container.className = "container shrink";

		}, holdTime);

	}, breathTime);
}

// Stop Animation
function stopAnimation() {
	text.innerHTML = "<span class='text--main'>Press start!</span>" +
		"<span class='text--sub'>(press again to stop)</span>";
	container.className = "container";
	pointer.classList = "container__pointer-container";
	clearTimeout(timeout1);
	clearTimeout(timeout2);
	clearInterval(interval);
}

// Click on circle event listener
container.addEventListener("click", e => {
	if (!active) {
		active = true;
		startAnimation();
		interval = setInterval(startAnimation, totalTime);
	} else {
		stopAnimation();
		active = false;
	}
})