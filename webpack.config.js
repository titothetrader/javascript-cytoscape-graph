const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Graphy - VJS',
            template: './src/index.html',
            filename: 'index.html',
            publicPath: '/'
        })
    ],
    "mode": "development",
    "entry": [
                "/src/index.js", 
              ],
    "output": {
        "path": __dirname + '/dist',
        "filename": "bundle.js"
    },
    devServer: {
        static: path.join(__dirname, 'dist')
    },
    "module": {
        "rules": [
            {
                "test": /\.css$/,
                "use": [ "style-loader",
                         "css-loader" ]
            },
            {
                "test": /\.html$/,
                "use": [{
                    "loader": "html-loader"
                }]
            },
            {
                "test": /\.js$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": [ '@babel/preset-env', ]}
                }
            },
            {
                "test": /\.(png|jp?eg|gif|svg|jpeg|ico)$/i,
                "loader": "file-loader",
                "options": {
                    publicPath: "assets",
                }
            },
        ]
    }
};