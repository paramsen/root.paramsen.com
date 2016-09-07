var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'app.bundle.js',
        publicPath: '/' //used to generate public paths to images & stuff
    },
    plugins: [ //plugins (can) work on the entire bundle, in contrast to loaders (difference not clear imho)
            new webpack.HotModuleReplacementPlugin(),
            new webpack.optimize.OccurenceOrderPlugin(),
            new ExtractTextPlugin("app.bundle.css", {
                allChunks: true
            })

            /*,
            new webpack.optimize.UglifyJsPlugin()*/

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
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: './src',
        port: '1337',
        host: '0.0.0.0',
        historyApiFallback: true,
        proxy: {
            '/api/*': {
                'target': {
                    'host': 'localhost',
                    'protocol': 'http:',
                    'port': 8080
                },
                safe: false,
                changeOrigin: false
            }
        }
    }
}
