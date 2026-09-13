import sys
from PIL import Image

def trim_transparency(img_path, out_path):
    img = Image.open(img_path)
    # Get bounding box of non-zero alpha
    bbox = img.getbbox()
    if bbox:
        img_cropped = img.crop(bbox)
        img_cropped.save(out_path)
        print(f"Trimmed {img_path} and saved to {out_path}")
    else:
        print("Image is entirely transparent or bounding box not found.")

if __name__ == "__main__":
    if len(sys.argv) == 3:
        trim_transparency(sys.argv[1], sys.argv[2])
    else:
        print("Usage: python trim_image.py <input> <output>")
