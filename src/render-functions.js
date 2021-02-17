const renderStack = techArr => {
    return `${techArr
        .map(
            ({
                technology,
                description,
                badgeMessage,
                color,
                link,
                linkDescription,
            }) => {
                return `| ![${technology}](https://shields.io/static/v1?label=${technology}&message=${badgeMessage}&color=${color}&style=flat-square) | ${description} | [${linkDescription}](${link}) |`;
            }
        )
        .join(`\n`)}`;
};
const generateLicenseShield = license => {
    let badge = ''
    switch (license) {
        case 'None':
            badge = '![License](https://img.shields.io/badge/license-None-informational)'
            break;


        case 'Apache License 2.0':
            badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
            break;

        case 'GNU General Public License v3.0':
            badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
            break;

        case 'MIT License':
            badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            break;

        case "BSD 2-Clause 'Simplified' License":
            badge = '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
            break;

        case "BSD 3-Clause 'New' or 'Revised' License":
            badge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
            break;

        case 'Boost Software License 1.0':
            badge = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
            break;

        case 'Creative Commons Zero v1.0 Universal':
            badge = '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)'
            break;

        case 'Eclipse Public License 2.0':
            badge = '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
            break;

        case 'GNU Affero General Public License v3.0':
            badge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
            break;

        case 'GNU General Public License v2.0':
            badge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
            break;

        case 'GNU Lesser General Public License v2.1':
            badge = '[![License: GPL v2.1](https://img.shields.io/badge/License-GPL%20v2.1-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
            break;

        case 'Mozilla Public License 2.0':
            badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
            break;

        case 'The Unlicense':
            badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
            break;
        default:
            badge = ''
            break;
    }
    return badge
}
module.exports = {renderStack, generateLicenseShield };