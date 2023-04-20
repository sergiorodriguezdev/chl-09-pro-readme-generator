// Return markdown code for badge
// If no license was selected then don't render anything
function renderLicenseBadge(license, color) {
  if (license !== 'None') {
    // Include appropriate alt text in markdown code
    // Encode license name for URL usage
    return `![${license} license](https://img.shields.io/badge/license-${encodeURIComponent(license)}-${color}.svg)`;
  } else {
    return '';
  }
}

// Return markdown code for License option in Table of Contents section
// If no license was selected then don't incldue License option in ToC
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `* [License](#license)
    `;
  } else {
    return '';
  }
}

// Return markdown code for License section
// If no license was selected then don't include License section in README
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

This project is licensed under the ${license} license.
    `;
  } else {
    return '';
  }
}

// This function returns the markdown code as a string
// A data object should include appropriate values when function is called to create markdown code correctly
function generateMarkdown(data) {

  // Return string literal with values from data object properties
  return `# ${data.projectName}
${renderLicenseBadge(data.projectLicense, data.badgeColor)}

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
