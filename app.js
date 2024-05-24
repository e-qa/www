window.addEventListener("load", () => {
  new cursoreffects.trailingCursor();
});
let start = document.querySelector(".start");
let header = document.querySelector(".header");
document.addEventListener("click", type);
function type() {
  start.classList.add("hide");
  header.classList.remove("hide");
  const sampler = new Tone.Sampler({
    urls: {
      A0: "./keyboard.mp3",
      A1: "./keyboard.mp3",
    },
    onload: () => {
      sampler.triggerAttackRelease(["A0"], 10);
    },
  }).toDestination();

  let typed = new Typed("#msg", {
    strings: [
      `Hi, I'm Eli, a passionate Front-End Developer skilled in <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>TypeScript</b>, <b>React</b>, and <b>Next.js</b>. I create responsive, user-friendly web applications and constantly seek to improve my skills and learn new technologies. Connect with me on <a href="https://www.linkedin.com/in/eli-qarayev/">LinkedIn</a> `,
    ],

    typeSpeed: 25,
    showCursor: false,
  });

  document.removeEventListener("click", type);
}
