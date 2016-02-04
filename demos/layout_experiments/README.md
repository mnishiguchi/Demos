# Layout experiments

## Floating gotcha
- Going out of the flow of the document, DOM does not understand it.
- Floating element is like a ghost, subsequent elements will occupy the same space.

### Solution
- `clear: left;`

```css
    #footer {
      clear: left;
    }
```

==

## Percentage width gotcha
- Padding and border-width are added to the percentage width.

### Solution
- `box-sizing: border-box;`
- The percentage width will include padding and border.
- NOTE: Margin is NOT indluded.

```css
    /* Put this at the beginning of the CSS */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
```

==

## Pixel width gotcha
- There will be a weird gaps on both sides unless we calculate all the dimensions precisely.

### Solution
- 'margin: 0 auto;'

```css
    .wrapper {
      width: 960px;
      margin: 0 auto;
    }
```

==


