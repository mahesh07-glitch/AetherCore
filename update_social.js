const fs = require('fs');
let coreFile = 'src/js/core-3d.js';
if (fs.existsSync(coreFile)) {
    let content = fs.readFileSync(coreFile, 'utf8');

    // Make replacements
    content = content.replace('https://twitter.com/iglooinc', 'https://x.com/Mahesh1560694');
    content = content.replace('https://www.linkedin.com/company/igloo-incorporated', 'https://www.linkedin.com/in/mahesh-bantupalli-3446ab3a5');
    
    fs.writeFileSync(coreFile, content);
    console.log('Successfully updated the social profile links.');
}
