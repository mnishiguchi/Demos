# Background

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

## Dynamically setting a background URL
```js
<div ng-style="{ 'background-image': 'url({{ item.imgSrc }})' }">
  some contents...
</div>
```
