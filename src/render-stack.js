const renderStack = techArr => {
    return `
    ${techArr
            .map(({ technology, description, badgeMessage, color, link, linkDescription,  }) => {
                return `
| ![${technology}](https://shields.io/static/v1?label=${technology}&message=${badgeMessage}&color=${color}&style=flat-square) | ${description}| [${linkDescription}](${link})|
        `;
            })
            .join(`  
            `)}
            `
        
        
    }

module.exports= renderStack 