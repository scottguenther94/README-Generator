// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    inquirer
        .prompt([
            {
                type:'input',
                message:'What is your project title?',
                name:'projectTitle',
            },
            {
                type:'input',
                message:'Please provide a brief description of the project.',
                name:'projectDescription',
            },
            {
                type:'input',
                message:'Please provide concise installation instructions.',
                name:'installationInstructions',
            },
            {
                type:'input',
                message:'Please provide usage insformation.',
                name:'usageInfo',
            },
            {
                type:'input',
                message:'Please provide contribution guidelines.',
                name:'contributionGuidelines',
            },
            {
                type:'input',
                message:'Please provide test instructions.',
                name:'testInstructions',
            },
            {
                type:'list',
                message:'Which license is your application covered under?',
                name:'license',
                choices: [('Apache', ''),'Boost', 'Eclipse', 'Unlicense']
            },
            {
                type:'input',
                message:'What is your GitHub username?',
                name:'gitHubUsername',
            },
            {
                type:'input',
                message:'What is your email address?',
                name:'email',
            },
        ])
        .then((response) => {
            console.log(response);
            fs.writeFile('README.md',`
# ${response.projectTitle}\n
## ${response.projectDescription}\n
## Table of Contents\n
- [Installation](#installation)\n
- [Usage](#usage)\n
- [Contributions](#contributions)\n
- [Testing](#testing)\n
- [License](#license)\n
- [Questions](#questions)\n

## Installation\n
${response.installationInstructions}\n
            
## Usage\n
${response.usageInfo}\n

## Contributions\n
${response.contributionGuidelines}\n
            
## Testing\n
${response.testInstructions}\n
            
## License\n
${response.license}\n

## Questions?\n
- Feel free to reach out to me via email at ${response.email} !\n
- For further examples of my work, visit my GitHub: github.com/${response.gitHubUsername}
`, (err) =>
             err ? console.error(err) : console.log('success'))
        }
        )];

// TODO: Create a function to write README file
function writeToFile() {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
