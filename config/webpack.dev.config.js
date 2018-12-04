const path = require('path');

module.exports = {

    mode: 'development',

    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, '../App.js')
    ],

    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader?cacheDirectory=true']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        historyApiFallback: true,
        host: '0.0.0.0'
    }
}