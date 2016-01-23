# Colors

### RGB triplet
- Describes 256^3(16.7million) possibe colors, which is a greater number of colors than the human eye can distinguish.
- The format
    + `#FFFF00`
    + `rgb(255, 255, 0)`
    + `rgb(100%, 65%, 0%)`

### HSL color values
- Describes colors based on hue, saturation and lightness
- [wikipedia](https://en.wikipedia.org/wiki/HSL_and_HSV)

#### Hue
- the tint of the color and is based on the color's **location on the color wheel**
- ranges 0..360 degrees, where { 0: red, 120: green, 240: blue }

#### Saturation:
- Measures the **intensity** of the color
- ranges 0..100%, where  where { 0%: no color, 100%: full color }

#### Lightness:
- Measures the **brightness** of the color
- ranges from 0..100%, where { 0%: black, 100%: whilte }

### Opacity values in CSS3
- Specified using either of the folllowing `rgba` and `hsla` color values
- Set the transparency of the color as a decimal
- Ranges from 0.0 up to 1.0, where { 0.0: completely transparent, 1.0: completely opaque }
