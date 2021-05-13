function checkForUrl(inputText) {
    const userInput = /^http?:\/\//gi
    return userInput.test(inputText)
  }

  export { checkForUrl }