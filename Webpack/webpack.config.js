const path = require('path');
const glob = require('glob');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const PurifyCSSPlugin = require('purifycss-webpack');
const entry = require('./webpack_config/entry_webpack.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    mode:"development",
    //入口文件的配置项
    entry:entry,
    //出口文件的配置项
    output:{
        path:path.resolve(__dirname,'dist'),  //输出路径，必须用绝对路径
        filename:'[name].js',//输出文件名
        publicPath: 'http://localhost:8080/'  //输出端口
    },
    module:{
        rules:[
            {//引入CSS样式文件
                test:/\.css$/,
                // use:['style-loader','css-loader']//前后顺序不能错
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader",
                        options: {importLoaders: 1}
                    }, 'postcss-loader']
                })
            },
            {//引入图片
                test:/\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit:'5000',
                        outputPath:'images'
                    }
                }]
            },
            {//html图片打包
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader'
            },
            {//引入SASS
                test: /\.scss$/,
                //use: ["style-loader","css-loader","sass-loader"]
                use: ExtractTextPlugin.extract({
                    use: ["css-loader","sass-loader"],
                    fallback: "style-loader", 
                })
            },
            {//babel   ES6转成ES5
                test: /\.(jsx|js)$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["env","react"]
                    }
                }],
                exclude:/node_modules/  //对该文件夹下的文件不做处理
            }
        ]
    },
    plugins:[
        new HtmlPlugin({
            template:'./src/index.html',
            minify:{
                removeAttributeQuotes:false
            },
            hash:true,
            filename:'index.html',
            // title:'title1',
            chunks:['index']
        }),
        new ExtractTextPlugin("css/index.css"),
        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname, 'src/*.html')) //必须用绝对路径
        }),
        new webpack.ProvidePlugin({//把jquery配置到全局
            $: 'jquery'
        }),
        new CopyWebpackPlugin([{
            from:__dirname + '/src/public',
            to:'./public'
        }]),
        new webpack.BannerPlugin('私人成果，转载请标注出处！')
    ],
    devServer:{
        contentBase:'./dist',
        host:'localhost',
        port:'8080',
        //compress:true,
        open:true
    },
    watchOptions:{
        //检测修改时间，以毫秒为单位
        poll:1000,
        //防止重复保存而发生重复编译错误，这里设置1000毫秒是1秒内重复保存，不进行打包操作
        aggregateTimeout: 1000,
        //不监听的文件
        ignored:/node_modules/,
    }
}