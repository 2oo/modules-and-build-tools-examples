var add = require('./math/add'),
    multiply = require('./math/multiply'),
    $ = require('jquery');

$('#result').html(multiply(add(1, 2), add(3, 4)));
