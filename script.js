const handleClick = document.querySelector("#submit_form");

//function to handle submit event when clicking on enter
function errorHandler(error) {
  console.log("error occured", error.message);
  alert("api calls exceeds more then 5 in an hour", error);
}

function translate() {
  const inputvalue = document.querySelector("#userInput").value;
  const text = inputvalue.trim();
  var outputDiv = document.querySelector("#textArea");

  fetch(`https://api.funtranslations.com/translate/minion.json?text=${text}`)
    .then((response) => response.json())
    .then((json) => {
      var translatedMessage = json.contents.translated;
      console.log("did you saw translated msg", translatedMessage);
      outputDiv.innerText = translatedMessage;
    })
    .catch(errorHandler);
}
handleClick.addEventListener("click", translate);
