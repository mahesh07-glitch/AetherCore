const fs = require('fs');
let txt = fs.readFileSync('src/js/core-3d.js', 'utf8');

let results = [];

let re = /.{0,50}LinkedIn.{0,100}/g;
let match;
while ((match = re.exec(txt)) !== null) {
  results.push('FOUND: ' + match[0]);
}

re = /.{0,50}twitter\.com.{0,100}/g;
while ((match = re.exec(txt)) !== null) {
  results.push('FOUND X/TW: ' + match[0]);
}

re = /.{0,50}linkedin\.com.{0,100}/g;
while ((match = re.exec(txt)) !== null) {
  results.push('FOUND LI URL: ' + match[0]);
}

fs.writeFileSync('socials_dump.txt', results.join('\n'));
