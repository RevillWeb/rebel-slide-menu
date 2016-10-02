Rebel Slide Menu
==============

A simple vanilla web component to provide an easy to use slide-in menu.

- [Demo](http://revillweb.github.io/rebel-slide-menu/)

<div align="center">
    <img src="http://imageshack.com/a/img923/4575/FMeykO.gif" width="225" height="456" />
</div>

Polyfills
=====

To get this web component working in all major browser make sure you include the [skatejs-web-components.js](https://github.com/skatejs/web-components) polyfill before including this web component.

Usage
=====

There are two ways you can make use of this web component. You can use it as part of a bigger ES2015 project as ES2015 source, or you can include a transpiled ES5 version.

ES5
---

You can simple included the compiled version into your project and make use of the custom element `rbl-repeater`.

```html
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

```javascript
import * as RebelSlideMenu from 'node_modules/rebel-slide-menu/src/rebel-slide-menu';
````

**Note**: *`rebel-slide-menu.js` doesn't actually export anything but an import is required to have the custom element registered.*

API
====

##`<rebel-slide-menu></rebel-slide-menu>`

This is the only element part of the rebel-slide-menu and is used to include the menu on the page.

###Attributes

Currently this custom element does use any attributes.

###Methods

####`open()`

This method is called to open the slide-in menu.

#####Arguments

This method currently doesn't have any arguments.

#####Returns

`undefined`

#####Example

```javascript
var $slideMenu = document.querySelector("rebel-slide-menu");
$slideMenu.open();
```

####`close()`

This method is used to close the slide-in menu.

#####Arguments

This method currently doesn't have any arguments.

#####Returns

`undefined`

#####Example

```javascript
var $slideMenu = document.querySelector("rebel-slide-menu");
$slideMenu.close();
```

####`isOpen()`

This method is used to determine if the menu is already open.

#####Arguments

This method currently doesn't have any arguments.

#####Returns

Boolean: `true|false`

#####Example

```javascript
var $slideMenu = document.querySelector("rebel-slide-menu");
if ($slideMenu.isOpen()) {
    $slideMenu.close();
} else {   
    $slideMenu.open();
}
```

####`toggle()`

This method is used to toggle the menu open or cosed.

#####Arguments

This method currently doesn't have any arguments.

#####Returns

`undefined`

#####Example

```javascript
var $slideMenu = document.querySelector("rebel-slide-menu");   
$slideMenu.toggle();
```

Styling
=======

You can style the content you provide to the slots the same way you would style any other HTML content.

```css
rebel-slide-menu ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
rebel-slide-menu ul li a {
    color: #333;
    text-decoration: none;
    display: block;
    line-height: 80px;
    padding: 0 20px;
    border-bottom: solid 1px rgba(204, 204, 204, 0.25);
    transition: color 300ms ease;
}
rebel-slide-menu ul li a:visited {
    color: inherit;
}
rebel-slide-menu ul li a:hover {
    color: #253b7f;
}
```

For the component mark-up within the Shadow DOM this component makes use of CSS variables making it really easy for you to style the Shadow DOM contents.

##Font (`--font-family`)

To change the font-family simply specify the `--font-family` CSS custom property.
 
```css
rebel-slide-men {
    --font-family: 'Open Sans', sans-serif;
}
```

##Header (`--header-bg-color` & `--header-color`)

To change the style of the header you can use the `--header-bg-color` & `--header-color` CSS custom properties.
 
```css
rebel-slide-men {
    --header-bg-color: #333;
    --header-color: #CCC;
}
```

Contributing
============

Please submit any suggestions or changes via a pull request.