/**
 * Widget module
 */
define(['jquery'], function ($) {

  $('.widget').text('Hello world!');

  return {
    myMethod: function () {
      alert('Desktop method');
    }
  };

});
