const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                //要使用多个loader
                use:['style-loader','css-loader']
            },
            {
                //处理不了html中的img图片
                //处理图片资源
                test:/\.(jpg|png|gif)$/,
                //使用一个loader
                //下载url-loader file-loader
                loader: 'url-loader',
                options:{
                    //图片大小小于8kb，就会被base64处理
                    //优点：减小请求数量（减轻服务器压力）
                    //缺点：图片体积会更大（文件请求速度更慢）
                    limit:8 * 1024
                }
            },
            {
                test:/\.html$/,
                //处理html文件中的img图片（负责引入img，从而能被ur-loader处理）
                loader: 'html-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    mode: 'development'
};