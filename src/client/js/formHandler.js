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
  
  //Function to translate subjectivity score
  function subjectScore(text) {
  let textScore;
  switch (text) {
        case "OBJECTIVE":
        textScore = "OBJECTIVE - the text has factual marks.";
            break;
        case "SUBJECTIVE":
        textScore = "SUBJECTIVE - the text has subjective marks.";
            break;
        default:
        textScore = "No subjectivity provided";
  } // end: switch
    return textScore;
  }; 
  // end: function subjectScore

  //Function to translate Polarity
  function articlePolarity(text) {
    let textPolarity;
    switch (text) {

        case "P+":
            textPolarity = "strong positive";
            break;
        case "P":
            textPolarity = "positive";
            break;
        
        case "NEU":
            textPolarity = "neutral";
            break;

        case "N":
            textPolarity = "negative";
            break;
        
        case "N+":
            textPolarity = "strong negative";
            break;

        case "NONE":
            textPolarity = "without polarity";
            break;
        
        default:
            textPolarity = "No polarity provided";
    } // end: switch
      return textPolarity;
    }; 
    // end: function Polarity

export { handleSubmit }