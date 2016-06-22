requirejs.config({
    baseUrl: '.',
    paths: {
        jquery: 'node_modules/jquery/dist/jquery'
    }
});

require(['math/add', 'math/multiply', 'jquery'], function (add, multiply, $) {
    $('#result').html(multiply(add(1, 2), add(3, 4)));
});
