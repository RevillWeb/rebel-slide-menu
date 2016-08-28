Rebel Slide Menu
==============

A simple vanilla web component to provide an easy to use slide-in menu.

- [Demo](http://revillweb.github.io/rebel-slide-menu/)

Polyfills
=====

To get this web component working in all major browser make sure you include the [skatejs-web-components.js](https://github.com/skatejs/web-components) polyfill before including this web component.

Usage
=====

There are two ways you can make use of this web component. You can use it as part of a bigger ES2015 project as ES2015 source, or you can include a compiled ES5 version.

ES5
---

You can simple included the compiled version into your project and make use of the custom element `rbl-repeater`.

```javascript
    <script src="dist/rebel-slide-menu.js"></script>
    <rebel-slide-menu id="menu">
        <span slot="title">Navigation</span>
        <ul slot="content" class="default">
            <li><a href="#">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#contact">CONTACT</a></li>
            <li><a href="#tcs">T & Cs</a></li>
        </ul>
    </rebel-slide-menu>
```

ES2015
------

For ES2015 projects you can install this component directly into your project using [npm](https://www.npmjs.com/).

`npm install rebel-slide-menu`

Then you can include it into your ES2015 project as you would any other module:

````javascript
import * as RebelProgressBar from 'node_modules/rebel-slide-menu/src/rebel-slide-menu';
````

**Note**: *`rebel-slide-menu.js` doesn't actually export anything but an import is required to have the custom element registered on the document.*

Contributing
============

Please submit any suggestions or changes via a pull request.