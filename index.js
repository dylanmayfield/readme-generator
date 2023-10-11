// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// const questions = [];


// // TODO: Create a function to write README file
function writeToFile(fileType, data) {
    fs.writeFile(fileType, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!')
    }
    )
};

// // TODO: Create a function to initialize app
function init() {
    // inquirer.prompt(questions).then((answers) => {
    //     console.log(answers)
    //     writeToFile('README.md', generateMarkdown(answers))
    // })

    inquirer
        .prompt([
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
                name: 'table',
                message: 'What is the table of contents of your project?'
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
            {
                type: 'input',
                name: 'questions',
                message: 'What are the questions for your project?'
            },
            {
                type: 'list',
                name: 'license',
                message: 'What license would you like to use?',
                choices: ['MIT', 'Apache', 'GPL', 'None']
            }
        ]).then((answers) => {
            console.log(answers)
            writeToFile('README.md', generateMarkdown(answers))
        })

};
// // Function call to initialize app
init();