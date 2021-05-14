function checkForUrl(inputText) {
    const userInput = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    return userInput.test(inputText)
}

export { checkForUrl }