const fs = require('fs');
let coreFile = 'src/js/core-3d.js';
if (fs.existsSync(coreFile)) {
    let content = fs.readFileSync(coreFile, 'utf8');

    // Replace the specific lingering 'url:' fields in the global footer menu
    content = content.replace(/"https:\/\/www\.twitter\.com\/iglooinc"/g, '"https://x.com/Mahesh1560694"');
    content = content.replace(/"https:\/\/www\.linkedin\.com\/company\/igloo-incorporated"/g, '"https://www.linkedin.com/in/mahesh-bantupalli-3446ab3a5"');
    
    fs.writeFileSync(coreFile, content);
    console.log('Fixed the lingering URLs in the footer menu.');
}
