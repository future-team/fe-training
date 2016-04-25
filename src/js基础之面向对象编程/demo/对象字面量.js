/**
 * Created by slashhuang on 16/4/25.
 */

var assert = require('assert');
var colors= require('colors');
/**
 * |
 * |对象是无类型的class-free,对新属性名字和值没有限制
 * |
 * |-属性名是合法标识符且不为保留字的情况下，**不强制要求用引号括住**
 * |
 * |-对象可以嵌套
 *
 */

var p={
    a:1,
    'b-b':[
        1,2,3
    ],
    d:{
        p1:{
            a1:11
        }
    },
    '':function(){
        console.log('function calling'['green'])
    },
    c:function(){
        console.log('now the object is'.green+JSON.stringify(this));
    }
};
assert( typeof p==='object' );
p['']();

/**
 * |对象引用
 * |
 * |-对象通过引用来传递
 * |
 * |-它们永远不会被复制
 *
 */
var q=p;
q.hello='world';

assert( p===q );

p.c();   //{ a: 1, c: [Function], hello: 'world' }