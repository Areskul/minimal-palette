# palette

**A very small css utility to generate color themes**

It is nothing more than a set of css variables accessible everywhere in your code.
Can be used with all modern js frameworks like Vue.js

## Why this tool?

I was getting tired of changing every color class evrey time i was switching from a CSS framework to another.
Not much work you would say.

Bulma: .is-pimary
TailwindCSS, Bootstrap: .bg-primary

But every config file is different though well documented.

So I made a unique utility to set up color sheme.

## How it works

It injectes variables in the :root pseudo-class.
Define your set of colors ans it will simply create a panel of color tons.

```scss
:root{
--primary-lighten, --primary-lighten2
}
```

## How to use

Use your variables in pure css within your classes

```scss
.btn{
background: var(--primary-lighten2)
}
```
Or use it like me, in Vue.js
With some small mixins inspired by Vuetify.js
Get theme [here](https://github.com/Areskul/mixins#Mixins)

```html
<div color="primary-lighten" text="danger-darken3"/>
```

## Set up/ Customize your themes

Let's say you've made a variable.css file like below
Import palette.scss functions in your variable.scss

variable.css
```scss
@use "../core/palette/palette.scss" as palette;

// Color base for light theme
$name: "light";
$colors: (
  "fg": #eeeeee,
  "bg": #ffffff,
  "primary": #ca5b89,
  "secondary": #fa709a,
  "ternary": #000000,
  "success": #7ccc13,
  "info": #18d1ff,
  "warning": #fee140,
  "danger": #cf0000,
);
@include palette.generate-theme($name, $colors);

// Color base for dark theme
$name: "dark";
$colors: (
  "fg": #1f1e1e,
  "bg": #161313,
  "primary": #5e6fce,
  "secondary": #5e09cc,
  "ternary": #ffffff,
  "success": #35b91a,
  "info": #37c1eb,
  "warning": #da9a11,
  "danger": #ec0b0b,
);
@include palette.generate-theme($name, $colors);
```

## Use it in your project


And finally include it in your main.ts / or main.js

main.ts
```javascript
import "@/scss/variable.scss"
```
or
```javascript
import "./scss/variable.scss"
```

With the mixins (more helpers than mixins) that comes with

main.ts
```javascript
import { color } from "core/mixins/styles";
export default {
  mixins: [color],
};
```
