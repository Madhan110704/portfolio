import zipfile
import os
import shutil

docx_path = r'C:\Users\Santhosh-Madhan\Downloads\Electronics_Portfolio_with_Images (1).docx'

mapping = {
    'media/5a8840e119103570eabac1f50055f615247abd96.jpeg': 'corridor-lighting/corridor_lighting_setup.jpeg',
    'media/2c2c75f38e8d52ea7f2a4e787c0d9140e9718fb0.jpeg': 'cleaning-robot/cleaning_robot_assembly.jpeg',
    'media/fa3221a4bbe978704257b52dfcce366268548188.jpeg': 'cleaning-robot/motor_sensor_integration.jpeg',
    'media/e67a98d76dc761b9174342d258abd5dd09b21b8f.jpeg': 'smoke-gas-alert/smoke_gas_setup.jpeg',
    'media/fb0317ce9d5c7c67ecaaf6b03df4119bef5c6415.png': 'cardiac-monitoring/cardiac_interface.png',
    'media/f154b3fe738ea1c27454f3eacd9324561ef6ccf5.png': 'cardiac-monitoring/thingspeak_visualization.png',
    'media/4d9e1e6f69652871b606bcbd05b333a418e11112.png': 'floating-shelter/shelter_system_architecture.png',
    'media/28b9c18ec0c502ed2f09491f4e55523b3ae12860.png': 'general-antenna/antenna_s11_analysis.png',
    'media/240550520e60abc2efc0cf737f08c3e1b98802d4.png': 'general-antenna/patch_array_configuration.png',
    'media/8ff97b355e7ae7704a7ddd866564d18841b4a391.png': 'metasurface-uwb/uwb_3d_geometry.png',
    'media/00d08d9ae7cf78a0e46281fb453bfd308b2a0da3.png': 'metasurface-uwb/uwb_s_parameters.png',
    'media/2d105ddf4d985d154370787a87ead353b168d8be.png': 'metasurface-uwb/uwb_radiation_gain.png',
    'media/d4b0f99875b7ac31b30055697d7e3f2f01450968.png': 'approx-adder/adder_architecture_power.png',
    'media/ec32bf44ac2a573137b19591cf42be9970e3b4b1.png': 'approx-adder/circuit_schematic_hybrid.png',
    'media/57e906be715746920e76f80f40abc9ede6ec8cf1.jpeg': 'power-converter/power_converter_schematic.jpeg',
    'media/85e7dcff341428bab56b537d7de9a7807ff1631a.jpeg': 'power-converter/power_converter_pcb_layout.jpeg',
}

dest_base = r'c:\Users\Santhosh-Madhan\OneDrive\Pictures\Desktop\antigravity\portfolio try2\public\images\projects'

with zipfile.ZipFile(docx_path) as z:
    for src_rel, dest_rel in mapping.items():
        zip_path = 'word/' + src_rel
        out_path = os.path.join(dest_base, dest_rel)
        os.makedirs(os.path.dirname(out_path), exist_ok=True)
        with z.open(zip_path) as f_in, open(out_path, 'wb') as f_out:
            shutil.copyfileobj(f_in, f_out)
        print(f"Extracted {zip_path} -> {out_path} ({os.path.getsize(out_path)} bytes)")
