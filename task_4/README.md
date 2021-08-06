# nodejs

## NPM

NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：

- 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
- 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
- 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

由于新版的nodejs已经集成了npm，所以之前npm也一并安装好了。同样可以通过输入 **"npm -v"** 来测试是否成功安装。命令如下，出现版本提示表示安装成功:

```
$ npm -v
2.3.0
```

## 使用 npm 命令安装模块

npm 安装 Node.js 模块语法格式如下：

```
$ npm install <Module Name>
```

## 全局安装与本地安装

npm 的包安装分为本地安装（local）、全局安装（global）两种，从敲的命令行来看，差别只是有没有-g而已，比如

```
npm install express          # 本地安装
npm install express -g   # 全局安装
```

如果出现以下错误：

```
npm err! Error: connect ECONNREFUSED 127.0.0.1:8087 
```

解决办法为：

```
$ npm config set proxy null
```

### 本地安装

- \1. 将安装包放在 ./node_modules 下（运行 npm 命令时所在的目录），如果没有 node_modules 目录，会在当前执行 npm 命令的目录下生成 node_modules 目录。
- \2. 可以通过 require() 来引入本地安装的包。

### 全局安装

- \1. 将安装包放在 /usr/local 下或者你 node 的安装目录。
- \2. 可以直接在命令行里使用。

如果希望具备两者功能，则需要在两个地方安装它或使用 **npm link**。

### 查看安装信息

你可以使用以下命令来查看所有全局安装的模块：

```
$ npm list -g
```

如果要查看某个模块的版本号，可以使用命令如下：

```
$ npm list grunt
```

如果要查看某个模块的版本号，可以使用命令如下：

```
$ npm list grunt
```

# Node.js 回调函数

Node.js 异步编程的直接体现就是回调。

异步编程依托于回调来实现，但不能说使用了回调后程序就异步化了。

回调函数在完成任务后就会被调用，Node 使用了大量的回调函数，Node 所有 API 都支持回调函数。

例如，我们可以一边读取文件，一边执行其他命令，在文件读取完成后，我们将文件内容作为回调函数的参数返回。这样在执行代码时就没有阻塞或等待文件 I/O 操作。这就大大提高了 Node.js 的性能，可以处理大量的并发请求。

回调函数一般作为函数的最后一个参数出现：

```
function foo1(name, age, callback) { }
function foo2(value, callback1, callback2) { }
```

# Node.js 事件循环

Node.js 是单进程单线程应用程序，但是因为 V8 引擎提供的异步执行回调接口，通过这些接口可以处理大量的并发，所以性能非常高。

Node.js 几乎每一个 API 都是支持回调函数的。

Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现。

Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数.

## 事件驱动程序

Node.js 有多个内置的事件，我们可以通过引入 events 模块，并通过实例化 EventEmitter 类来绑定和监听事件

```
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
```

# Node.js EventEmitter

Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列。

Node.js 里面的许多对象都会分发事件：一个 net.Server 对象会在每次有新连接时触发一个事件， 一个 fs.readStream 对象会在文件被打开的时候触发一个事件。 所有这些产生事件的对象都是 events.EventEmitter 的实例。

------

## EventEmitter 类

events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就是事件触发与事件监听器功能的封装。

你可以通过require("events");来访问该模块。

```
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
```

EventEmitter 对象如果在实例化时发生错误，会触发 error 事件。当添加新的监听器时，newListener 事件会触发，当监听器被移除时，removeListener 事件被触发。

EventEmitter 提供了多个属性，如 **on** 和 **emit**。**on** 函数用于绑定事件函数，**emit** 属性用于触发一个事件。接下来我们来具体看下 EventEmitter 的属性介绍。

### 方法

| 序号 | 方法 & 描述                                                  |
| :--- | :----------------------------------------------------------- |
| 1    | **addListener(event, listener)** 为指定事件添加一个监听器到监听器数组的尾部。 |
| 2    | **on(event, listener)** 为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。`server.on('connection', function (stream) {  console.log('someone connected!'); });` |
| 3    | **once(event, listener)** 为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。`server.once('connection', function (stream) {  console.log('Ah, we have our first user!'); });` |
| 4    | **removeListener(event, listener)** 移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。它接受两个参数，第一个是事件名称，第二个是回调函数名称。`var callback = function(stream) {  console.log('someone connected!'); }; server.on('connection', callback); // ... server.removeListener('connection', callback);` |
| 5    | **removeAllListeners([event])** 移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。 |
| 6    | **setMaxListeners(n)** 默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 setMaxListeners 函数用于改变监听器的默认限制的数量。 |
| 7    | **listeners(event)** 返回指定事件的监听器数组。              |
| 8    | **emit(event, [arg1], [arg2], [...])** 按监听器的顺序执行执行每个监听器，如果事件有注册监听返回 true，否则返回 false。 |

### 类方法

| 序号 | 方法 & 描述                                                  |
| :--- | :----------------------------------------------------------- |
| 1    | **listenerCount(emitter, event)** 返回指定事件的监听器数量。 |

```
events.EventEmitter.listenerCount(emitter, eventName) //已废弃，不推荐
events.emitter.listenerCount(eventName) //推荐
```

### 事件

| 序号 | 事件 & 描述                                                  |
| :--- | :----------------------------------------------------------- |
| 1    | **newListener** **event** - 字符串，事件名称**listener** - 处理事件函数该事件在添加新监听器时被触发。 |
| 2    | **removeListener** **event** - 字符串，事件名称**listener** - 处理事件函数从指定监听器数组中删除一个监听器。需要注意的是，此操作将会改变处于被删监听器之后的那些监听器的索引 |

# Node.js 全局对象

JavaScript 中有一个特殊的对象，称为全局对象（Global Object），它及其所有属性都可以在程序的任何地方访问，即全局变量。

在浏览器 JavaScript 中，通常 window 是全局对象， 而 Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性。



在 Node.js 我们可以直接访问到 global 的属性，而不需要在应用中包含它。

------

## 全局对象与全局变量

global 最根本的作用是作为全局变量的宿主。按照 ECMAScript 的定义，满足以下条 件的变量是全局变量：

- 在最外层定义的变量；
- 全局对象的属性；
- 隐式定义的变量（未定义直接赋值的变量）。

当你定义一个全局变量时，这个变量同时也会成为全局对象的属性，反之亦然。需要注 意的是，在 Node.js 中你不可能在最外层定义变量，因为所有用户代码都是属于当前模块的， 而模块本身不是最外层上下文。

**注意：** 最好不要使用 var 定义变量以避免引入全局变量，因为全局变量会污染命名空间，提高代码的耦合风险。

------

## __filename

**__filename** 表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 如果在模块中，返回的值是模块文件的路径。

### 实例

创建文件 main.js ，代码如下所示：

```
// 输出全局变量 __filename 的值
console.log( __filename );
```

执行 main.js 文件，代码如下所示:

```
$ node main.js
/web/com/runoob/nodejs/main.js
```

------

## __dirname

**__dirname** 表示当前执行脚本所在的目录。

### 实例

创建文件 main.js ，代码如下所示：

```
// 输出全局变量 __dirname 的值
console.log( __dirname );
```

执行 main.js 文件，代码如下所示:

```
$ node main.js
/web/com/runoob/nodejs
```

------

## setTimeout(cb, ms)

**setTimeout(cb, ms)** 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。

返回一个代表定时器的句柄值。

### 实例

创建文件 main.js ，代码如下所示：

```
function printHello(){
   console.log( "Hello, World!");
}
// 两秒后执行以上函数
setTimeout(printHello, 2000);
```

执行 main.js 文件，代码如下所示:

```
$ node main.js
Hello, World!
```

------

## clearTimeout(t)

**clearTimeout( t )** 全局函数用于停止一个之前通过 setTimeout() 创建的定时器。 参数 **t** 是通过 setTimeout() 函数创建的定时器。

### 实例

创建文件 main.js ，代码如下所示：

```
function printHello(){
   console.log( "Hello, World!");
}
// 两秒后执行以上函数
var t = setTimeout(printHello, 2000);

// 清除定时器
clearTimeout(t);
```

执行 main.js 文件，代码如下所示:

```
$ node main.js
```

------

## setInterval(cb, ms)

**setInterval(cb, ms)** 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。

返回一个代表定时器的句柄值。可以使用 **clearInterval(t)** 函数来清除定时器。

setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。

### 实例

创建文件 main.js ，代码如下所示：

```
function printHello(){
   console.log( "Hello, World!");
}
// 两秒后执行以上函数
setInterval(printHello, 2000);
```

执行 main.js 文件，代码如下所示:

```
$ node main.js
```

Hello, World! Hello, World! Hello, World! Hello, World! Hello, World! ……

以上程序每隔两秒就会输出一次"Hello, World!"，且会永久执行下去，直到你按下 **ctrl + c** 按钮。

------

## console

console 用于提供控制台标准输出，它是由 Internet Explorer 的 JScript 引擎提供的调试工具，后来逐渐成为浏览器的实施标准。

Node.js 沿用了这个标准，提供与习惯行为一致的 console 对象，用于向标准输出流（stdout）或标准错误流（stderr）输出字符。

# Node.js模块系统

为了让Node.js的文件可以相互调用，Node.js提供了一个简单的模块系统。

模块是Node.js 应用程序的基本组成部分，文件和模块是一一对应的。换言之，一个 Node.js 文件就是一个模块，这个文件可能是JavaScript 代码、JSON 或者编译过的C/C++ 扩展。

## 引入模块

在 Node.js 中，引入一个模块非常简单，如下我们创建一个 **main.js** 文件并引入 hello 模块，代码如下:

```
var hello = require('./hello');
hello.world();
```

以上实例中，代码 require('./hello') 引入了当前目录下的 hello.js 文件（./ 为当前目录，node.js 默认后缀为 js）。

Node.js 提供了 exports 和 require 两个对象，其中 exports 是模块公开的接口，require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。

接下来我们就来创建 hello.js 文件，代码如下：

```
exports.world = function() {
  console.log('Hello World');
}
```

在以上示例中，hello.js 通过 exports 对象把 world 作为模块的访问接口，在 main.js 中通过 require('./hello') 加载这个模块，然后就可以直接访 问 hello.js 中 exports 对象的成员函数了。

有时候我们只是想把一个对象封装到模块中，格式如下：

```
module.exports = function() {
  // ...
}
```

例如:

```
//hello.js 
function Hello() { 
    var name; 
    this.setName = function(thyName) { 
        name = thyName; 
    }; 
    this.sayHello = function() { 
        console.log('Hello ' + name); 
    }; 
}; 
module.exports = Hello;
```

这样就可以直接获得这个对象了：

```
//main.js 
var Hello = require('./hello'); 
hello = new Hello(); 
hello.setName('BYVoid'); 
hello.sayHello(); 
```

模块接口的唯一变化是使用 module.exports = Hello 代替了exports.world = function(){}。 在外部引用该模块时，其接口对象就是要输出的 Hello 对象本身，而不是原先的 exports。

# Node.js 文件系统

Node.js 提供一组类似 UNIX（POSIX）标准的文件操作API。 Node 导入文件系统模块(fs)语法如下所示：

```
var fs = require("fs")
```

------

## 异步和同步

Node.js 文件系统（fs 模块）模块中的方法均有异步和同步版本，例如读取文件内容的函数有异步的 fs.readFile() 和同步的 fs.readFileSync()。

异步的方法函数最后一个参数为回调函数，回调函数的第一个参数包含了错误信息(error)。

建议大家使用异步方法，比起同步，异步方法性能更高，速度更快，而且没有阻塞。

## 打开文件

### 语法

以下为在异步模式下打开文件的语法格式：

```
fs.open(path, flags[, mode], callback)
```

### 参数

参数使用说明如下：

- **path** - 文件的路径。
- **flags** - 文件打开的行为。具体值详见下文。
- **mode** - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
- **callback** - 回调函数，带有两个参数如：callback(err, fd)。

## 写入文件

### 语法

以下为异步模式下写入文件的语法格式：

```
fs.writeFile(file, data[, options], callback)
```

writeFile 直接打开文件默认是 **w** 模式，所以如果文件存在，该方法写入的内容会覆盖旧的文件内容。

### 参数

参数使用说明如下：

- **file** - 文件名或文件描述符。
- **data** - 要写入文件的数据，可以是 String(字符串) 或 Buffer(缓冲) 对象。
- **options** - 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'
- **callback** - 回调函数，回调函数只包含错误信息参数(err)，在写入失败时返回。

## 读取文件

### 语法

以下为异步模式下读取文件的语法格式：

```
fs.read(fd, buffer, offset, length, position, callback)
```

该方法使用了文件描述符来读取文件。

### 参数

参数使用说明如下：

- **fd** - 通过 fs.open() 方法返回的文件描述符。
- **buffer** - 数据写入的缓冲区。
- **offset** - 缓冲区写入的写入偏移量。
- **length** - 要从文件中读取的字节数。
- **position** - 文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。
- **callback** - 回调函数，有三个参数err, bytesRead, buffer，err 为错误信息， bytesRead 表示读取的字节数，buffer 为缓冲区对象。

## 关闭文件

### 语法

以下为异步模式下关闭文件的语法格式：

```
fs.close(fd, callback)
```

该方法使用了文件描述符来读取文件。

### 参数

参数使用说明如下：

- **fd** - 通过 fs.open() 方法返回的文件描述符。
- **callback** - 回调函数，没有参数。

# Node.js Web 模块

## 使用 Node 创建 Web 服务器

Node.js 提供了 http 模块，http 模块主要用于搭建 HTTP 服务端和客户端，使用 HTTP 服务器或客户端功能必须调用 http 模块，代码如下：

```
var http = require('http');
```

```//加载http核心模块
var http = require('http')

//使用http.createServer()方法创建一个Wreb服务器

//返回一个Server实例

var server = http.createServer()

//服务器要干嘛？

//发送请求

//接受请求

//处理请求

// 给反馈

// 注册request请求事件

// 当客户端请求过来，就会自动触发服务器的request请求事件，然后执行第二个参数回调函数

server.on('request',function(){

console.log('受到客户端的请求了')

})

// 绑定端口号，启动服务器

server.listen(3000,function(){

console.log('服务器地洞成功了，可以通过http://127.0.0.1:3000/来进行访问')

})

var http = require('http');

var server = http.createServer()

server.on('request',function(req,res){

//在服务端默认发送的数据，其实是utf8编码的内容

//但是浏览器不知道你是utf8编码的内容

//浏览器在不知道五福齐响应内容的编码的情况下会按照当前操作系统的默认编码

//中文操作系统默认是gbk

//解决方法就是正确的发送浏览器我给你发送的内容是什么编码

var url = req.url

if(url === '/plain'){

res.setHeader('Content-Type','text/plain;charset=utf-8')

res.end('hello world')}

else if(url === '/html'){

res.setHeader('Content-Type','text/html;charset=utf-8')

res.end('<p>hello html <a href="">点我啊！</a></p>')}

else

{res.setHeader('Content-Type','text/plain;charset=utf-8')

res.end('春饼')}

})

server.listen(3000,function(){

console.log('Server is running...')})
```



```var http = require('http')
var http = require('http')

var fs = require('fs')

var server = http.createServer()

var wwwDir = 'D:/Movie/www'

server.on('request',function(req,res){

var url = req.url

var filename = '/image/star.jpg'

if(url!='/')

{filename = url}

fs.readFile(wwwDir+filename,function(err,data){

if(err){

return res.end('404 not found')}

res.end(data)})

})

server.listen(3000,function(){

console.log('running....')})
```



# Node.js Express 框架

------

## Express 简介

Express 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具。

使用 Express 可以快速地搭建一个完整功能的网站。

Express 框架核心特性：

- 可以设置中间件来响应 HTTP 请求。
- 定义了路由表用于执行不同的 HTTP 请求动作。
- 可以通过向模板传递参数来动态渲染 HTML 页面。

var express = require('express')

//创建服务器应用程序

//也就是原来的http.creatServer()

var app = express()

//开放资源

//公开制定目录

// /public/xxx访问文件

app.use('/public/',express.static('./public/'))

//当服务器收到get请求/的时候，执行回调处理函数

app.get('/',function(req,res){

res.send(`<!DOCTYPE html>

<html lang="en">

<head>


    <meta charset="UTF-8">


    <meta http-equiv="X-UA-Compatible" content="IE=edge">


    <meta name="viewport" content="width=device-width, initial-scale=1.0">


  <title>Document</title>

</head>

<body>

  <h1>hello express!</h1>

</body>

</html>`)})

app.get('/about',function(req,res){

res.send('我谢谢你！')})

//相当于server.listen

app.listen(3000,function(){

console.log('app is running at port 3000')})

# webpack

Webpack 是一个前端资源加载/打包工具。它将根据模块的依赖关系进行静态分析，然后将这些模块按照指定的规则生成对应的静态资源。

> 本章节基于 Webpack3.0 测试通过。

![img](https://www.runoob.com/wp-content/uploads/2017/01/32af52ff9594b121517ecdd932644da4.png)

从图中我们可以看出，Webpack 可以将多种静态资源 js、css、less 转换成一个静态文件，减少了页面的请求。。

### 安装 Webpack

使用 cnpm 安装 webpack：

cnpm install webpack -g

## LOADER

Webpack 本身只能处理 JavaScript 模块，如果要处理其他类型的文件，就需要使用 loader 进行转换。

所以如果我们需要在应用中添加 css 文件，就需要使用到 css-loader 和 style-loader，他们做两件不同的事情，css-loader 会遍历 CSS 文件，然后找到 url() 表达式然后处理他们，style-loader 会把原来的 CSS 代码插入页面中的一个 style 标签中。

接下来我们使用以下命令来安装 css-loader 和 style-loader(全局安装需要参数 -g)。

cnpm install css-loader style-loader

执行以上命令后，会再当前目录生成 node_modules 目录，它就是 css-loader 和 style-loader 的安装目录。

```  css
body{
    margin:0;
    padding:0;
    height: 100%;
    background-color: pink;
}
```

``` javascript
import './index.css';
```

``` 
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
```



## 配置文件

我们可以将一些编译选项放在配置文件中，以便于统一管理：

创建 webpack.config.js 文件，代码如下所示：

```js
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
```



## 插件

插件在 webpack 的配置信息 plugins 选项中指定，用于完成一些 loader 不能完成的工。

webpack 自带一些插件，你可以通过 cnpm 安装一些插件。

使用内置插件需要通过以下命令来安装：

cnpm install webpack --save-dev

