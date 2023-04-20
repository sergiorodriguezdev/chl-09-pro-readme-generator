// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const mdGen = require ('./utils/generateMarkdown.js')

const licenses = [
    'MIT',
    'APACHE 2.0',
    'GPL 3.0',
    'BSD 3',
    'None'
];

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'githubUsername'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'emailAddress'
    },
    {
        type: 'input',
        message: 'What is your project\'s name?',
        name: 'projectName'
    },
    {
        type: 'input',
        message: 'Please write a short description of your project:',
        name: 'projectDescription'
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        choices: licenses,
        name: 'projectLicense',
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
        name: 'projectDependencies'
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        default: 'npm test',
        name: 'projectTests'
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'projectUsage'
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'projectContributing'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(response => {
            // console.log(response);
            console.log('Generating README...');
            return;
        });
}

// Function call to initialize app
init();
// const myObj = {title: 'Hello!'};
// console.log(mdGen(myObj));