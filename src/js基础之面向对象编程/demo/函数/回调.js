/**
 * Created by slashhuang on 16/4/27.
 * 回调
 */

/**
 * |实现形式
 * |- 回调函数作为参数传入另一个函数
 *
 */
var _callback=function(callback){
    console.log('before callback');
    /**
     * 执行回调
     */
    callback && callback();
};
var callback=function(){
    console.log('======callback calling');
};

_callback(callback);
