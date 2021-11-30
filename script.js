const handleClick = document.querySelector("#submit_form");
handleClick.addEventListener("click",translate);

//function to handle submit event when clicking on enter
async function translate() {
    console.log("it got called");
    event.preventDefault();
    const inputvalue = document.querySelector('#userInput').value;

    const text = inputvalue.trim();
    console.log(text);

    try {
         await fetch(`https://api.funtranslations.com/translate/minion.json?text=${text}`)
            //Promises chaining
         
            .then(response => response.json())
            .then(data => console.log(data.contents))          
            .catch(err => console.error(err))

    } catch (err) {
        console.log('error occured during excuting api call')
    }
}
document.querySelector('#textArea').innerHTML








// const form = document.querySelector('#submit_form');
// form.addEventListener('submit', translate);


// var text = document.querySelector("#userInput").value;

// const url = `https://api.funtranslations.com/translate/minion.json${text}`;

// function translate() {
//   fetch(`https://api.funtranslations.com/translate/minion.json${text}`).then(
//     console.log()
//   );
// }


// //function to display values
// function displayWeather(temp){
//     document.getElementById('result-id').innerHTML = temp;
// }
