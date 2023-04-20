// Packages needed for this application
const inquirer = require('inquirer'); // Inquirer package
const fs = require('fs'); // File system package
const markdown = require('./utils/generateMarkdown.js') // Markdown generator package in utils directory

// Constant global variables
const outputDir = './output';
const licenses = [
    'MIT',
    'APACHE 2.0',
    'GPL 3.0',
    'BSD 3',
    'None'
];

// Questions used by the Inquirer prompt
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
        type: 'list', // Define a list of options
        message: 'What kind of license should your project have?',
        choices: licenses, // Use licenses array as list options
        name: 'projectLicense',
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        default: 'npm i', // Provide a default option for end user
        name: 'projectDependencies'
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        default: 'npm test', // Provide a default option for end user
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

// This function takes a file name/path and a string of data that will be written to the file
function writeToFile(fileName, data) {
    // Write data to file
    fs.writeFile(fileName, data, (err) =>
    // If there's an error, log it to the console. Otherwise, inform user where they can locate the generated README
        err ? console.log(err) : console.log(`README file succesfully created! You can find it here: '${fileName}'`)
    )
}

// Initialize app
function init() {
    // Print intro message for end user
    console.log('Professional README Generator');
    console.log('=============================');
    console.log('Please answer the following questions about you and your project to automatically generate a professional README file for your project!');

    // Launch Inquirer prompts using the questions array
    inquirer.prompt(questions)
        .then(response => {
            
            console.log('Generating README...');
            
            // Create an output directory if it doesn't exist
            if (!fs.existsSync(outputDir)) {
                console.log(`Creating '${outputDir}' directory...`);
                fs.mkdirSync(outputDir);
            }

            const simplifiedProjectName = response.projectName.replaceAll(' ', '_'); // Simplify the name of the project by replacing all spaces in the name with underscores - this is used to create the name of the file
            const fileName = `${outputDir}/README-${simplifiedProjectName}.md`; // Generate the file path and name
            const data = markdown(response); // Call function from generateMarkdown module, pass the response object created by the Inquirer prompt. The result will be a string containing markdown code

            writeToFile(fileName, data); // Write the markdown code to the file

            return;
        });
}

// Function call to initialize app
init();