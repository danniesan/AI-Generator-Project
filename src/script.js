function displayAnswer(response) {
  new Typewriter("#answer", {
    strings: [response.data.answer],
    autoStart: true,
    delay: 70,
    cursor: "",
  });
}
function generateAnswer(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "bfb46b3ac41f3bd0tof60adf87306491";
  let context =
    "You are an expert in creating fantasy, mythical and unique names, make sure to follow user instructions.";
  let prompt = `User instructions: Generate unique fantasy names by gender, Male or Female ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let answerElement = document.querySelector("#answer");
  answerElement.classList.remove("hidden");
  answerElement.innerHTML = `<div class="generate">Generating name about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayAnswer);
}

let generatorFromElement = document.querySelector("#generator-form");
generatorFromElement.addEventListener("submit", generateAnswer);
