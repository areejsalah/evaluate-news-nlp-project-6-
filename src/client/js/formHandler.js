const { checkForUrl } = require("./urlChecker");

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let urlText = document.getElementById('input-url').value

    //Client.checkForName(urlText)

    Client.checkForUrl(urlText)
    console.log(urlText);

    let myUrl = 'http://lifestyle.publico.pt/artigos/369625_as-joias-de-leonor-silva-sao-cotonetes-ou-arame-farpado-em-nome-de-valores-sociais';

    fetch('/call', {

        method: 'POST',
        credentials: 'same-origin',
        //mode: 'cors',   a menina usou isso
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({myUrl}) //transform data into string to server side
    })


        .then(function(data) {
            console.log('objeto vindo do server:', data);

            try{
                const apiResponse = data;

                //update UI
                document.getElementById('results').innerHTML = res;

            }catch(error){
                console.log('erro na hr de atualizar a ui', error)
            }
        })
}

    //Callback function chaining promises
    //function to post in the server the url entered by the user 
    //let urlText = document.getElementById('name').value
    /*postData('/call', data={urlText})

        //Then use the data received from the server to update UI
        .then(function(data) {
            console.log('objeto vindo do server:', data);

            try{
                const apiResponse = data;

                //update UI
                document.getElementById('results').innerHTML = res;

            }catch(error){
                console.log('erro na hr de atualizar a ui', error)
            }
        })
}

//Post request - client side
const callAPI = async(url='', data={}) => {

    const response = await fetch(url, {

        method: 'POST',
        credentials: 'same-origin',
        //mode: 'cors',   a menina usou isso
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data) //transform data into string to server side
    })
}*/

export { handleSubmit }
