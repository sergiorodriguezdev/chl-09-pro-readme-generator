// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
![something license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

${data.projectDescription}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
code goes here
\`\`\`

## Usage

usage instructions go here

## License

This project is licensed user something license.

## Contributing

some contributing info goes here

## Tests

To run tests, run the following command:

\`\`\`
code goes here
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at email@domain.com. You can find more of my work at [githubusername](https://github.com/githubusername).
  `;
}

module.exports = generateMarkdown;
