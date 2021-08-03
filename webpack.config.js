const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/'
    },
    devServer: {
        port: 8081,
        host: '0.0.0.0',
        historyApiFallback: true,
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                    presets: ['@babel/preset-react'],
                    plugins: [
                      '@babel/plugin-proposal-object-rest-spread',
                      [
                        '@babel/plugin-proposal-class-properties',
                        {
                          'loose': true
                        }
                      ]
                    ]
                }
            }
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader',
            ],
          },
        ],
      },
      resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
