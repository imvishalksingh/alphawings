import re

def convert_html_to_jsx(html_content):
    content = html_content.replace('class=', 'className=')
    content = content.replace('<!--', '{/*')
    content = content.replace('-->', '*/}')
    content = re.sub(r'<img([^>]+)>(?!</img)', r'<img\1 />', content)
    content = re.sub(r'<input([^>]+)>(?!</input)', r'<input\1 />', content)
    content = re.sub(r'<br([^>]+)>(?!</br)', r'<br\1 />', content)
    content = re.sub(r'<hr([^>]+)>(?!</hr)', r'<hr\1 />', content)
    content = content.replace('viewbox', 'viewBox')
    content = content.replace('stroke-width', 'strokeWidth')
    content = content.replace('stroke-dasharray', 'strokeDasharray')
    content = content.replace('stroke-dashoffset', 'strokeDashoffset')
    
    # Fix self closing tags like img if they already have />
    content = content.replace('//>', '/>')
    return content

def process_file(in_path, out_path, component_name):
    with open(in_path, 'r', encoding='utf-8') as f:
        html = f.read()

    match = re.search(r'</nav>(.*?)<footer', html, re.DOTALL)
    if match:
        body_content = match.group(1).strip()
    else:
        body_content = html # fallback
        
    jsx_content = convert_html_to_jsx(body_content)
    
    template = f"""import React from 'react';
import {{ Link }} from 'react-router-dom';

export default function {component_name}() {{
  return (
    <div className="page-container pt-0">
      {{/* Content Start */}}
      {jsx_content}
      {{/* Content End */}}
    </div>
  );
}}
"""
    template = template.replace('href="#"', 'to="#"')
    template = template.replace('<a ', '<Link ')
    template = template.replace('</a>', '</Link>')
    
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(template)

process_file('it/it_services_solutions_expanded_nexus_global/code.html', 'src/pages/ITServices.jsx', 'ITServices')
process_file('it/mobile_ecosystems_nexus_it_ai/code.html', 'src/pages/ITMobileEcosystems.jsx', 'ITMobileEcosystems')
process_file('it/custom_software_nexus_it_ai/code.html', 'src/pages/ITCustomSoftware.jsx', 'ITCustomSoftware')
