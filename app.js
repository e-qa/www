window.addEventListener("load", () => {
  new cursoreffects.trailingCursor();
});
document.addEventListener("click", type);

let start = document.querySelector(".start");

function type() {
  start.classList.add("hide");

  const sampler = new Tone.Sampler({
    urls: {
      A0: "./keyboard.mp3",
    },
    onload: () => {
      sampler.triggerAttackRelease(["A0"], 12);
    },
  }).toDestination();

  let typed = new Typed("#msg", {
    strings: [
      `Hi there! I'm Eli, a frontend developer passionate about crafting user-friendly interfaces and building beautiful web apps. I love making music with Tone.js. Check out my projects on <a href="https://github.com/rhy6x">GitHub</a>. Connect with me on <a href="https://www.linkedin.com/in/eli-qarayev/">LinkedIn</a> for more!`,
    ],
    typeSpeed: 32,
    showCursor: false,
  });

  document.removeEventListener("click", type);
}
