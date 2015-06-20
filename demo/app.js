var Popin = require('../lib/popin.es6.js');

document.addEventListener('DOMContentLoaded', function() {
  var popin = new Popin({
    triggerElements:'.test',
    closeHTML: 'X'
  });
}, false);