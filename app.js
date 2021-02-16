const inquirer = require('inquirer');
const generateReadME = require('./src/page-template');
const writeFile = require('./utils/generate-readme');

console.log(`
=================
ReadME Generator
=================
`);
const promptUser = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter your full name (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your full name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'year',
            message: 'Enter the current year, this is for the license section(Required)',
            validate: yearInput => {
                if (yearInput) {
                    return true;
                } else {
                    console.log('Please enter the current year!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('You need to enter a project GitHub link!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address if you would like to include it in your readme.',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Select a license from the list below:',
            choices: [
                'None',
                'Apache License 2.0',
                'GNU General Public License v3.0',
                'MIT License',
                "BSD 2-Clause 'Simplified' License",
                "BSD 3-Clause 'New' or 'Revised' License",
                'Boost Software License 1.0',
                'Creative Commons Zero v1.0 Universal',
                'Eclipse Public License 2.0',
                'GNU Affero General Public License v3.0',
                'GNU General Public License v2.0',
                'GNU Lesser General Public License v2.1',
                'Mozilla Public License 2.0',
                'The Unlicense',
            ],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('You need to enter license option.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('You need to enter a project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You need to enter a project description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide a description of how to install the project (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('You need to enter installation instructions, If there are no instructions press space followed by enter to continue!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide a description of how to use the project (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('You need to enter usage instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Provide a description of how to contribute to the project (Required)',
            validate: contributeInput => {
                if (contributeInput) {
                    return true;
                } else {
                    console.log('You need to enter contribution instructions, If there are no instructions press space followed by enter to continue!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide a description of how to test the project (Required)',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('You need to enter test instructions, If there are no instructions press space followed by enter to continue!');
                    return false;
                }
            }
        },
    ]);
};
promptUser()
    .then(readData => {
        return generateReadME(readData);
    })
    .then(pageMD => {
        return writeFile(pageMD);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });