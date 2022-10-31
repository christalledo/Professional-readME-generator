// Imports necessary files

const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const fs = require('fs');


// prompt questions to ask the user
const questions = [{
    // Description
    type: 'input',
    message: 'What is your project Title',
    name: 'title',
},
{
    type: 'input',
    message: 'Write a short description of your project',
    name: 'description',
},
{
    // Table of Contents
    type: 'checkbox',
    message: 'What programming language/s did you use?',
    choices: ['HTML, CSS, Javascript'],
    name: 'language',
},
// Installation
{
    type: 'input',
    message: 'Enter your Github username',
    name: "gitHub",
},
{
    type: 'input',
    message: 'Enter the github  url of the repository in which the website will be showed',
    name: 'gitHub'

},

{
    type: 'input',
    message: 'Enter the live url in which the website will be showed',
    name: 'liveUrl'

},

{
    // Usage
    type: 'input',
    message: 'Enter the url of a video on how to use your site',
    name: 'video'
},
{
    // License
    type: 'input',
    message: 'Enter what color you want to use',
    name: 'color'
},
{
    type: 'input',
    message: 'What license do you have',
    name: 'license',
},
{
    // Contributing
    type: 'input',
    message: 'Write the contributors for this project',
    name: "contributor",

},
// Tests
{
    type: 'checkbox',
    message: 'What license do you have',
    choices: ['MIT', 'ISC', ''],
    name: 'license',
},
{
    type: 'input',
    message: 'What color do you want your license to have',
    name: 'color',

},
{
    // Questions

    type: 'checkbox',
    message: 'Choose which social media acc you want to share to get the questions',
    choices: ['Indeed', 'LinkedIN', 'Github'],
    name: "socialMedia",

},
{
    type: 'input',
    message: 'Enter the name of your social media account ',
    name: "account",
}

];

//  function to write README file
function writeToFile(response) {
    fs.writeFile('readME.md', generateMarkdown(response), (err) => err ? console.log(err, response) : console.log("Success"))
}

// function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            writeToFile(response)
        })
};


// Function call to initialize app
init();



