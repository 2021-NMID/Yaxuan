### 登录注册页面
https://2020210466.github.io/moods.github.io/
### 部分学习笔记
https://www.runoob.com/js/js-output.html

### javascript

- 使用 **window.alert()** 弹出警告框。
- 使用 **document.write()** 方法将内容写到 HTML 文档中。
- 使用 **innerHTML** 写入到 HTML 元素。
- 使用 **console.log()** 写入到浏览器的控制台。

如需从 JavaScript 访问某个 HTML 元素，您可以使用 document.getElementById(*id*) 方法。



请使用 "id" 属性来标识 HTML 元素，并 innerHTML 来获取或插入元素内容：

<button type="button" onclick="myFunction()">点击这里</button>

<script>
function myFunction(){
	document.getElementById("myPar").innerHTML="你好世界！";
	document.getElementById("myDiv").innerHTML="你最近怎么样?";
}
</script>


### JavaScript数据类型

* 数组 

var cars=new Array();

cars[0]="xx";

cars[1]="hh";

var cars=["wwww"]

## JavaScript 对象

对象由花括号分隔。在括号内部，对象的属性以名称和值对的形式 (name : value) 来定义。属性由逗号分隔：

对象属性有两种寻址方式：

## 实例

name=person.lastname;
name=person["lastname"];

## 对象属性

可以说 "JavaScript 对象是变量的容器"。

但是，我们通常认为 "JavaScript 对象是键值对的容器"。

键值对通常写法为 **name : value** (键与值以冒号分割)。

键值对在 JavaScript 对象通常称为 **对象属性**。

 JavaScript 对象是属性和方法的容器。

## 访问对象方法

你可以使用以下语法创建对象方法：

```
methodName : function() {
    // 代码 
}
```

你可以使用以下语法访问对象方法：

## 实例

objectName.methodName()

如果不加括号输出的是函数的内容

加了括号后输出的是函数的结果

如果变量在函数内没有声明（没有使用 var 关键字），该变量为全局变量。

以下实例中 carName 在函数内，但是为全局变量。

## 实例

// 此处可调用 carName 变量  function myFunction() {    carName = "Volvo";    // 此处可调用 carName 变量 }

## JavaScript 变量生命周期

JavaScript 变量生命周期在它声明时初始化。

局部变量在函数执行完毕后销毁。

全局变量在页面关闭后销毁。

局部变量：在函数中通过var声明的变量。

全局变量：在函数外通过var声明的变量。

没有声明就使用的变量，默认为全局变量，不论这个变量在哪被使用。

### 事件

https://www.runoob.com/jsref/dom-obj-event.html

## 对事件做出反应

我们可以在事件发生时执行 JavaScript，比如当用户在 HTML 元素上点击时。

如需在用户点击某个元素时执行代码，请向一个 HTML 事件属性添加 JavaScript 代码：

onclick=*JavaScript*

HTML 事件的例子：

- 当用户点击鼠标时
- 当网页已加载时
- 当图像已加载时
- 当鼠标移动到元素上时
- 当输入字段被改变时
- 当提交 HTML 表单时
- 当用户触发按键时

```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<head>
<script>
function myFunction(){
	var x=document.getElementById("fname");
	x.value=x.value.toUpperCase();
}
</script>
</head>
<body>
```


输入你的名字: <input type="text" id="fname" onchange="myFunction()">

<p>当你离开输入框后，函数将被触发，将小写字母转为大写字母。</p>

</body>
</html>

## addEventListener() 方法

## 实例

在用户点击按钮时触发监听事件：

document.getElementById("myBtn").addEventListener("click", displayDate);

addEventListener() 方法用于向指定元素添加事件句柄。

addEventListener() 方法添加的事件句柄不会覆盖已存在的事件句柄。

你可以向一个元素添加多个事件句柄。

你可以向同个元素添加多个同类型的事件句柄，如：两个 "click" 事件。

你可以向任何 DOM 对象添加事件监听，不仅仅是 HTML 元素。如： window 对象。

addEventListener() 方法可以更简单的控制事件（冒泡与捕获）。

当你使用 addEventListener() 方法时, JavaScript 从 HTML 标记中分离开来，可读性更强， 在没有控制HTML标记时也可以添加事件监听。

你可以使用 removeEventListener() 方法来移除事件的监听。

## 语法

*element*.addEventListener(*event, function, useCapture*);

第一个参数是事件的类型 (如 "click" 或 "mousedown").

第二个参数是事件触发后调用的函数。

第三个参数是个布尔值用于描述事件是冒泡还是捕获。该参数是可选的。

| ![Note](https://www.runoob.com/images/lamp.jpg) | 注意:不要使用 "on" 前缀。 例如，使用 "click" ,而不是使用 "onclick"。 |
| ----------------------------------------------- | ------------------------------------------------------------ |
|                                                 |                                                              |

## 向同一个元素中添加多个事件句柄

addEventListener() 方法允许向同一个元素添加多个事件，且不会覆盖已存在的事件：

## 实例

*element*.addEventListener("click", myFunction);
*element*.addEventListener("click", mySecondFunction);

你可以向同个元素添加不同类型的事件：

## 实例

*element*.addEventListener("mouseover", myFunction);
*element*.addEventListener("click", mySecondFunction);
*element*.addEventListener("mouseout", myThirdFunction);

## 事件冒泡或事件捕获？

事件传递有两种方式：冒泡与捕获。

事件传递定义了元素事件触发的顺序。 如果你将 <p> 元素插入到 <div> 元素中，用户点击 <p> 元素, 哪个元素的 "click" 事件先被触发呢？

在 *冒泡* 中，内部元素的事件会先被触发，然后再触发外部元素，即： <p> 元素的点击事件先触发，然后会触发 <div> 元素的点击事件。

在 *捕获* 中，外部元素的事件会先被触发，然后才会触发内部元素的事件，即： <div> 元素的点击事件先触发 ，然后再触发 <p> 元素的点击事件。

addEventListener() 方法可以指定 "useCapture" 参数来设置传递类型：

addEventListener(*event*, *function*, ***useCapture\***);

默认值为 false, 即冒泡传递，当值为 true 时, 事件使用捕获传递。

## 实例

document.getElementById("myDiv").addEventListener("click", myFunction, true);

https://www.runoob.com/jsref/met-password-select.html

### 计时事件

https://www.runoob.com/js/js-timing.html
