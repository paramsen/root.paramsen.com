var webpack = require("webpack");
var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'app.bundle.js',
        publicPath: '/build/' //used to generate public paths to images & stuff
    },
    plugins: [ //plugins (can) work on the entire bundle, in contrast to loaders (difference not clear imho)
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [ //loaders transform EACH file, usable as pre or post processors
            {
                test: /\.js$/, //matcher
                loaders: ['babel'], //processor
                exclude: /node-modules/,
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.html$/,
                loaders: ['file'],
                include: path.join(__dirname, 'src')
            }
        ]
    }
}
