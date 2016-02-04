# Navbar

## Simple navbar

```css
    header {
      text-align: center;
    }

    /* By default our browser gives the list some padding on the left
    to make room for the bullet points, which causes the links to be off-center. */
    ul {
      padding: 10px;
    }

    /* Make the links all line up next to each other in a row */
    li {
      display: inline;
      padding: 0 10px;
    }
```

===

## Navbar logo - absolute positioning

**advantages**
- Can control the position precisely.

**disadvantages**
- When it may go overlapping on other elements when displayed on the smaller screen.

```html
<nav
  class="navbar navbar-light bg-faded top-navbar" >

  <a
    href="https://github.com/mnishiguchi"
    class="navbar-brand">
  </a>

  <ul class="nav navbar-nav">
    <li class="nav-item">
      <a
        class="logo"
        href="#">
        Masatoshi Nishiguchi
      </a>
    </li>
  </ul>
```

```css
.navbar {
  padding: 18px 10px 10px 10px;
  position: relative;
}

.logo {
  position: absolute;
  bottom: 5px;
  ...
```

## Divider

```css
.divider{
  margin: 0 8px 0 8px;
}

.divider:before {
  content: "|";
}
```

==

## Fixing the navbar at the top
1. Take advantage of Bootstrap's navbar-fixed-top class
2. Adjust the margin-top property for the navbar and subsequent content

```html
<nav class="top_navbar navbar-fixed-top" role="navigation">
```

```css
.top_navbar {
  margin-top: 10px;
}

.page {
  margin-top: 120px;
}
```

==

## Hamburger

```html
        <!-- Hamburger button -->
        <div class="navbar-brand toggler-wrapper">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsed-content">
            &#9776;
          </button>
        </div>
```

