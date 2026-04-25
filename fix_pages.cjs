const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

let totalFixes = 0;

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Fix mismatched tags: <a ...>...</Link> => <a ...>...</a>
  content = content.replace(/<\/Link>/g, (match, offset) => {
    // Find the preceding unclosed <a
    const before = content.slice(0, offset);
    const lastOpenA = before.lastIndexOf('<a ');
    const lastOpenLink = before.lastIndexOf('<Link ');
    if (lastOpenA > lastOpenLink) {
      return '</a>';
    }
    return match;
  });

  // Fix mismatched tags: <Link ...>...</a> => <Link ...>...</Link>
  content = content.replace(/<\/a>/g, (match, offset) => {
    const before = content.slice(0, offset);
    const lastOpenA = before.lastIndexOf('<a ');
    const lastOpenLink = before.lastIndexOf('<Link ');
    if (lastOpenLink > lastOpenA) {
      return '</Link>';
    }
    return match;
  });

  // Fix style="..." (HTML string) => style={{...}} (React object)
  content = content.replace(/style="([^"]+)"/g, (match, styleStr) => {
    try {
      const pairs = styleStr.split(';').filter(s => s.trim());
      const obj = pairs.map(pair => {
        const [prop, ...vals] = pair.split(':');
        const value = vals.join(':').trim();
        const camel = prop.trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
        return `"${camel}": "${value}"`;
      }).join(', ');
      return `style={{${obj}}}`;
    } catch {
      return match;
    }
  });

  // Fix class= => className= (any remaining)
  content = content.replace(/ class="/g, ' className="');

  // Fix href="#" on Link components (replace with to="/" )
  // (Links should use `to`, not `href`)
  content = content.replace(/<Link\s+([^>]*?)href="([^"]*)"([^>]*?)>/g, (match, before, href, after) => {
    const to = href.startsWith('/') || href === '#' ? (href === '#' ? '/' : href) : href;
    return `<Link ${before}to="${to}"${after}>`;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    totalFixes++;
    console.log(`Fixed: ${file}`);
  } else {
    console.log(`OK:    ${file}`);
  }
}

console.log(`\nDone. Fixed ${totalFixes} files.`);
