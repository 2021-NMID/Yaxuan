# Vue3 模板语法

## 插值

### 文本

数据绑定最常见的形式就是使用 **{{...}}**（双大括号）的文本插值

```
<div id="app">
  <p>{{ message }}</p>
</div>
```

**{{...}}** 标签的内容将会被替代为对应组件实例中 **message** 属性的值，如果 **message** 属性的值发生了改变，**{{...}}** 标签内容也会更新。

如果不想改变标签的内容，可以通过使用 **v-once** 指令执行一次性地插值，当数据改变时，插值处的内容不会更新。

```
<span v-once>这个将不会改变: {{ message }}</span>
```

### Html

使用 v-html 指令用于输出 html 代码：

## v-html 指令

```
<div id="example1" class="demo">
    <p>使用双大括号的文本插值: {{ rawHtml }}</p>
    <p>使用 v-html 指令: <span v-html="rawHtml"></span></p>
</div>
 
<script>
const RenderHtmlApp = {
  data() {
    return {
      rawHtml: '<span style="color: red">这里会显示红色！</span>'
    }
  }
}
 
Vue.createApp(RenderHtmlApp).mount('#example1')
</script>
```

### 属性

HTML 属性中的值应使用 v-bind 指令。

```
<div v-bind:id="dynamicId"></div>
```

## 指令

指令是带有 v- 前缀的特殊属性。

### 参数

参数在指令后以冒号指明

### 修饰符

修饰符是以半角句号 **.** 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。

# Vue3 条件语句

## 条件判断

### v-if

条件判断使用 v-if 指令，指令的表达式返回 true 时才会显示：

```
<div id="app">
    <template v-if="seen">
        <h1>网站</h1>
        <p>Google</p>
        <p>Runoob</p>
        <p>Taobao</p>
    </template>
</div>
    
<script>
const app = {
  data() {
    return {
      seen: true /* 改为false，信息就无法显示 */
    }
  }
}
 
Vue.createApp(app).mount('#app')
</script>

```



### v-else

可以用 v-else 指令给 v-if 添加一个 "else" 块：

```
<div id="app">
    <div v-if="Math.random() > 0.5">
      随机数大于 0.5
    </div>
    <div v-else>
      随机数小于等于 0.5
    </div>
</div>
    
<script>
Vue.createApp(app).mount('#app')
</script>
```

### v-else-if

v-else-if 即 v-if 的 else-if 块，可以链式的使用多次：

```
<div id="app">
    <div v-if="type === 'A'">
         A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
      Not A/B/C
    </div>
</div>
    
<script>
const app = {
  data() {
    return {
      type: "C" 
    }
  }
}
 
Vue.createApp(app).mount('#app')
</script>
```

**v-else 、v-else-if 必须跟在 v-if 或者 v-else-if之后。**

### v-show

我们也可以使用 v-show 指令来根据条件展示元素：

## Vue.js 循环语句

循环使用 v-for 指令。

v-for 指令需要以 **site in sites** 形式的特殊语法， sites 是源数据数组并且 site 是数组元素迭代的别名。

v-for 可以绑定数据到数组来渲染一个列表：

```
<div id="app">
  <ol>
    <li v-for="site in sites">
      {{ site.text }}
    </li>
  </ol>
</div>
<script>
const app = {
  data() {
    return {
      sites: [
        { text: 'Google' },
        { text: 'Runoob' },
        { text: 'Taobao' }
      ]
    }
  }
}

Vue.createApp(app).mount('#app')
</script>
```

v-for 还支持一个可选的第二个参数，参数值为当前项的索引：

```
<li v-for="(site, index) in sites">
      {{ index }} -{{ site.text }}
    </li>
```

### v-for 迭代对象

v-for 可以通过一个对象的属性来迭代数据：

```
<div id="app">
  <ul>
    <li v-for="value in object">
    {{ value }}
    </li>
  </ul>
</div>
 
<script>
const app = {
  data() {
    return {
      object: {
        name: '你好',
        url: 'http://www.github.com',
        slogan: '谢谢你'
      }
    }
  }
}
 
Vue.createApp(app).mount('#app')
</script>
```

输出结果如下：

- 你好
- http://www.github.com
- 谢谢你 

你也可以提供第二个的参数为键名：key

第三个参数为索引：index

```
 <li v-for="(value, key, index) in object">
```

### v-for 迭代整数

```
<li v-for="n in 10">
     {{ n }}
```

# Vue3 组件

组件可以扩展 HTML 元素，封装可重用的代码。

每个 Vue 应用都是通过用 createApp 函数创建的，传递给 createApp 的选项用于配置根组件。当我们挂载应用时，该组件被用作渲染的起点。

一个应用需要被挂载到一个 DOM 元素中。

组件有**全局组件**和**局部组件**

注册一个全局组件语法格式如下：

```
const app = Vue.createApp({...})

app.component('my-component-name', {
  /* ... */
})
```

注册局部组件语法格式如下：

```
const ComponentA = {
  /* ... */
}
const ComponentB = {
  /* ... */
}
const ComponentC = {
  /* ... */
}
```

然后在 components 选项中定义你想要使用的组件：

```
const app = Vue.createApp({
  components: {
    'component-a': ComponentA,
    'component-b': ComponentB
  }
})
```

对于 components 对象中的每个属性来说，其属性名就是自定义元素的名字（component-a、component-b），其属性值就是这个组件的选项对象（ComponentA、ComponentB）。

## Prop

prop 是子组件用来接受父组件传递过来的数据的一个自定义属性。

父组件的数据需要通过 props 把数据传给子组件，子组件需要显式地用 props 选项声明 "prop"

# Vue3 计算属性

计算属性关键词: **computed**。

```
<div id="app">
  <p>原始字符串: {{ message }}</p>
  <p>计算后反转字符串: {{ reversedMessage }}</p>
</div>
    
<script>
const app = {
  data() {
    return {
      message: 'RUNOOB!!'
    }
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
}
 
Vue.createApp(app).mount('#app')
</script>
```

## computed vs methods

我们可以使用 methods 来替代 computed，效果上两个都是一样的，但是 computed 是基于它的依赖缓存，只有相关依赖发生改变时才会重新取值。而使用 methods ，在重新渲染的时候，函数总会重新调用执行。

# Vue3 监听属性

watch

```
<div id = "app">
    <p style = "font-size:25px;">计数器: {{ counter }}</p>
    <button @click = "counter++" style = "font-size:25px;">点我</button>
</div>
    
<script>
const app = {
  data() {
    return {
      counter: 1
    }
  }
}
vm = Vue.createApp(app).mount('#app')
vm.$watch('counter', function(nval, oval) {
    alert('计数器值的变化 :' + oval + ' 变为 ' + nval + '!');
});
</script>
```

# Vue3 样式绑定

## Vue.js class

class 与 style 是 HTML 元素的属性，用于设置元素的样式，我们可以用 v-bind 来设置样式属性。

v-bind 在处理 class 和 style 时， 表达式除了可以使用字符串之外，还可以是对象或数组。

**v-bind:class** 可以简写为 **:class**。

## class 属性绑定

我们可以为 **v-bind:class** 设置一个对象，从而动态的切换 **class**:

```
<div id="app">
    <div :class="{ 'active': isActive }"></div>
</div>

<script>
const app = {
    data() {
      return {
         isActive: true
      }
   }
}

Vue.createApp(app).mount('#app')
</script>
```

我们也可以直接绑定数据里的一个对象：

```
<div id="app">
    <div class="static" :class="classObject"></div>
</div>

<script>
const app = {
    data() {
      return {
         classObject: {
            'active': false,
            'text-danger': true
         }
      }
   }
}

Vue.createApp(app).mount('#app')
</script>
```

### 数组语法

我们可以把一个数组传给 **v-bind:class** ，

```
<div class="static" :class="[activeClass, errorClass]"></div>
```

## Vue.js style(内联样式)

我们可以在 **v-bind:style** 直接设置样式，可以简写为 **:style**：

```
<div id="app">
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
</div>
```

也可以直接绑定到一个样式**对象**

```
<div id="app">
  <div :style="styleObject"></div>
</div>
```

# Vue3 事件处理

我们可以使用 v-on 指令来监听 DOM 事件，从而执行 JavaScript 代码。

**v-on** 指令可以缩写为 **@** 符号。

```
v-on:click="methodName"
或
@click="methodName"
```

v-on 可以接收一个定义的方法来调用。

<button @click="greet">点我</button>

除了直接绑定到一个方法，也可以用内联 JavaScript 语句：

```
<div id="app">
  <button @click="say('hi')">Say hi</button>
  <button @click="say('what')">Say what</button>
</div>
 
<script>
const app = {
  data() {
   
  },
  methods: {
    say(message) {
      alert(message)
    }
  }
}
 
Vue.createApp(app).mount('#app')
</script>
```

事件处理程序中可以有多个方法，这些方法由逗号运算符分隔：

```
<button @click="one($event), two($event)">
```



### 事件修饰符

Vue.js 为 v-on 提供了事件修饰符来处理 DOM 事件细节，如：event.preventDefault() 或 event.stopPropagation()。

Vue.js 通过由点 **.** 表示的指令后缀来调用修饰符。

- `.stop` - 阻止冒泡
- `.prevent` - 阻止默认事件
- `.capture` - 阻止捕获
- `.self` - 只监听触发该元素的事件
- `.once` - 只触发一次
- `.left` - 左键事件
- `.right` - 右键事件
- `.middle` - 中间滚轮事件

### 按键修饰符

Vue 允许为 v-on 在监听键盘事件时添加按键修饰符

全部的按键别名：

- `.enter`
- `.tab`
- `.delete` (捕获 "删除" 和 "退格" 键)
- `.esc`
- `.space`
- `.up`
- `.down`
- `.left`
- `.right`

系统修饰键：

- `.ctrl`
- `.alt`
- `.shift`
- `.meta`

鼠标按钮修饰符:

- `.left`
- `.right`
- `.middle`

# Vue3 表单

v-model 会根据控件类型自动选取正确的方法来更新元素。

v-model 会忽略所有表单元素的 value、checked、selected 属性的初始值，使用的是 data 选项中声明初始值。

v-model 在内部为不同的输入元素使用不同的属性并抛出不同的事件：

- text 和 textarea 元素使用 `value` 属性和 `input` 事件；
- checkbox 和 radio 使用 `checked` 属性和 `change` 事件；
- select 字段将 `value` 作为属性并将 `change` 作为事件。

```
<div id="app">
  <p>input 元素：</p>
  <input v-model="message" placeholder="编辑我……">
  <p>input 表单消息是: {{ message }}</p>
    
  <p>textarea 元素：</p>
  <textarea v-model="message2" placeholder="多行文本输入……"></textarea>
  <p>textarea 表单消息是:</p>
  <p style="white-space: pre">{{ message2 }}</p>
  
</div>
```

在文本区域 textarea 插值是不起作用，需要使用 v-model 来代替：

```
<!-- 错误 -->
<textarea>{{ text }}</textarea>

<!-- 正确 -->
<textarea v-model="text"></textarea>
```

### 复选框

复选框如果是一个为逻辑值，如果是多个则绑定到同一个数组

### 单选按钮

```
<input type="radio" id="runoob" value="Runoob" v-model="picked">
  <label for="runoob">Runoob</label>
  <br>
  <input type="radio" id="google" value="Google" v-model="picked">
  <label for="google">Google</label>
  <br>
  <span>选中值为: {{ picked }}</span>
```

### select 列表

```
<div id="app">
  <select v-model="selected" name="fruit">
    <option value="">选择一个网站</option>
    <option value="www.github2.com">baidu</option>
    <option value="www.github.com">Google</option>
  </select>
 
  <div id="output">
      选择的网站是: {{selected}}
  </div>
</div>
 
<script>
new Vue({
  el: '#app',
  data: {
    selected: '' 
  }
})
</script>
```

# Vue3 自定义指令

除了默认设置的核心指令( v-model 和 v-show ), Vue 也允许注册自定义指令。

分为全局和局部指令

## 钩子

### 钩子函数

指令定义函数提供了几个钩子函数（可选）：

- `created `: 在绑定元素的属性或事件监听器被应用之前调用。
- `beforeMount `: 指令第一次绑定到元素并且在挂载父组件之前调用。。
- `mounted `: 在绑定元素的父组件被挂载后调用。。
- `beforeUpdate`: 在更新包含组件的 VNode 之前调用。。
- `updated`: 在包含组件的 VNode 及其子组件的 VNode 更新后调用。
- `beforeUnmount`: 当指令与元素解除绑定且父组件已卸载时，只调用一次。
- `unmounted`: 当指令与元素解除绑定且父组件已卸载时，只调用一次。

### 钩子函数参数

钩子函数的参数有：

**el**

**el** 指令绑定到的元素。这可用于直接操作 DOM。

**binding**

binding 是一个对象，包含以下属性：

- `instance`：使用指令的组件实例。
- `value`：传递给指令的值。例如，在 `v-my-directive="1 + 1"` 中，该值为 `2`。
- `oldValue`：先前的值，仅在 `beforeUpdate` 和 `updated` 中可用。值是否已更改都可用。
- `arg`：参数传递给指令 (如果有)。例如在 `v-my-directive:foo` 中，arg 为 `"foo"`。
- `modifiers`：包含修饰符 (如果有) 的对象。例如在 `v-my-directive.foo.bar` 中，修饰符对象为 `{foo: true，bar: true}`。
- `dir`：一个对象，在注册指令时作为参数传递。例如，在以下指令中：

# Vue3 路由

**<router-link>** 是一个组件，该组件用于设置一个导航链接，切换不同 HTML 内容。 **to** 属性为目标地址， 即要显示的内容。

以下实例中我们将 vue-router 加进来，然后配置组件和路由映射，再告诉 vue-router 在哪里渲染它们。

### router-link

请注意，我们没有使用常规的 a 标签，而是使用一个自定义组件 router-link 来创建链接。这使得 Vue Router 可以在**不重新加载页面的情况下更改 URL，处理 URL 的生成以及编码。**

### router-view

router-view 将显示与 url 对应的组件。你可以把它放在任何地方，以适应你的布局。

```
// 1. 定义路由组件.
// 也可以从其他文件导入
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }
 
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]
 
// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = VueRouter.createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: VueRouter.createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})
 
// 5. 创建并挂载根实例
const app = Vue.createApp({})
//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router)
 
app.mount('#app')
 
// 现在，应用已经启动了！
```

## <router-link> 相关属性

接下来我们可以了解下更多关于 <router-link> 的属性。

### to

表示目标路由的链接。 当被点击后，内部会立刻把 to 的值传到 router.push()，所以这个值可以是一个字符串或者是描述目标位置的对象。

### replace

设置 replace 属性的话，当点击时，会调用 router.replace() 而不是 router.push()，导航后不会留下 history 记录。

```
<router-link :to="{ path: '/abc'}" replace></router-link>
```

### append

设置 append 属性后，则在当前 (相对) 路径前添加其路径。例如，我们从 /a 导航到一个相对路径 b，如果没有配置 append，则路径为 /b，如果配了，则为 /a/b

```
<router-link :to="{ path: 'relative/path'}" append></router-link>
```

### tag

有时候想要 `<router-link>` 渲染成某种标签，例如 `<li>`。 于是我们使用 `tag` prop 类指定何种标签，同样它还是会监听点击，触发导航。

```
<router-link to="/foo" tag="li">foo</router-link>
<!-- 渲染结果 -->
<li>foo</li>
```

### active-class

设置 链接激活时使用的 CSS 类名。可以通过以下代码来替代。

```
<style>
   ._active{
      background-color : red;
   }
</style>
<p>
   <router-link v-bind:to = "{ path: '/route1'}" active-class = "_active">Router Link 1</router-link>
   <router-link v-bind:to = "{ path: '/route2'}" tag = "span">Router Link 2</router-link>
</p>
```

注意这里 **class** 使用 **active-class="_active"**。

### exact-active-class

配置当链接被精确匹配的时候应该激活的 class。可以通过以下代码来替代。

```
<p>
   <router-link v-bind:to = "{ path: '/route1'}" exact-active-class = "_active">Router Link 1</router-link>
   <router-link v-bind:to = "{ path: '/route2'}" tag = "span">Router Link 2</router-link>
</p>
```

### event

声明可以用来触发导航的事件。可以是一个字符串或是一个包含字符串的数组。

```
<router-link v-bind:to = "{ path: '/route1'}" event = "mouseover">Router Link 1</router-link>
```

以上代码设置了 event 为 mouseover ，及在鼠标移动到 Router Link 1 上时导航的 HTML 内容会发生改变。

# Vue3 Ajax(axios)

**使用 cdn:**

```
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

或

```
<script src="https://cdn.staticfile.org/axios/0.18.0/axios.min.js"></script>
```

**使用 npm:**

```
$ npm install axios
```

使用方法：

```
Vue.axios.get(api).then((response) => {
  console.log(response.data)
})

this.axios.get(api).then((response) => {
  console.log(response.data)
})

this.$http.get(api).then((response) => {
  console.log(response.data)
})
```

## GET 方法

```
const app = {
  data() {
    return {
      info: 'Ajax 测试!!'
    }
  },
  mounted () {
    axios
      .get('url')
      .then(response => (this.info = response))
      .catch(function (error) { // 请求失败处理
        console.log(error);
    });
  }
}
 
Vue.createApp(app).mount('#app')
```

使用 **response.data** 读取 JSON 数据：

## 传递参数说明

```
// 直接在 URL 上添加参数 ID=12345
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
 
// 也可以通过 params 设置参数：
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

## POST 方法

```
new Vue({
  el: '#app',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .post('url')
      .then(response => (this.info = response))
      .catch(function (error) { // 请求失败处理
        console.log(error);
      });
  }
})
```

POST 方法传递参数格式如下：

## 传递参数说明

```
axios.post('/user', {
    firstName: 'Fred',        // 参数 firstName
    lastName: 'Flintstone'    // 参数 lastName
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

## 执行多个并发请求

```
function getUserAccount() {
  return axios.get('/user/12345');
}
 
function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}
axios.all([getUserAccount(), getUserPermissions()])
  .then(axios.spread(function (acct, perms) {
    // 两个请求现在都执行完成
  }));
```

## axios API

可以通过向 axios 传递相关配置来创建请求。

```
axios(config)
// 发送 POST 请求
axios({
  method: 'post',
  url: '/user/1234',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
//  GET 请求远程图片
axios({
  method:'get',
  url:'http:.......',
  responseType:'stream'
})
  .then(function(response) {
  response.data.pipe(fs.createWriteStream('....jpg'))
});
axios(url[, config])
// 发送 GET 请求（默认的方法）
axios('/user/12345');
```


