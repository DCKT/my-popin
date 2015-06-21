# my-popin

Create your own popin

## Setup

`var Popin = require('my-select');`

## Example

```js
// app.js
var Popin = require('my-select');

document.addEventListener('DOMContentLoaded', function() {

  var helloPopin = new Popin({
    triggerElements:'.test'
  });

}, false);
```
```html
<a href="#" class="test" data-target="popin-test">Test</a>

<div class="overlay"></div>
<div class="popin" id="popin-test">
  <span class="popin-close-button">Close X</span>
  Hello
</div>
```

Note: if you can't add the overlay in your HTML, it will be append automatiatly.


## Support

This module use classList (IE10+), if you have to support below this version use [this polyfill](https://github.com/eligrey/classList.js/).

