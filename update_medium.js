const fs = require('fs');
let coreFile = 'src/js/core-3d.js';
if (fs.existsSync(coreFile)) {
    let content = fs.readFileSync(coreFile, 'utf8');

    // Make replacements
    content = content.replace('https://medium.com/@iglooinc', 'https://medium.com/@mahesh9182166');
    
    fs.writeFileSync(coreFile, content);
    console.log('Successfully updated the Medium link.');
}
