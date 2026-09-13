import os
from PIL import Image

folder_path = "public/images/drive_photos/services/Makeup/Bridal packages available at Q'riflame"

for filename in os.listdir(folder_path):
    if filename.lower().endswith(('.jpg', '.jpeg', '.png')):
        filepath = os.path.join(folder_path, filename)
        try:
            img = Image.open(filepath)
            
            # Convert RGBA to RGB for JPEG compatibility if needed
            if img.mode == 'RGBA' or img.mode == 'P':
                img = img.convert('RGB')
                
            # Resize if too large
            max_width = 800
            if img.width > max_width:
                ratio = max_width / img.width
                new_size = (max_width, int(img.height * ratio))
                # Use Resampling.LANCZOS for modern Pillow, ANTIALIAS for older.
                try:
                    img = img.resize(new_size, Image.Resampling.LANCZOS)
                except AttributeError:
                    img = img.resize(new_size, Image.ANTIALIAS)
                
            # Save with compression
            img.save(filepath, "JPEG", optimize=True, quality=60)
            print(f"Compressed {filename}")
        except Exception as e:
            print(f"Failed to compress {filename}: {e}")
