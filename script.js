const handleClick = document.querySelector("#submit_form");
handleClick.addEventListener("click", translate);

//function to handle submit event when clicking on enter
async function translate() {
  console.log("it got called");
  event.preventDefault();
  const inputvalue = document.querySelector("#userInput").value;

  const text = inputvalue.trim();
  console.log(text);

  try {
    await fetch(
      `https://api.funtranslations.com/translate/minion.json?text=${text}`
    )
      //Promises chaining

      .then((response) => response.json())
      .then((json) => {
        var translatedMessage = json.contents.translate;
        console.log("did you saw translated msg", translatedMessage);
        document.querySelector("#textArea").innerText = translatedMessage;
      })
      .catch(console.error(err));
  } catch (err) {
    alert(
      "api calls exceeded more then 5 in a minute, please try after 1 hour"
    );
  }
}
