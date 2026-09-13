import zipfile
import xml.etree.ElementTree as ET
import os

docx_path = r'C:\Users\Santhosh-Madhan\Downloads\Electronics_Portfolio_with_Images (1).docx'

with zipfile.ZipFile(docx_path) as z:
    rels_xml = z.read('word/_rels/document.xml.rels')
    rels_tree = ET.fromstring(rels_xml)
    rel_map = {}
    for r in rels_tree:
        rel_map[r.attrib['Id']] = r.attrib['Target']

    doc_xml = z.read('word/document.xml')
    doc_tree = ET.fromstring(doc_xml)
    
    current_image = None
    for i, p in enumerate(doc_tree.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p')):
        p_text = ''.join([t.text for t in p.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if t.text])
        blips = [b.attrib['{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed'] 
                 for b in p.iter('{http://schemas.openxmlformats.org/drawingml/2006/main}blip') 
                 if '{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed' in b.attrib]
        if blips:
            current_images = [rel_map.get(b, b) for b in blips]
            print(f"IMAGES: {current_images}")
        if 'Figure' in p_text or p_text.startswith('Figure'):
            print(f"CAPTION: {p_text}")
