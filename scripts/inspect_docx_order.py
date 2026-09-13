import zipfile
import xml.etree.ElementTree as ET

docx_path = r'C:\Users\Santhosh-Madhan\Downloads\Electronics_Portfolio_with_Images (1).docx'

with zipfile.ZipFile(docx_path) as z:
    rels = ET.fromstring(z.read('word/_rels/document.xml.rels'))
    rel_map = {r.attrib['Id']: r.attrib['Target'] for r in rels}
    
    doc = ET.fromstring(z.read('word/document.xml'))
    
    # Iterate in exact document order
    for elem in doc.iter():
        if elem.tag.endswith('p'):
            p_text = ''.join(elem.itertext()).strip()
            blips = [b.attrib.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed') 
                     for b in elem.iter() if b.tag.endswith('blip')]
            blips = [rel_map.get(b) for b in blips if b]
            if p_text or blips:
                if 'Figure' in p_text or blips:
                    print(f"TEXT: {p_text} | BLIPS: {blips}")
