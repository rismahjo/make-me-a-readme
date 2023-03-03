const fs = require('fs');

//License badge. If no license then return empty string
function renderLicenseBadge(license) {
    if (!license) {
        return ``;
    } else {
        return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
    }
}

//Return license link
function renderLicenseLink(license) {
    if (license === 'MIT') {
        return `https://lbesson.mit-license.org/`
    }
    if (license === 'GPL') {
        return `http://perso.crans.org/besson/LICENSE.html`
    }
    if (license === 'CC--0') {
        return `https://creativecommons.org/licenses/by-nd/4.0`
    }
}

//Render the license section. If no license then return empty string
function renderLicenseSection(license) {
    if (!license) {
        return ``;
    } else {
        return `## Licenses
      This project is covered under the ${license} license.`
    }
}

// Generate markdown for README
function markdown(data) {
return `# ${data.title}
${renderLicenseBadge(data.licenses)}
## Table of Contents
* [Description](#description)
* [Demonstration](#demonstration)
* [Installation](#installation)
* [Usage](#usage)
* [Licenses](#licenses)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Credits](#credits)
## Description
${data.description}

## Demonstration

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.licenses)}

## Contributing
${data.contributing}

## Questions
Have questions about this project?  
GitHub: https://github.com/${data.github}  
Email: ${data.email}
## Credits
${data.name}
`;
}

module.exports = markdown;