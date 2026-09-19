import os
from PIL import Image

def compress_directory(base_dir, max_width=900, quality=75):
    total_saved_bytes = 0
    count = 0
    
    for root, dirs, files in os.walk(base_dir):
        for filename in files:
            if filename.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
                filepath = os.path.join(root, filename)
                try:
                    orig_size = os.path.getsize(filepath)
                    # Skip if already small (less than 250 KB)
                    if orig_size < 250 * 1024:
                        continue
                        
                    img = Image.open(filepath)
                    
                    if img.mode in ('RGBA', 'P'):
                        img = img.convert('RGB')
                        
                    if img.width > max_width:
                        ratio = max_width / float(img.width)
                        new_height = int(float(img.height) * ratio)
                        img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                        
                    img.save(filepath, "JPEG", optimize=True, quality=quality)
                    new_size = os.path.getsize(filepath)
                    saved = orig_size - new_size
                    total_saved_bytes += max(0, saved)
                    count += 1
                    print(f"Compressed {filename}: {orig_size / 1024 / 1024:.2f} MB -> {new_size / 1024:.1f} KB (Saved {saved / 1024 / 1024:.2f} MB)")
                except Exception as e:
                    print(f"Error processing {filename}: {e}")
                    
    print(f"\nCompleted! Compressed {count} images, saved total {total_saved_bytes / 1024 / 1024:.2f} MB!")

if __name__ == "__main__":
    compress_directory("public/images")
