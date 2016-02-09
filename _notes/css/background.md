# Background

## CSS background
- http://www.w3schools.com/css/css_background.asp
- https://developer.mozilla.org/en-US/docs/Web/CSS/background
- https://css-tricks.com/almanac/properties/b/background/

## Preparation
- Ensure that html and body are 100% height so that they can accommodate a backgrond image.

```css
html, body {
    position: relative;
    height: 100%;
}
```


## Creating a texture
1. Create the smallest possible file using Adode Illustrator etc
2. Set it on the background-image CSS property
- Note: By default, the file is repeated on the entire available space.

```css
body {
    background-image: url("my_tile.jpg");
}
```


## Setting an image on the background
```css
body {
  background: url("http://dash.ga.co/assets/anna-bg.png");
  background-size: cover;
  background-position: center;
}
```

### background-size: cover;
- Stretches the image out to the full screen width.
- Prevents the image from repeating to fill the width of the screen

### margin: 0 auto;
- Put the image in the center of the screen

==

## Shorthand notation

```css
body {
  background:
     url(my_texture.jpg)      /* image */
     top center / 200px 200px /* position / size */
     no-repeat                /* repeat */
     fixed                    /* attachment */
     padding-box              /* origin */
     content-box              /* clip */
     red;                     /* color */
}
```

==

## Dynamically setting a background URL
```js
<div ng-style="{ 'background-image': 'url({{ item.imgSrc }})' }">
  some contents...
</div>
```
