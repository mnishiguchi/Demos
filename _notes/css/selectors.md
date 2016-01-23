# CSS Selectors
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors
[保存版！CSS3セレクタの説明書](http://weboook.blog22.fc2.com/blog-entry-287.html)

## Attribute selectors

- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)
- [w3schools](http://www.w3schools.com/css/css_attribute_selectors.asp)


```css
input[type="email"] {
    ...
}

input[placeholder="Your email"] {
    ...
}
```

==

## Contextual selectors / Combinators

- [CSS3 structural pseudo-class selector tester](http://lea.verou.me/demos/nth.html)
- [w3.org](http://www.w3.org/TR/CSS21/selector.html%23id-selectors)
- [w3schools.com](http://www.w3schools.com/cssref/css_selectors.asp)
- http://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048

### *
- Select **all elements** in the document
- aka wildcard selector

### e
- Select **any element e** in the document

### e1, e2, ...
- Select the **group** of elements e1, e2, ...

### e f
- **descendent selector**
- Select any element f that is a **descendent of** an element e

### e>f
- *child selector*
- Select any element f that is a **direct child of** an element e
- https://developer.mozilla.org/en-US/docs/Web/CSS/Child_selectors

### e+f
- **adjacent selector**
- Select any element f that is placed **immediately after** an element e

### e~f
- **sibling combinator**
- Select any element f that is a **sibling to** an element e
- similar to e+f, but less strict
