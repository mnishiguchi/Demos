# Truncating text

## Dealing with overflowing text

### Using Angular
- Suitable for multiple lines

```
{{ longString | limitTo: 20 }} {{ longString.length < 20 ? '' : '...' }}
```


### Using CSS text-overflow property
- Suitable for a single line

```
figure h4 {
  overflow: hidden;
  text-overflow: ellipsis;
}
```
