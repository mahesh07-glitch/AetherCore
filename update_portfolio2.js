const fs = require('fs');
let coreFile = 'src/js/core-3d.js';
if (fs.existsSync(coreFile)) {
    let content = fs.readFileSync(coreFile, 'utf8');

    // Make replacements
    content = content.replace('title: "PORTFOLIO_CO_02 Overpass"', 'title: "PORTFOLIO_CO_02 Anomaly-02"');
    content = content.replace('hash: "overpass"', 'hash: "anomaly-02"');
    
    // Find the content block precisely
    const oldContentRegex = /content:\s*`OverpassIP was established[\s\S]*?broader market\.`,/g;
    
    const targetText = `content: \`Anomaly-02: 'The Overpass'. Originally documented as a rogue data leak during the early test phases of the Aether Engine, The Overpass was successfully quarantined and repurposed in late 2025. It now serves as an encrypted bridge between the AetherCore network and legacy Web2 infrastructure.

Operating entirely in the shadows, this protocol allows legacy systems to anonymously port logic and geometry into our decentralized chain. Access to The Overpass is strictly regulated and curated by the core architect team, ensuring only the highest fidelity digital artifacts cross the threshold into our ecosystem. It is the silent gatekeeper of the AetherCore reality.\`,`;

    content = content.replace(oldContentRegex, targetText);

    fs.writeFileSync(coreFile, content);
    console.log('Successfully updated the portfolio text to Anomaly-02.');
}
