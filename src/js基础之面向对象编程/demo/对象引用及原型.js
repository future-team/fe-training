/**
 * Created by slashhuang on 16/4/25.
 */

var assert = require('assert');
/**
 *
 * 对象通过引用来传递
 * 它们永远不会被复制
 *
 */
var p={
    a:1,
    c:function(){
        //方法调用,this绑定到该对象(very late binding)
        console.log(this);
    }
};

var q=p;
q.hello='world';

assert( p===q );

p.c();   //{ a: 1, c: [Function], hello: 'world' }