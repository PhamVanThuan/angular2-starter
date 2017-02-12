var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        'app': __dirname + '/src/main.ts',
        'polyfills': [
            'core-js/es6',
            'core-js/es7',
            'zone.js/dist/zone'
        ]
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].[hash].js'
    },
    module: {
        loaders: [
            {test: /\.component.ts$/, loader: 'ts-loader!angular2-template-loader'},
            {test: /\.ts$/, exclude: /\.component.ts$/, loader: 'ts-loader'},
            {test: /\.html$/, loader: 'raw-loader'},
            {test: /\.css$/, loader: 'raw-loader'},
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['raw-loader', 'sass-loader'] // sass-loader not scss-loader
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.html', '.css']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'polyfills'
        }),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html'
        }),
        new webpack.DefinePlugin({
            app: {
                environment: JSON.stringify(process.env.APP_ENVIRONMENT || 'development')
            }
        }),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            __dirname
        )
    ]
}
