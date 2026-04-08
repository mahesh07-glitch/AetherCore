const fs = require('fs');
let txt = fs.readFileSync('src/js/core-3d.js', 'utf8');
txt = txt.replace(/\.\/index-[a-z0-9]+\.js/g, './main.js');
fs.writeFileSync('src/js/core-3d.js', txt);
console.log('Fixed imports in core-3d.js');
