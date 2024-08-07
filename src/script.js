function displayAnswer(response) {
  new Typewriter("#answer", {
    strings: [response.data.answer],
    autoStart: true,
    delay: 15,
    cursor: "",
    pauseFor: 100000,
  });
}
function generateAnswer(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "bfb46b3ac41f3bd0tof60adf87306491";
  let context =
    "You are a short scary story writer expert, and you love writing very short scary stories.  Your mission is to generate thrilling, horrifying, terrifying short scary stories in 4 sentences. You give a begginning, middle and end. Make sure to follow user instructions.";
  let prompt = `User instructions: Generate a very short scary story about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let answerElement = document.querySelector("#answer");
  answerElement.classList.remove("hidden");
  answerElement.innerHTML = `<div class="generate">Generating a short scary story about ${instructionsInput.value}...</div>`;

  axios.get(apiUrl).then(displayAnswer);
}

let generatorFromElement = document.querySelector("#generator-form");
generatorFromElement.addEventListener("submit", generateAnswer);
