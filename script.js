const slider = document.getElementById("slider");
const value = document.getElementById("value");
const fire = document.getElementById("fire");
const waves = document.getElementById("waves");
const button = document.getElementById("soundBtn");

let soundOn = false;

// Button click
button.addEventListener("click", () => {
  soundOn = !soundOn;

  if (soundOn) {
    waves.classList.add("active");
    button.innerText = "Stop Sound";
  } else {
    waves.classList.remove("active");
    button.innerText = "Start Sound";
  }
});

// 🔥 IMPORTANT FIX HERE
slider.addEventListener("input", () => {
  let freq = slider.value;
  value.innerText = freq;

  if (!soundOn) return;

  // fire reduce gradually
  let scale = 1 - (freq / 100);
  let opacity = 1 - (freq / 100);

  fire.style.transform = `scale(${scale})`;
  fire.style.opacity = opacity;
});