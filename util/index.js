// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");
const generateMarkdown = require("./generateMarkdown");


// TODO: Create an array of questions for user input
function init() {
    inquirer.prompt ([
        {
            type: "input",
            message: "What is your project title?",
            name: "Title"
        },
        {
            type: "input",
            message: "Describe your project",
            name: "Description"
        },
        {
            type: "input",
            message: "What are the steps required to install your project?",
            name: "Installation"
        },
        {
            type: "input",
            message: "Please provide instructions for use",
            name: "Instructions"
        },
        {
            type: "input",
            message: "Are there any contributors?",
            name: "Contributors"
        },
        {
            type: "input",
            message: "How do you test your project?",
            name: "Test"
        },
        {
            type: "list",
            message: "Please select a title",
            name: "License",
            choices: [
                "MIT",
                "GVL-GPL 3.0",
                "APACHE 2.0",
                "BSD 3",
                "MPL 2.0",
                "None"
            ]
        },
        {
            type: "input",
            message: "Contact info for further questions",
            name: "Questions"
        },
    ])
        .then(answers => {
            const markdown=generateMarkdown(answers)
            writeToFile(markdown)
        });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, err => {
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generateMarkdown(data));
            console.log(data)
        })
}

// Function call to initialize app
init();