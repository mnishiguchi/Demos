# Removing default blue border

- http://stackoverflow.com/a/28196392/3837223
```css
/* Removes default blue border */
.btn:focus,.btn:active:focus,.btn.active:focus,
.btn.focus,.btn:active.focus,.btn.active.focus {
    outline: none;
}
```
