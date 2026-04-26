import glob, re
for f in glob.glob('src/pages/IT*.jsx'):
    with open(f, 'r', encoding='utf-8') as file:
        c = file.read()
    c = c.replace('/ />', '/>')
    c = c.replace('"/ />', '" />')
    c = c.replace('" />>', '" />')
    c = re.sub(r'"/>\s*/>', '"/>', c)
    c = re.sub(r'"\s*/>\s*/>', '" />', c)
    c = re.sub(r'/\s*/>', '/>', c)
    c = re.sub(r'/\s*>\s*/>', '/>', c)
    
    # Let's fix the specific error where it says "/ />
    c = c.replace('"/ />', '" />')
    
    # Also I'll just use a regex to fix <img ... "/ /> to <img ... " />
    c = re.sub(r'(<img[^>]+?)"/\s*/>', r'\1" />', c)
    
    # The build error also said "Expected } but found :"
    # Let's see if we have any unescaped `{` or something.
    c = c.replace('style={{"fontVariationSettings":"\'FILL\' 1"}}', 'style={{fontVariationSettings:"\'FILL\' 1"}}')
    
    with open(f, 'w', encoding='utf-8') as file:
        file.write(c)
