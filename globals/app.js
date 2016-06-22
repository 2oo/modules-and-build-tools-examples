var APP = APP || {};

var Math = APP.Math,
    add = Math.add,
    multiply = Math.multiply;

$('#result').html(multiply(add(1, 2), add(3, 4)));
