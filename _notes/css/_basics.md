# Stylesheet basics

- http://css3clickchart.com/#box-sizing
- Note: Enter the style names in alphabetical order so that we can make our stylesheets easier to manage

## よく忘れるCSSの小技
- http://qiita.com/matsui-a/items/9de76659429593ed7a88#css-clear-fix

==

## CSS reset code
- http://cssreset.com/
- e.g., Normalize.css
- makes the browsers render all elements more consistently and in line with modern standards
- The page will look the same no matter what browser you use
- Good idea to include this file in all our web projects

==

## Good practice to add @charset at the beginning of CSS
- The @charset CSS at-rule specifies the character encoding used in the style sheet.
- https://developer.mozilla.org/en-US/docs/Web/CSS/@charset

```css
/* Set the encoding of the style sheet to Unicode UTF-8 */
@charset "UTF-8";  

/* Set the encoding of the style sheet to Latin-9 (Western European languages, with euro sign) */
@charset 'iso-8859-15'; 
```

==

## Defining a styling rule

### User-defined styles

- Modifies the default setting of the browser's internal stylesheet

### External stylesheets

- Stored in an external stylesheet
- Loaded after internal and user-defined stylesheets
- Take precedence over any rules set in the browser's internal stylesheet or in a user-defined stylesheet

```html
<link href="nishiguchi_styles.css" rel="stylesheet" type="text/css" />
```

### Embedded stylesheets

- Inserted directly within the head element of the HTML document, using the style element
- Applied only in the web page in which it is placed
- Note: Always place embedded stylesheets  after external stylesheets to avoid confusion about which stylesheet is loaded last

```html
<style type="text/css">
     h1 {
        text-align: center;
     }
     p {
        color: pink;
        font-size: 50px;
     }
</style>
```

### Inline styles

- Applied directly to specific elements, using the style element
- Not recommended
```html
 <h4 style="color: green; text-align: center;">Course Outline</h4>
```

### Importing style rules from other style sheets
- https://developer.mozilla.org/en-US/docs/Web/CSS/@import

```css
/* Import layout style sheet */
@import url(cw_layout.css);
```

==

## Precedence
- The stylesheet that is loaded last has precedence over stylesheets loaded earlier

### the order in which styesheets are interpreted
[ACCESSED LAST]

1. author's inline styles
2. author's embedded stylesheet
3. author's external stylesheet
4. user-defined styles
5. browser's nternal stylesheet

[ACCESSED FIRST]

==

## Progressive enhancement
- Placing code conforming to older standards before newer properties
- E.g., Older browsers that do not support CSS3 will ignore the RGBA

==

## Style inheritance
- passed from a parent element to its children
- not all properties are inherited
- The summary of every CSS property definition says whether that property is inherited by default ("Inherited: Yes") or not inherited by default ("Inherited: no"). This controls what happens when no value is specified for a property on an element.

- https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance
- http://www.w3schools.com/cssref/css_inherit.asp
- [css-properties-are-inherited](http://stackoverflow.com/questions/5612302/which-css-properties-are-inherited)

==

## Creating a link to #id_name

```html
<!--Define an element id-->
<body>
   <header id="top">
      ...
   </header>
</body>

<!--Create a link to an #id_name-->
<a href="index.htm#top">Back to top of the page</a>
```

==

## Vendor_Prefix
- https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix

==
