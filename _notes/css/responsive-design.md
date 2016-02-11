# Responsive design ~ Mobile best practices
- The goal: to make our website look great no matter which device we are on.
- Some CSS tricks (max-width, @media, etc)
- Make our content adapt gracefully to different screen widths
- Avoid these:
  + Flash-only page
  + PDF-only document
  + auto-playing music

==

## Need special stylesheet for vertically-oriented phones
- Many smartphones, when horizontally-oriented, are more than 700px wide. So are al most all tablets, regardless of orientattion. So, the only screen we'll need to set up a special stylesheet for are vertically-oriented phones.

==

## margin: 0 auto;
- Aligns an element center

==

## max-width
- Use max-width instead of width
- When the screen size is smaller than the specified value, the content get reorganized to adjust the device size.
```css
article {
  max-width: 500px;
  padding: 20px;
  margin: 0 auto;
}
```

==

## image size
- Use `background-size: cover;` instead of `background-size: 100%`;
- Do NOT assign images a specific width and height with CSS, unless necessary

### cover vs 100%
- With background-size set to 100%, When the screen size is less than the width of the image, the height becomes less than the original value.

==

## media query
- Allows us to set CSS styles that only activate when the browser is a certain width
- Some things to consider:
  + Page header (font-size, margin, line-height etc)
```css
@media (max-width: 500px) {
  body {
    background: red;
  }
}
```

```css
@media (max-width: 500px) {
  h1 {
    font-size: 36px;
  }
  li {
    display: block;
    padding: 5px;
  }
}
```

==

## Bootstrap breakpoints
- https://scotch.io/bar-talk/whats-new-in-bootstrap-4
- [Default Sizes for Twitter Bootstrap’s Media Queries](https://scotch.io/quick-tips/default-sizes-for-twitter-bootstraps-media-queries)

```scss
$grid-breakpoints: (
  // Extra small screen / phone
  xs: 0,
  // Small screen / phone
  sm: 34em,
  // Medium screen / tablet
  md: 48em,
  // Large screen / desktop
  lg: 62em,
  // Extra large screen / wide desktop
  xl: 75em
) !default;
```

```css
    /*==========  Mobile First Method  ==========*/

    /* Custom, iPhone Retina */ 
    @media only screen and (min-width : 320px) {
        
    }

    /* Extra Small Devices, Phones */ 
    @media only screen and (min-width : 480px) {

    }

    /* Small Devices, Tablets */
    @media only screen and (min-width : 768px) {

    }

    /* Medium Devices, Desktops */
    @media only screen and (min-width : 992px) {

    }

    /* Large Devices, Wide Screens */
    @media only screen and (min-width : 1200px) {

    }

    /*==========  Non-Mobile First Method  ==========*/

    /* Large Devices, Wide Screens */
    @media only screen and (max-width : 1200px) {

    }

    /* Medium Devices, Desktops */
    @media only screen and (max-width : 992px) {

    }

    /* Small Devices, Tablets */
    @media only screen and (max-width : 768px) {

    }

    /* Extra Small Devices, Phones */ 
    @media only screen and (max-width : 480px) {

    }

    /* Custom, iPhone Retina */ 
    @media only screen and (max-width : 320px) {
        
    }
```

==

## Extra whitespace for readability
- At smaller sizes, whitespace increases readability

==

## Giving columns margins
1. Place all the column items inside a row
2. Each column has both left and right margins
3. Since first and last children need not a outside margin, negate the unnecessay margins by applying negative margin to  of the first and last children

```css
/* This removes unnecessary margin of first and last columns */
.three-columns {
  margin: 0 -1%;
}

/* 31.33 + 1 + 1 ==> 33.33% */
.three-columns figure {
  width: 31.33%;
  float: left;
  margin: 10px 1% 10px 1%;
}
```

==

## [Margin collapsing](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
- Top and bottom margins of blocks are sometimes combined (collapsed) into a single margin whose size is the largest of the margins combined into it, a behavior known as margin collapsing.

### Solution
- Give each row the `overflow` property

```css
.row {
  display: block;
  clear: both;
  margin-bottom: 40px;
  overflow: hidden;    /* This is to prevent the margin collapsing */
}
```

== 

## Flex-box model

- [flex - CSS | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
- [A Complete Guide to Flexbox | CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [脱Bootstrapガイド 〜フルスクラッチCSS〜 - Qiita](http://qiita.com/hashrock/items/5c18bf5086f52e4122e5)
