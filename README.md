# Evaluate-News-NLP Web App

This is a project to [Udacity](https://www.udacity.com/us)'s Front End Web Developer nanodegree.

## Overview

This is a single page web app, which has an input field that accepts a URL as parameter.  
It works checking if the value entered is a valid URL, if so, it gets data from an API and updates the UI with relevant information about the article of the URL provided, such as subjectivity, polarity and whether or not there are signs of irony in the text.   
If the value entered is not a valid URL, it displays an alert message telling the user to use a valid URL pattern.

## Project Intro

* Building a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. (NLP is the ability of an application to understand the human language, written or oral)

* The goal of this project is to get practice with:
  - Setting up Webpack
  - Sass styles
  - Webpack Loaders and Plugins
  - Creating layouts and page design
  - Service workers
  - Using APIs and creating requests to external urls

* Language and tools for this project:
  - Node & Express: For server side development
  - js: For client side development
  - Webpack: Build tool
  - Service workers: Offline functionality

* Project rubric: 

Check out the specifications [here](https://review.udacity.com/#!/rubrics/2668/view).

## Getting Started

Follow the steps below to get the project running.

Clone this Github repository and use [NPM](https://www.w3schools.com/whatis/whatis_npm.asp) to install all the dependencies listed in the _package.json_ file:

```
$ git clone https://github.com/Janaina-MJ/evaluate-news-nlp.git
$ cd evaluate-news-nlp
$ npm install
```

Then, start the local server:

```
$ npm run build-prod
$ npm run start
```

The app will be running in your browser on localhost:8081

### Runnning the development mode

After completing the steps above, open a second terminal and start the webpack dev server:

`$ npm run build-dev`

The development version of the app will be running in your browser on localhost:8080  
(the page will automatically update in the browser after any code change)


### Testing

This project has a Testing Unit to check if the main functions are working correctly.
Testing is done with [Jest](https://jestjs.io/). 

To run tests you can use the following NPM command:

`$ npm run test`

The test results will be displayed on the terminal.
