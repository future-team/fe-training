/**
 * Created by slashhuang on 16/4/27.
 */

/**====topic1=====
 * 通过闭包访问
 */
var app=function(){

    var num=0;
    /**
     * 通过返回函数,创建闭包
     */
   return {
       increment:function(val){
           var incValue = val?val:1;
           num+=incValue;
           console.log('给num增加',incValue)

       },
       _get:function(){
          return num;
       }
   }
};
/**
 * app执行结束，内部函数依旧可以保持对app内的变量访问权
 */
var Api = app();
Api.increment();
Api.increment(2);
Api.increment(2);
console.log('闭包变量num现在为:',Api._get());