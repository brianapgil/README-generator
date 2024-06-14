// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
      },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
      },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
      },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.If you followed tutorials, include links to those here as well.',
      },
    {
        type: 'list',
        name: 'license',
        message: 'The last section of a high-quality README file is the license. Let other developers know what they can and cannot do with your project. Choose from the following:',
        choices: ['Apache', 'MIT', 'BSD', 'none'],
      },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!'))
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    const readMeContent = generateMarkdown(responses);
    writeToFile('README.md', readMeContent);
  })
}

// Function call to initialize app
init();
