var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'app.bundle.js',
        publicPath: '/' //used to generate public paths to images & stuff
    },
    plugins: [ //plugins (can) work on the entire bundle, in contrast to loaders (difference not clear imho)
            new webpack.optimize.OccurenceOrderPlugin(),
            new ExtractTextPlugin("app.bundle.css", {
                allChunks: true
            }),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin(),
            new webpack.optimize.AggressiveMergingPlugin()
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
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }
        ]
    }
}
