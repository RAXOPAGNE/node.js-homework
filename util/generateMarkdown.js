// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  else if (license === 'GPL 3.0') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  else if (license === 'APACHE 2.0'){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  else if (license === 'BSD 3'){
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  }
  else if (license === 'MPL 2.0'){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  }
   return '';
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, licenseChoice) {
  if(license == "None"){
    return "";
   }

   var badge =renderLicenseBadge(license, licenseChoice);
   var link =renderLicenseLink(license,renderLicenseLink);

   return badge + " \r" + link + " ";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, licenseChoice) {
  var sec = renderLicenseSection(data.license, licenseChoice)
  return `
  # 
  ${data.title} ${renderLicenseBadge(data.License)}
  ${sec}
  # Contents table
  *[Description](#Description)
  *[Installation}(#Install)
  *[Instruction](#Instructions)
  *[Contributors](#Contributors)
  *[Test](#Test)
  *${renderLicenseLink}
  *[Questions](#Questions)

  ## Description
  ${Data.Description}

  ## Installation
  You install this project by ${data.Install}

  ## Instructions
  You use this project by ${data.Instructions}

  ## Contributors
   Please list the Contributors ${data.Contributors}

  ## Test
  This is how you run a test ${data.Test}

  ## License
  This project uses the following licenses ${data.License}

  ## Questions 
  Any questions contact me here: 

  Github:[${data.GitHub}](https://github.com/${data.GitHub})

  Email:[${data.Email}](mailto:${data.Email})

`;
}

module.exports = generateMarkdown;