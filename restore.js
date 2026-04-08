const fs = require('fs');

let coreFile = 'src/js/core-3d.js';
if (fs.existsSync(coreFile)) {
    let content = fs.readFileSync(coreFile, 'utf8');
    
    // Restore createLogo call
    content = content.replace(/\/\*this\.createLogo\(\)\*\//g, 'this.createLogo()');
    
    // Let's hide the logo after it's created. We can inject this after the Promise.all
    // It's safer to just set the mesh to invisible inside the LF class, but the code is minified.
    // Let's find "this.logo = new LF(this)" and change it
    // Wait, let's just make the createLogo() function hide it.
    // Original: async createLogo() { ((this.logo = new LF(this)), await this.logo.ready); }
    const hideCode = "async createLogo() { ((this.logo = new LF(this)), await this.logo.ready); if (this.logo && this.logo.mesh) this.logo.mesh.visible = false; }";
    content = content.replace(/async createLogo\(\)\s*\{\s*\(\(this\.logo = new LF\(this\)\), await this\.logo\.ready\);\s*\}/, hideCode);
    
    fs.writeFileSync(coreFile, content);
    console.log('Restored createLogo and set it to hidden.');
}
