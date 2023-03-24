const HtmlWebpackPlugin = require('html-webpack-plugin');
const {resolve} = require('path'); // module pour créer un chemin au lieu du __dirname

// console.log(
//     process.env.test
// )
//cmd => test=salut node webpack.config.js

module.exports = {
    mode: process.env.NODE_ENV,
    //mode: 'production',
    entry: resolve('src', 'index.ts'),
    //entry: __dirname + '/src/index.ts',
    output: {
        path: resolve('dist'),
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
            {
                test: /.ts$/i,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test: /.scss/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve('src', 'index.html')
        }),
    ],
    resolve: {
        extensions: ['.js', '.ts']
    },
    devServer: {
        port: 4000,
        open: true,
        liveReload: true,
        hot: false,
    }
};
