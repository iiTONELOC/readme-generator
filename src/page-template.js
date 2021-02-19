const renderLicenseText = require('./render-license')
const {renderStack, generateLicenseShield} = require('./render-functions')
// generate README
// export function to generate entire page
module.exports = templateData => {
    const { tech, ...data } = templateData;    
    return `
# ${data.title}  
${generateLicenseShield(data.license)} ![GitHub language count](https://img.shields.io/github/languages/count/${data.github}/${data.link}?style=flat-square) ![GitHub top language](https://img.shields.io/github/languages/top/${data.github}/${data.link}?style=flat-square)

# Screenshot
![${data.title}](${data.screenshot})

# Description
${data.description}

# Table of Contents
*[Demo](#demo)  
*[Technology](#technology)  
*[Features](#features)  
*[Installation](#installation)  
*[Usage](#usage)  
*[Contribute](#contribute)  
*[Tests](#tests)  
*[Questions](#questions)  
*[License](#license)

# Demo
[DEMO: ${data.title}](${data.demoURL})

# Technology 
| Technology | Description                        |Links ↘️ |
| ---------- | -----------------------------------| ------|  
${renderStack(tech)}

# Features
${data.features}

# Installation  
Project Repository: [${data.title}](https://github.com/${data.github}/${data.link})  
${data.installation} 

# Usage
[${data.title}](${data.url})  
${data.usage}

# Contribute 
${data.contribute}

# Tests
${data.test}

# Questions
Feel free to reach out if you have any questions

Contact via GitHub: [${data.github}](https://github.com/${data.github})  
Send an email: [${data.email}](mailto:${data.email})

# License
${renderLicenseText(data)}
`;
};
