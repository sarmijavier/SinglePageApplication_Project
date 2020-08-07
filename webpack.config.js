const path = require('path') // a donde vamos acceder es decir las carpetas
const HtmlWebpackPlugin = require('html-webpack-plugin') // necesario para trabajar con HTLM

//módulo de coniguración
module.exports = {
    entry: './src/index.js', // punto de entrada
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    //extensiones
    resolve: {
        extensions: ['.js']
    },
    module: {
        //reglas -> aquí va babel
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    //plugins
    plugins: [
        new HtmlWebpackPlugin(
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html',
            }
        )
    ]
}
