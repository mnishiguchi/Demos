# The fadeIn keyframe animation

```css
/*
  Defines keyframes
  - name        : fadeIn
  - start state : { opacity: 0; }
  - end state   : { opacity: 1; }
*/
@-webkit-keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
   @-moz-keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

.fade_in {
  /* Make elements invisible upon start */
  opacity:0;  

  /* Call our keyframe named fadeIn, use animattion ease-in and repeat it only 1 time */
  -webkit-animation: fadeIn ease-in 1;  
     -moz-animation: fadeIn ease-in 1;
          animation: fadeIn ease-in 1;

  /* This makes sure that after animation is done, we remain at the last keyframe value (opacity: 1)*/
  -webkit-animation-fill-mode: forwards;  
     -moz-animation-fill-mode: forwards;
          animation-fill-mode: forwards;

  -webkit-animation-duration: 1s;
     -moz-animation-duration: 1s;
          animation-duration: 1s;
}

.fade_in._1 {
  -webkit-animation-delay: .2s;
     -moz-animation-delay: .2s;
          animation-delay: .2s;
}
.fade_in._2 {
  -webkit-animation-delay: .4s;
     -moz-animation-delay: .4s;
          animation-delay: .4s;
}
.fade_in._3 {
  -webkit-animation-delay: .6s;
     -moz-animation-delay: .6s;
          animation-delay: .6s;
}
.fade_in._4 {
  -webkit-animation-delay: .8s;
     -moz-animation-delay: .8s;
          animation-delay: .8s;
}
.fade_in._5 {
  -webkit-animation-delay: 1.0s;
     -moz-animation-delay: 1.0s;
          animation-delay: 1.0s;
}
.fade_in._6 {
  -webkit-animation-delay: 1.2s;
     -moz-animation-delay: 1.2s;
          animation-delay: 1.2s;
}
.fade_in._7 {
  -webkit-animation-delay: 1.4s;
     -moz-animation-delay: 1.4s;
          animation-delay: 1.4s;
}
.fade_in._8 {
  -webkit-animation-delay: 1.6s;
     -moz-animation-delay: 1.6s;
          animation-delay: 1.6s;
}
.fade_in._9 {
  -webkit-animation-delay: 1.8s;
     -moz-animation-delay: 1.8s;
          animation-delay: 1.8s;
}
```

```html
    <h1 class="display-1">
      <span class="fade_in _1">M</span>
      <span class="fade_in _2">a</span>
      <span class="fade_in _3">s</span>
      <span class="fade_in _4">a</span>
      <span class="fade_in _5">t</span>
      <span class="fade_in _6">o</span>
      <span class="fade_in _7">s</span>
      <span class="fade_in _8">h</span>
      <span class="fade_in _9">i</span>
    </h1>
```
