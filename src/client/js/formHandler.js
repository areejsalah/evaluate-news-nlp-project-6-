const { checkForUrl } = require("./urlChecker"); //require external function to be available to use in this file

//Chain Promise to validate user input, make a post request, transform data received from server into json and dynamically update UI 
function handleSubmit(event) {
    results.innerText ="";
    //First, prevent the submit button DOM element of doing his normal behavior of send info directly to server
    event.preventDefault()
    //So we can catch the URL entered by the user into the form field
    let urlText = document.getElementById('input-url').value

    //And check whether it has the correctly pattern or not by using if-else function passing another function to validate it
    //If the function which validate the url pattern returns "true"
    if (checkForUrl(urlText) == true){
        //display the url in the console
        console.log(urlText);

        //and send it to server side by making a call to a post route and passing the "request object" one of it's parameters
        fetch('http://localhost:8081/api', {

            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            //the url is being sent here, on the body at the same time that it's being transformed into string to server side
            body: JSON.stringify({urlText}) //transform data into string to server side
        })

        //then, once a response has been received from the server
        .then(res => {

            //display a message in the console
            console.log("::: Form Submitted :::");
            //and transform the data into json to be used in the client side
            console.log(res);
            return res.json()
        })

        //then, create a function passing that data as argument
        .then(function(data) {
        
            const results = document.getElementById('results');
            
            //Finally update UI using information extracted from the API data
            //use innerText to insert text into the element selected previously and write it using Template String
            //go through data properties using dot notation and sometimes brackets to access its arrays
            results.innerText = //`Text: ${data["sentence_list"][0].text} 
                `Subjectivity: ${subjectScore(data.subjectivity)}
                Irony: ${data.irony}
                Polarity: ${articlePolarity(data["score_tag"])}`;
                console.log(data);
        })
        
    
    //Else, let the user know that the url provided by them was not found, advising them to ensure they are using the correct url pattern
    }else{
        alert("Sorry, we couldn't find the requested page. Please, try to use a valid URL. E.g. http://... or https://...");
    } 
}

//* Helper functions to translate data coming from API *//
//Function to translate the Subjectivity property passing data coming from API as argument and if-else chaining
function subjectScore(text) {

    //store the data in a variable and re-assign its value according the following situations
    let textScore = text;

    //if the data received is equal 'objective'
    if(textScore === 'OBJECTIVE'){
        //assign a new value to the variable and return it
        return textScore = 'OBJECTIVE, factual';
    //else if, data received from API is equal 'subjective'
    } else if(textScore === 'SUBJECTIVE'){
        //assign a new value to the variable and return it
        return textScore = 'SUBJECTIVE';
    //else, define a default return
    } else{
        return 'No subjectivity';
    }
}

//Function to translate the Polarity property passing data coming from API as argument and if-else chaining
function articlePolarity(text) {

    //store the data in a variable and re-assign its value according the following situations
   let textPolarity = text;

    //if the data received is equal 'p+'
    if(textPolarity == 'P+'){
        //assign a new value to the variable and return it
         return textPolarity = 'STRONG POSITIVE';

    //else if the data received is equal 'p'
    } else if(textPolarity == 'P'){
        //assign a new value to the variable and return it
        return textPolarity = 'POSITIVE';
    //else if the data received is equal 'neu'
    } else if(textPolarity == 'NEU'){
        //assign a new value to the variable and return it
        return textPolarity = 'NEUTRAL';
    //else if the data received is equal 'n'
    } else if(textPolarity == 'N'){
        //assign a new value to the variable and return it
        return textPolarity = 'NEGATIVE';
    //else if the data received is equal 'n+'
    }  else if(textPolarity == 'N+'){
        //assign a new value to the variable and return it
        return textPolarity = 'STRONG NEGATIVE';
    //else if the data received is equal 'none'
    }  else if(textPolarity == 'NONE'){
        //assign a new value to the variable and return it
        return textPolarity = 'NO SENTIMENT';
    //else, define a default return
    }  else{
        return 'NO POLARITY';
    } 
}

//exports the functions to index.js which is our main file
export { handleSubmit }
export { subjectScore }
export { articlePolarity }