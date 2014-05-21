/**
 * Widget module for mobile
 */
define(['jquery'], function ($) {

  $('.widget').text('Hello mobile!');

  return {
    myMethod: function () {
      alert('Mobile method');
    }
  };

});
