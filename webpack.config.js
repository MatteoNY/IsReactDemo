///////////////////////////////////////////////////////////////////////////////////////////////////
//  WebPack 
///////////////////////////////////////////////////////////////////////////////////////////////////

const resolve = require('path').resolve;
const webpack = require('webpack');

module.exports = {
    entry: './src/app.jsx',
    output: {
        path: resolve(__dirname, './src'),
        filename: 'bundle.js',
        publicPath: './'
    },
    resolve: {
        alias: {
            main: './app/components/main.jsx',
            nav: './nav.jsx',
            home: './app/pages/home.jsx',
            about: './app/pages/about.jsx',
            examples: './app/pages/examples.jsx',
            appform: './shared/app-form.jsx',
            services: './app/services/api.jsx'
        },

        extensions: [".js", ".jsx", ".js"]
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    watchOptions: {
        poll: true
    }
}