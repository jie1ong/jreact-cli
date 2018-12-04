const path = require('path');

module.exports = {

    mode: 'development',

    entry: path.join(__dirname, '../App.js'),

    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: '/\.js$/',
                use: ['babel-loader?cacheDirectory=true']
            }
        ]
    }
}