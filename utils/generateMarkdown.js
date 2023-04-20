// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![${license} license](https://img.shields.io/badge/license-${encodeURIComponent(license)}-blue.svg)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `* [License](#license)
    `;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

This project is licensed under the ${license} license.
    `;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.projectName}
${renderLicenseBadge(data.projectLicense)}

## Description

${data.projectDescription}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

${renderLicenseLink(data.projectLicense)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.projectDependencies}
\`\`\`

## Usage

${data.projectUsage}

${renderLicenseSection(data.projectLicense)}
## Contributing

${data.projectContributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.projectTests}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.emailAddress}. You can find more of my work at [${data.githubUsername}](https://github.com/${data.githubUsername}).
  `;
}

module.exports = generateMarkdown;
