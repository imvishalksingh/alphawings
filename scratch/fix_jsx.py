import glob

for filepath in glob.glob('src/pages/IT*.jsx'):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = content.replace('/ />', '/>')
    content = content.replace('<circle class=', '<circle className=')
    content = content.replace('<svg class=', '<svg className=')
    content = content.replace('stroke-linecap=', 'strokeLinecap=')
    content = content.replace('stroke-linejoin=', 'strokeLinejoin=')
    
    # In ITServices, link to the subpages
    if 'ITServices.jsx' in filepath:
        content = content.replace('to="#">Explore Mobile', 'to="/services/it/mobile">Explore Mobile')
        content = content.replace('to="#">Our Process', 'to="/services/it/software">Our Process')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
