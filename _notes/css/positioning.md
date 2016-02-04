# CSS Positioning
- https://developer.mozilla.org/en-US/docs/Web/CSS/position

## static (default)
- Normal behavior
- Laid out in its current position in the flow.
- The `top`, `right`, `bottom`, `left` and `z-index` properties DO NOT apply.

## relative
- Adjust the element's position, without changing layout.
- Moved from the original location.
- The space it would occupy normally, is preserved.
- Leave a gap for the element where it would have been had it not been positioned.

## absolute
- Positioned at a specified position relative to its closest positioned ancestor or to the containing block.
- If no ancestor elments are positioned, the absolute positioning
will be applied to the screen's viewport.
- The normal positioning flow no longer exists.
- DO NOT leave space for the element.
- Absolutely positioned boxes can have margins.
- Absolutely positioned boxes DO NOT collapse with any other margins.
- Usage: Positioning on top of other elements, animation;

## fixed
- Positioned at a specified position relative to the screen's viewport
- DO NOT leave space for the element.
- DO NOT move when scrolled
- iOS does not fully support this.
