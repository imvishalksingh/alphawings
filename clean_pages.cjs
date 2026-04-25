const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Remove <header>...</header> and its content
  content = content.replace(/<header[\s\S]*?<\/header>/g, '');
  
  // Remove <nav>...</nav> and its content (if it's not the Navigation component)
  // Be careful not to remove <nav> if it's part of the main layout, but usually it's the header.
  content = content.replace(/<nav[\s\S]*?<\/nav>/g, '');

  // Remove <footer>...</footer> and its content
  content = content.replace(/<footer[\s\S]*?<\/footer>/g, '');

  // Fix padding-top for pages since header is now global and fixed
  // Most pages have pt-[120px] or pt-20. We should ensure they have enough top space.
  if (!content.includes('pt-') && !content.includes('py-')) {
     // If it's a simple div, add some padding
     content = content.replace(/className="page-container"/, 'className="page-container pt-24"');
  } else {
     // Ensure pt is at least 24
     content = content.replace(/pt-\[?\d+px\]?|pt-\d+/, 'pt-24');
  }

  // Remove unnecessary blank lines left behind
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Cleaned: ${file}`);
  } else {
    console.log(`No change: ${file}`);
  }
}
