import zipfile
import xml.etree.ElementTree as ET

docx_path = r'C:\Users\Santhosh-Madhan\Downloads\Electronics_Portfolio_with_Images (1).docx'

with zipfile.ZipFile(docx_path) as z:
    rels = ET.fromstring(z.read('word/_rels/document.xml.rels'))
    rel_map = {r.attrib['Id']: r.attrib['Target'] for r in rels}
    
    doc = ET.fromstring(z.read('word/document.xml'))
    
    # We want to traverse every paragraph in document.xml
    ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
          'a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
          'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships'}
    
    for p in doc.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
        text = ''.join(p.itertext()).strip()
        blips = [b.attrib.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed')
                 for b in p.iter('{http://schemas.openxmlformats.org/drawingml/2006/main}blip')]
        blips = [rel_map.get(b) for b in blips if b]
        if text or blips:
            print(f"P: text='{text}' | blips={blips}")
