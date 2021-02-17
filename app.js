const inquirer = require('inquirer');
const generateReadME = require('./src/page-template');
const writeFile = require('./utils/generate-readme');

console.log(`
=========================================================
                    README Generator
=========================================================


*********************************************************
 - Welcome to README Generator!
 - Follow the prompts and enter the required information.
 - If there are no instructions for a required section,
   press the space-bar followed by enter to continue!

*********************************************************


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
            message: 'Enter the name for your GitHub Repo. (Required)',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('You need to enter a repo!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'url',
            message: 'Enter the full url for your deployed application.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address if you would like to include it in your readme.',
        },
        {
            type: 'list',
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
        },
        {
            type: 'input',
            name: 'screenshot',
            message: 'What is the relative path for the screenshot? (Required)',
            validate: screenInput => {
                if (screenInput) {
                    return true;
                } else {
                    console.log('You need to enter a screenshot path!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'demoURL',
            message: 'What is the relative path for the video for the DEMO? (Required)',
            validate: demoInput => {
                if (demoInput) {
                    return true;
                } else {
                    console.log('You need to enter a relative path!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'features',
            message: 'What features would you like to talk about? (Required)',
            validate: demoInput => {
                if (demoInput) {
                    return true;
                } else {
                    console.log('You need to enter features!');
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
                    console.log('You need to enter installation instructions!');
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
                    console.log('You need to enter instructions for how to use your app!');
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
                    console.log('You need to enter contribution instructions!');
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
                    console.log('You need to enter instructions for how to test your app!');
                    return false;
                }
            }
        },
    ]);
};

// adds the tech stack
const promptTech = readData => {
    console.log(`
  ========================
    Build the tech Stack 
  ========================
  `);

    // If there's no 'tech' array property, create one
    if (!readData.tech) {
        readData.tech = [];
    }
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'technology',
                message: 'What is the name of the technology used? (Required)',
                validate: techInput => {
                    if (techInput) {
                        return true;
                    } else {
                        console.log('You need to enter a technology!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'Provide a description of the the language, i.e HTML would be Hyper Text Markup Language (Required)',
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('You need to enter a description!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'badgeMessage',
                message: 'What is the code coverage for this language? Please include %',
                validate: badgeInput => {
                    if (badgeInput) {
                        return true;
                    } else {
                        console.log('You need to enter a % amount');
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'color',
                message: 'Select a color for your badge',
                choices: [
                    'brightgreen',
                    'green',
                    'yellowgreen',
                    'yellow',
                    "orange",
                    "red",
                    'blue',
                    'lightgrey',
                    'blueviolet',
                    'rebeccapurple',
                ],
            },
            {
                type: 'input',
                name: 'link',
                message: 'Please provide the full link including https:// ',
                
            },
            {
                type: 'input',
                name: 'linkDescription',
                message: 'Please provide the description for the link',
                
            },
            {
                type: 'confirm',
                name: 'confirmAddTech',
                message: 'Would you like to enter another technology to the stack?',
                default: false
            }
        ])
        .then(techData => {
            readData.tech.push(techData);
            if (techData.confirmAddTech) {
                return promptTech(readData);
            } else {
                return readData;
            }
        });
};
promptUser()
    .then(promptTech)
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