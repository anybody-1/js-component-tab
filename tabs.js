function Tab (node){
    this.init(node)
    this.bind()
}

Tab.prototype = {
    constructor: Tab,
    init: function(node){
      this.node = node
      this.tabs = this.node.querySelectorAll('.tabs>li')
      this.panels = this.node.querySelectorAll('.panel')
    },
    bind: function(){
       var _this = this
       this.tabs.forEach(function(tab, index){
         tab.onclick = function(){
           _this.tabs.forEach(tab=>{tab.classList.remove('active')})
           this.classList.add('active')
           _this.panels.forEach(panel=>{panel.classList.remove('active')})
           _this.panels[index].classList.add('active')
         }
       })
    }
}

var tab1 = new Tab(document.querySelectorAll('.mod-tab')[0]);
var tab2 = new Tab(document.querySelectorAll('.mod-tab')[1]);