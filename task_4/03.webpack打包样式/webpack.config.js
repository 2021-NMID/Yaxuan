const { resolve } = require("path");

/*
webpack.config.js webpack的配置文件
作用：只是webpack干那些活（当你运行webpack指令时，回家在里面的配置）
所有构建工具都是基于node.js平台运行的模块化默认采用commonjs*/ 
module.exports={
    //webpack配置
    //入口起点
    entry:'./src/index.js',
    //输出
    output:{
        //输出文件名
        filename: 'built.js',
        //输出陆金
        //_dirname nodejs的变量，代表当前稳健的目录绝对路劲
        path: resolve(__dirname, 'build')
    },
    //loader的配置
    module: {
        rules:[
            //不同文件需配置不同loader
            //详细的loader配置
            {
                //匹配那些文件
                test: /\.css$/,
                //使用那些loader进行处理
                use: [
                    //use数组中loader执行顺序：从右到左从下到上，依次执行
                    //创建style标签，将js中德阳市资源插入进行，添加到head中生效
                    'style-loader',
                    //将css文件变成commonjs模块加载js中，里面内容是样式字符串
                'css-loader'
                ]
            }
        ]
    },
    //plugins的配置
    plugins: [
        //详细plugins的配置
    ],
    //模式
    mode: 'development',//开发模式
    //mode: 'production'
}