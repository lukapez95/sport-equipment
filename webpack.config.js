var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        app: './public/js/app.js',
        vendor: ['angular']
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader'
            }
        ]
    },
    watch: true,
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
    ]
};