/**
 * Created by slashhuang on 16/4/27.
 * 级联
 */

/**
 *
 * =====topic1====
 * | 实现形式
 * |- 通过return this实现级联调用
 *
 */
var app=function(){
    var num=0;
    return {
        increment:function(val) {
            var incValue = val ? val : 1;
            num += incValue;
            console.log('给num增加', incValue);
            /**
             * return this实现级联调用
             * 级联使得函数调用更加简单
             * 经典的类库jQuery便拥有大量级联使用
             */
            return this;
        },
        _get:function(){
            return num;
        }
    }
};
var Api = app();

Api.increment().increment(2).increment(2);
console.log('闭包变量num现在为:',Api._get());