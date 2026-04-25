const fs = require('fs');
const path = require('path');
const https = require('https');

const screensFile = path.join('C:', 'Users', 'ASUS', '.gemini', 'antigravity', 'brain', 'b272ecd8-f694-4674-8f94-f90e5e89722d', '.system_generated', 'steps', '35', 'output.txt');
const screensData = JSON.parse(fs.readFileSync(screensFile, 'utf8'));

const pagesDir = path.join(__dirname, 'src', 'pages');
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function convertToReact(html, componentName) {
  // Very basic conversion
  let jsx = html.replace(/class=/g, 'className=')
                .replace(/for=/g, 'htmlFor=')
                .replace(/<!--[\s\S]*?-->/g, '') // remove comments
                .replace(/<img([^>]+)>/g, (match, p1) => {
                   if (!p1.endsWith('/')) {
                     return `<img${p1} />`;
                   }
                   return match;
                })
                .replace(/<br>/g, '<br />')
                .replace(/<hr>/g, '<hr />')
                .replace(/<input([^>]+)>/g, (match, p1) => {
                   if (!p1.endsWith('/')) {
                     return `<input${p1} />`;
                   }
                   return match;
                });
  
  // Extract the body content if it's a full HTML document
  const bodyMatch = jsx.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch) {
    jsx = bodyMatch[1];
  }

  // Wrap multiple root elements if needed, but usually it's one main div
  return `import React from 'react';\n\nexport default function ${componentName}() {\n  return (\n    <div className="page-container">\n      ${jsx}\n    </div>\n  );\n}\n`;
}

async function generate() {
  const generated = new Set();
  
  for (const screen of screensData.screens) {
    if (!screen.htmlCode || !screen.htmlCode.downloadUrl) continue;
    
    let baseName = screen.title.split(' - ')[0].replace(/[^a-zA-Z0-9]/g, '');
    if (!baseName) baseName = "Page";
    let componentName = baseName.charAt(0).toUpperCase() + baseName.slice(1);
    
    if (generated.has(componentName)) continue;
    generated.add(componentName);
    
    console.log(`Downloading ${componentName}...`);
    try {
      const html = await fetchUrl(screen.htmlCode.downloadUrl);
      const jsx = convertToReact(html, componentName);
      
      const filePath = path.join(pagesDir, `${componentName}.jsx`);
      fs.writeFileSync(filePath, jsx);
      console.log(`Saved ${componentName}.jsx`);
    } catch (err) {
      console.error(`Failed to generate ${componentName}:`, err.message);
    }
  }
}

generate();
