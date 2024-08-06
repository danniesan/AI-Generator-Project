function generateAnswer(event) {
  event.preventDefault();

  new Typewriter("#answer", {
    strings: ["Generating answer..."],
    autoStart: true,
    delay: 70,
    cursor: "",
  });
}

let generatorFromElement = document.querySelector("#generator-form");
generatorFromElement.addEventListener("submit", generateAnswer);
