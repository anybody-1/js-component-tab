## 组件功能
通过添加不同位置的node节点参数，实现该位置点击不同的tab，展示相应的内容
## 组件实现方式
创建一个tab函数，形参为node节点，利用new和prototype来实现，tab里设置this.init()、this.bind(),实现的是当new次函数时，新的对象就马上启动init()和bind(),同时tab函数的prototype里设置init()函数和bind()函数，具体详见代码
## 如何使用
使用方法很简单只需使用相同的tab代码段，同时传入需要启动的位置node节点形参，就可以控制多个tab功能的实现
代码地址为：https://github.com/anybody-1/js-component-tab
效果地址为： https://anybody-1.github.io/js-component-tab/sample