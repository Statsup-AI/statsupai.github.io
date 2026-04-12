# Sponsors Section Updates

## Overview
Added a styled "Sponsors" section with four tiers, each featuring a laurel wreath background image and descending placeholder sizes for sponsor logos.

## Section Heading
- "Sponsors" title changed to black (`text-gray-950`) and centered
- A short black underline bar (`w-16 h-1 bg-gray-950`) added below the title as a section divider

## Tier Structure

| Tier     | Wreath Image       | Text Color | Placeholder Size |
|----------|-------------------|------------|-----------------|
| Platinum | `image/pl.png`    | `#7B96A8`  | 280 × 120px     |
| Gold     | `image/gold.png`  | `#C9B06B`  | 240 × 100px     |
| Silver   | `image/sliver.png`| `#8E8E8E`  | 200 × 80px      |
| Regular  | `image/bronze.png`| `#7A6B3A`  | 160 × 64px      |

## Files Modified

### `index.html`
- Each tier heading is wrapped in a `<div class="sponsor-tier-heading">` with the wreath image as background
- Tier text is centered inside the wreath
- Sponsor logos area uses tier-specific classes: `sponsor-platinum`, `sponsor-gold`, `sponsor-silver`, `sponsor-regular`
- Currently uses dashed placeholder boxes (`<div class="sponsor-placeholder">Logo here</div>`)

### `styles.css`
- `.sponsor-tier-heading` — centers the tier label inside the wreath image (220×120px desktop, 160×90px mobile)
- `.sponsor-placeholder` — dashed border placeholder boxes with descending sizes per tier
- `.sponsor-{tier} img` — controls logo image height per tier (Platinum 256px → Gold 192px → Silver 144px → Regular 112px)

## How to Add a Sponsor Logo

Replace a placeholder div:
```html
<!-- Before -->
<div class="sponsor-placeholder">Logo here</div>

<!-- After -->
<a href="https://sponsor-url.com" target="_blank" class="block p-3 rounded-xl border border-gray-100 hover:shadow-md transition bg-white">
    <img src="image/sponsor-logo.png" alt="Sponsor Name">
</a>
```

The logo image will automatically resize based on its tier (controlled by CSS).

## Images Required in `image/` Folder
- `pl.png` — Platinum wreath (steel blue)
- `gold.png` — Gold wreath
- `sliver.png` — Silver wreath (gray)
- `bronze.png` — Regular/Bronze wreath (dark gold)
