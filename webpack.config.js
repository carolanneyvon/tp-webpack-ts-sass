var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: __dirname + '/src/index.ts',
    output: {
        path: __dirname + '/dist',
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
            {
                test: /.ts$/i,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html'
        })
    ],
    devServer: {
        port: 4000,
        open: true,
        liveReload: true,
    }
};
