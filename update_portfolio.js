const fs = require('fs');
let coreFile = 'src/js/core-3d.js';
if (fs.existsSync(coreFile)) {
    let content = fs.readFileSync(coreFile, 'utf8');

    // Make replacements
    content = content.replace('title: "PORTFOLIO_CO_01 Pudgy Penguins"', 'title: "PORTFOLIO_CO_01 Project Nexus"');
    content = content.replace('hash: "pudgy-penguins"', 'hash: "project-nexus"');
    
    // Find the content block precisely
    // Using a regex to replace everything inside the backticks after "content: `"
    const oldContentRegex = /content:\s*`Pudgy Penguins, a creative venture founded in 2021[\s\S]*?experienced\.`,/g;
    
    const targetText = `content: \`Project Nexus, the genesis world of the AetherCore ecosystem, launched as an experiment in community-driven world-building. What began as a scattered collection of digital assets has evolved into a fully realized onchain universe.

The core vision of AetherCore is to transform passive consumers into active architects. By shifting from top-down development to open-ecosystem participation, we allow our community to directly influence the expansion and mechanics of the network. Together, we are building a vast digital frontier where code, creativity, and community merge into one.\`,`;

    content = content.replace(oldContentRegex, targetText);

    fs.writeFileSync(coreFile, content);
    console.log('Successfully updated the portfolio text to Project Nexus.');
}
