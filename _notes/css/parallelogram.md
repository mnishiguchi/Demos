# Parallelogram

- http://rachidmrad.com/
- [The Shapes of CSS | CSS-Tricks](https://css-tricks.com/examples/ShapesOfCSS/)
- http://codepen.io/brownerd/pen/vwfJA

```css
/*
  Parallelogram shape
  http://codepen.io/brownerd/pen/vwfJA
*/

.parallelogram {
  -webkit-transform: skew(20deg);
     -moz-transform: skew(20deg);
       -o-transform: skew(20deg);
}

.skew-fix{
  display: inline-block;
  transform: skew(-20deg);
}
```

```css
/*
  http://rachidmrad.com/
 */
.parallelogramRight {
  -webkit-transform: skew(-30deg, 0);
      -ms-transform: skewX(-30deg) skewY(0);
          transform: skew(-30deg, 0);
}
.parallelogramRight .skewAdjuster {
  -webkit-transform: skew(30deg, 0);
      -ms-transform: skewX(30deg) skewY(0);
          transform: skew(30deg, 0);
}
```
