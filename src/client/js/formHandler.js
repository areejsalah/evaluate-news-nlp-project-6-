const { checkForUrl } = require("./urlChecker");

function handleSubmit(event) {
    event.preventDefault()

    let urlText = document.getElementById('input-url').value

    // check what text was put into the form field
    if (checkForUrl(urlText) == true){
        console.log(urlText);

        fetch('/call', {

            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({urlText}) //transform data into string to server side
        })

        .then(res => {
            console.log("::: Form Submitted :::");
            return res.json()
        })
        .then(function(data) {
        
            document.getElementById('results').innerHTML = data.subjectivity
            
            //Updating UI using API data
            results.innerText = `Text: ${data["sentence_list"][0].text} 
                Subjectivity: ${subjectScore(data.subjectivity)}
                Irony: ${data.irony}
                Polarity: ${articlePolarity(data["score_tag"])}`;
        })

    }else{
        alert("Sorry, we couldn't find the requested page. Please, try to use a valid URL. E.g. http://... or https://...");
    } 
}
  
//Function to translate subjectivity data coming from API
function subjectScore(text) {
    let textScore = text;

    if(textScore === 'OBJECTIVE'){
        return textScore = 'OBJECTIVE, factual';
    } else if(textScore === 'SUBJECTIVE'){
        return textScore = 'SUBJECTIVE, lalalalalal';
    } else{
        return 'No subjectivity';
    }
}

//Function to translate Polarity
function articlePolarity(text) {
    let textPolarity = text;

    if(textPolarity == 'P+'){
         return textPolarity = 'strong positive';
    } else if(textPolarity == 'P'){
        return textPolarity = 'positive';
    } else if(textPolarity == 'NEU'){
        return textPolarity = 'neutral';
    } else if(textPolarity == 'N'){
        return textPolarity = 'negative';
    }  else if(textPolarity == 'N+'){
        return textPolarity = 'strong negative';
    }  else if(textPolarity == 'NONE'){
        return textPolarity = 'without polarity';
    }  else{
        return 'No Polarity';
    }
}

export { handleSubmit }