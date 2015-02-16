define('underscore-src', 'js/libs/underscore.js');
define('zepto-src', 'js/libs/zepto-1.1.6.js');
define('backbone-src', ['zepto-src', 'underscore-src'], 'js/libs/backbone.js');

require(['backbone-src'], function(io) {
  //hack Zepto trigger function to trigger events exactly we want.
  var trigger = Zepto.fn.trigger;
  Zepto.fn.trigger = function(type, data) {
    var globalEvents = ['login', 'logout'];
    if (this[0] === document) {
      if (globalEvents.indexOf(type) !== -1) {
        trigger.apply(this, arguments);
      }
    } else {
      trigger.apply(this, arguments);
    }
  };
});