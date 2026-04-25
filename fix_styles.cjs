const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

function fixStyles() {
  const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));
  for (const file of files) {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace style="key: value;" with style={{ key: "value" }}
    let modified = content.replace(/style="([^"]*)"/g, (match, styleString) => {
      // Split by ;
      const parts = styleString.split(';').map(p => p.trim()).filter(Boolean);
      const styleObj = {};
      parts.forEach(part => {
        const [k, ...v] = part.split(':');
        if (!k || !v.length) return;
        
        // camelCase the key
        const camelKey = k.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        styleObj[camelKey] = v.join(':').trim();
      });
      
      return `style={${JSON.stringify(styleObj)}}`;
    });

    if (modified !== content) {
      fs.writeFileSync(filePath, modified);
      console.log(`Fixed styles in ${file}`);
    }
  }
}

fixStyles();
