var webpack = require('webpack');

module.exports = {
    entry: './app.js',
    output: {
        path: './dist',
        filename: 'app.min.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};
