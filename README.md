# HeightApp

### This project shows how to force inner content of an Angular project to scroll

I also added a `sample-for-raw-html.html` file which shows the same thing without Angular

## `How to do`

The Key points to force content to scroll are:
- html height must be set to `100vh`
- children like body must have `height: 100%;`
- if an element like body contains two parts (fixed size and growing part), set `overflow: auto;` for growing part
- any element that comes inside that growing part must have `overflow: auto;`

## `In Angular`

- We also have to set `overflow: auto;` for the host elements (`components`).
- always wrap the `router-outlets` with a div and set `overflow: auto;` for that div.


## points to consider:
- `display: flex;` causes the elements to fit, and they won't grow

