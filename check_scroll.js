const fs = require('fs');
const txt = fs.readFileSync('src/js/core-3d.js', 'utf8');
["lenis", "virtual-scroll", "wheel", "touchstart"].forEach(q => {
  const idx = txt.indexOf(q);
  if (idx > -1) {
    console.log(`Found "${q}" at index ${idx}. Context:`);
    console.log(txt.substring(Math.max(0, idx - 50), idx + 100));
  } else {
    console.log(`Not found: "${q}"`);
  }
});
