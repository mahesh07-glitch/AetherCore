const fs = require('fs');
let txt = fs.readFileSync('src/js/core-3d.js', 'utf8');
let idx = txt.indexOf('title: "PORTFOLIO_CO_01');
fs.writeFileSync('debug_text.txt', txt.substring(idx - 50, idx + 2000));
