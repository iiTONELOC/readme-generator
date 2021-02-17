const renderLicenseText = require('./render-license')
const {renderStack, generateLicenseShield} = require('./render-functions')
// generate README
// export function to generate entire page
module.exports = templateData => {
    const { tech, ...data } = templateData;    
    return `
# ${data.title}  
${generateLicenseShield(data.license)}

# Screenshot
![${data.title}](${data.screenshot})

# Description
${data.description}

# Table of Contents
*[Demo](#demo)
*[Technology Stack](#technology-stack)
*[Features](#features)  
*[Installation](#installation)
*[Usage](#usage)  
*[Contribute](#contribute)  
*[Tests](#tests)  
*[Questions](#questions)  
*[License](#license)

# Demo
[![${data.title}](${data.screenshot})](${data.demoURL})

# Tech Stack
| Technology | Description                        |Links ↘️ |
| ---------- | -----------------------------------| ------|  
${renderStack(tech)}

# Features
${data.features}

# Installation  
Project Repository: [${data.link}](https://github.com/${data.github}/${data.link})  
${data.installation} 

# Usage
${data.url}
${data.usage}

# Contribute 
${data.contribute}

# Tests
${data.test}

# Questions/Contact Information
Feel free to reach out if you have any questions

Contact via GitHub: [${data.github}](https://github.com/${data.github})  
Send an email: [${data.email}](mailto:${data.email})

# License
${renderLicenseText(data)}
`;
};
