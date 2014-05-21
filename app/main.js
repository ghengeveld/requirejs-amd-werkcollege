/**
 * Main module
 */
define(function() {

  var isMobile = window.matchMedia('(max-width: 767px)').matches;

  require([isMobile ? 'app/mobile-widget' : 'app/widget'], function (widget) {
    widget.myMethod();
  });

});
