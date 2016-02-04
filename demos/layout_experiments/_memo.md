# Memo

## Floating gotcha
- Out of the flow of the document -> DOM does not understand it.
- Floating element is like a ghost, other subsequence elements will occupy the same space.

### Solution
- `clear: left;`

```css
    #footer {
      clear: left;
    }
```

==

## Percentage width gotcha
- Padding is added to the percentage.

### Solution
- `box-sizing: border-box;`

```css
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
```

==

## Pixel width gotcha
- There will be a weird gaps on both sides when not exact size.
- Never use pixels, use percentage instead.

### Solution
- 'margin: 0 auto;'

```css
    .wrapper {
      width: 960px;
      margin: 0 auto;
    }
```

==

## [Display resolution](https://en.wikipedia.org/wiki/Display_resolution)
- e.g., On old display with lower resolution, same image looks bigger.

==

## box-sizing: border-box
- Element includes padding
- NOTE: Margin is NOT indluded

