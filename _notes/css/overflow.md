# overflow

## Dealing with overflowing text

### Using Angular
- Suitable for multiple lines

```
{{ longString | limitTo: 20 }} {{ longString.length < 20 ? '' : '...' }}
```


### Using CSS text-overflow property
- Suitable for a single line
- https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow
- This CSS property doesn't force an overflow to occur; to do so and make text-overflow to be applied, the author must apply some additional properties on the element, like setting overflow to hidden.

```
figure h4 {
  overflow: hidden;
  text-overflow: ellipsis;
}
```
