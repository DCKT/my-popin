var Popin = require('../lib/popin.es6.js');

document.addEventListener('DOMContentLoaded', function() {
  var div = 'Toto';

  var popin = new Popin({
    triggerElements:'.test',
    closeHTML: 'X',
    content: div
  });
}, false);