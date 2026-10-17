import os
from PIL import Image, ImageDraw, ImageFont

def generate_all():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    public_dir = os.path.join(base_dir, 'public')
    img_dir = os.path.join(public_dir, 'images')
    os.makedirs(img_dir, exist_ok=True)

    src_path = os.path.join(img_dir, 'logo.png')
    if not os.path.exists(src_path):
        # Fallback to jpg if png not present
        src_path_jpg = os.path.join(img_dir, 'logo.jpg')
        if os.path.exists(src_path_jpg):
            src_path = src_path_jpg
        else:
            raise FileNotFoundError(f"Source logo not found at {src_path}")

    src = Image.open(src_path).convert('RGB')

    # 1. logo-clean.png (crop total content bbox with breathing room)
    pad = 12
    clean_box = (max(0, 63 - pad), max(0, 47 - pad), min(512, 459 + pad), min(512, 463 + pad))
    logo_clean = src.crop(clean_box)
    logo_clean.save(os.path.join(img_dir, 'logo-clean.png'))
    print('[OK] Created logo-clean.png:', logo_clean.size)

    # 2. logo-mascot.png (clean mascot, scarf and airplane only)
    cleaned = src.copy()
    for y in range(src.height):
        for x in range(src.width):
            if y >= 312:
                cleaned.putpixel((x, y), (255, 255, 255))
            elif y >= 305 and x < 200:
                cleaned.putpixel((x, y), (255, 255, 255))
            elif y >= 295 and x > 360:
                cleaned.putpixel((x, y), (255, 255, 255))

    mascot_crop = cleaned.crop((40, 30, 475, 320))
    mascot_sq = Image.new('RGB', (440, 440), (255, 255, 255))
    mascot_sq.paste(mascot_crop, ((440 - mascot_crop.width) // 2, (440 - mascot_crop.height) // 2))
    mascot_sq.save(os.path.join(img_dir, 'logo-mascot.png'))
    print('[OK] Created logo-mascot.png:', mascot_sq.size)

    # 3. favicon.ico (multi-resolution ICO: 16, 32, 48, 64)
    ico_path = os.path.join(public_dir, 'favicon.ico')
    mascot_sq.save(ico_path, format='ICO', sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
    print('[OK] Created favicon.ico (multi-resolution 16/32/48/64)')

    # 4. apple-touch-icon.png (180x180)
    touch = Image.new('RGB', (180, 180), (255, 255, 255))
    mascot_156 = mascot_sq.resize((156, 156), Image.Resampling.LANCZOS)
    touch.paste(mascot_156, (12, 12))
    # Border
    touch_draw = ImageDraw.Draw(touch)
    touch_draw.rectangle([(0, 0), (179, 179)], outline=(233, 213, 255), width=2)
    touch.save(os.path.join(public_dir, 'apple-touch-icon.png'))
    print('[OK] Created apple-touch-icon.png (180x180)')

    # 5. og-share.png (1200x630)
    og = Image.new('RGB', (1200, 630), (250, 245, 255)) # #FAF5FF
    draw = ImageDraw.Draw(og)
    # Background grid
    for gx in range(0, 1200, 40):
        draw.line([(gx, 0), (gx, 630)], fill=(243, 232, 255), width=1)
    for gy in range(0, 630, 40):
        draw.line([(0, gy), (1200, gy)], fill=(243, 232, 255), width=1)

    # Outer border
    draw.rectangle([(30, 30), (1170, 600)], outline=(233, 213, 255), width=2)

    # Left content: typography & badges
    try:
        font_title = ImageFont.truetype('msyh.ttc', 56)
        font_subtitle = ImageFont.truetype('msyh.ttc', 26)
        font_badge = ImageFont.truetype('msyh.ttc', 20)
    except:
        font_title = ImageFont.load_default()
        font_subtitle = ImageFont.load_default()
        font_badge = ImageFont.load_default()

    # Badge: [ 第三方服务指引 · 跨境连接与隐私防护 ]
    draw.rounded_rectangle([(80, 120), (520, 166)], radius=8, fill=(243, 232, 255), outline=(233, 213, 255))
    draw.text((100, 130), '第三方服务指引 · 跨境连接导航', fill=(126, 34, 206), font=font_badge)

    # Brand Title: 隐形人 INVISIBLE
    draw.text((80, 200), '隐形人 网络指引', fill=(30, 27, 75), font=font_title)
    draw.text((80, 290), '安全、低调、敏捷的跨境连接方案', fill=(126, 34, 206), font=font_subtitle)
    draw.text((80, 340), '专为出海团队与跨境开发者打造的选型与配置参考', fill=(100, 116, 139), font=font_subtitle)

    # Bottom Tag: yinxingren.blog
    draw.text((80, 520), 'yinxingren.blog · 客观中立第三方指南', fill=(147, 51, 234), font=font_badge)

    # Right content: White Card with Logo
    card_w, card_h = 440, 440
    card = Image.new('RGB', (card_w, card_h), (255, 255, 255))
    card_draw = ImageDraw.Draw(card)
    card_draw.rectangle([(0, 0), (card_w - 1, card_h - 1)], outline=(233, 213, 255), width=2)

    logo_h = int(390 * logo_clean.height / logo_clean.width)
    logo_resized = logo_clean.resize((390, logo_h), Image.Resampling.LANCZOS)
    card.paste(logo_resized, ((card_w - 390) // 2, (card_h - logo_h) // 2))

    og.paste(card, (680, 95))
    og.save(os.path.join(img_dir, 'og-share.png'))
    print('[OK] Created og-share.png (1200x630)')

if __name__ == '__main__':
    generate_all()
