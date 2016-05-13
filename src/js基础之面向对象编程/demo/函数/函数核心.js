/**
 * Created by slashhuang on 16/5/4.
 * 函数中的this和arguments
 */

/**
 * ===topic1===
 * |函数概览
 * |-this
 * |-arguments
 */
var hello= function(){
    console.log(this);//this指向本函数创建的全局上下文
    console.log(arguments);//函数的参数`对象数组`
};
hello(1,2);

/**
 * === 再看this ===
 * |- 因调用方式的不同而不同
 * |- 动态绑定(runtime
 */
//========== 进入细节学习环节==========


/**======= 场景1======
 * 方法调用
 * 当函数作为对象的一个属性进行调用的时候,this绑定到该对象。
 */

var app={
    init:function(){
        this.bindEvents();//这里的this指向app
    },
    bindEvents:function(){
        console.log("bindEvents");
    }
};
//app.init(); @TODO



/**======= 场景2======
 * 函数调用(无论如何嵌套)
 * this绑定到全局对象
 */
(function(){
   var world=function(){
       console.log(this==global);//this绑定到了全局对象
   };
   //world(); @TODO
}());

/**======= 场景3======
 * 构造器调用模式
 * this绑定到新对象
 * 创建一个连接到该函数prototype成员的新对象
 */
var _class = function(){
   this.a="a";
   this.b="b"
};
_class.prototype.c="c";
var instance1 = new _class();//return this
//console.log(instance1); //@TODO
//console.log(instance1.c);//return this

/**======= 场景4======
 * apply调用模式
 * 创建参数数组
 * 自定义this
 */
var _apply = function(){
   console.log(this);
   console.log(JSON.stringify(arguments));
};
//_apply.apply({hello:'world'},[1,2]);



//=========请同学们听完这一节后完成如下习题=======
/**
 * 指出下面的函数中的this指向
 *
 *
 * ===== 第一题 ======
 *
 var func1=function(){ console.log(this)   };
 func1();

 * ===== 第二题 ======
 *
 var func1=function(){ console.log(this)   };
 var s={
    func1:func1,
    world:'world'
 }
 s.func1();

 * ===== 第三题 ======
 *
 var func1=function(){ console.log(this)   };
 var _this={a:1}
 func1.apply(_this,[1,2])

 **/






