/**
 * Main module
 */
define(function() {

  var isMobile = window.matchMedia('(max-width: 767px)').matches;

  require([isMobile ? 'app/mobile-widget' : 'app/widget']);

  // TODO: (5) call widget.myMethod()

});
