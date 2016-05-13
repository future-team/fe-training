/**
 * Created by slashhuang on 16/4/27.
 * 闭包
 */

/**====topic1=====
 * | 实现形式
 * |- 构造函数作用域嵌套
 */
var app=function(){

    var num=0;
    /**
     * 通过返回函数,创建闭包
     */
   return function(val){
           var incValue = val?val:1;
           num+=incValue;
           console.log('给num增加',incValue,"\nnum is now",num)
       }
};
/**
 * app执行结束，内部函数依旧可以保持对app内的变量访问权
 */
var Api = app();
Api();
Api(2);
Api(2);
