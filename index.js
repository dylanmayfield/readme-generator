// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name', 
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description', 
        message: 'Describe your project.'
    },
    {
        type: 'input',
        name: 'installation', 
        message: 'What are the installation instructions of your project?'
    },
    {
        type: 'input',
        name: 'usage', 
        message: 'What is the usage information on your project?'
    },
    {
        type: 'input',
        name: 'contributing', 
        message: 'What are the Contribution Guidelines of your project?'
    },
    {
        type: 'input',
        name: 'test', 
        message: 'What are the test instructions for your project?'
    },
];

// inquirer
//     .prompt([
//         {
//             type: 'input',
//             name: 'name', 
//             message: 'What is the name of your project?'
//         },
//         {
//             type: 'input',
//             name: 'description', 
//             message: 'Describe your project.'
//         },
//         {
//             type: 'input',
//             name: 'installation', 
//             message: 'What are the installation instructions of your project?'
//         },
//         {
//             type: 'input',
//             name: 'usage', 
//             message: 'What is the usage information on your project?'
//         },
//         {
//             type: 'input',
//             name: 'contributing', 
//             message: 'What are the Contribution Guidelines of your project?'
//         },
//         {
//             type: 'input',
//             name: 'test', 
//             message: 'What are the test instructions for your project?'
//         },
//     ])

// // TODO: Create a function to write README file
function writeToFile(README, data) {
fs.writeFile('README.md', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!')
}
)};

// // TODO: Create a function to initialize app
function init() {

}

// // Function call to initialize app
// init();