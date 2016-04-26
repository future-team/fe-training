/**
 * Created by slashhuang on 16/4/25.
 */
var assert = require('assert');
/**
 * ====== JS中的内置对象,方法不可变=======
 *
 */


/**
 * Math对象
 * ===> 提供基本的数学函数如abs、sin等操作
 */
var p = Math.random();
console.log(p);
console.log(Math.round(2.3));


/**
 * Number对象
 * ====> 处理数据展示
 */
var q= 1;  //等价于====> var p = new Number(1);
console.log(q.toFixed(2));

/**
 * Date对象
 * =====> 用于处理日期和时间。经典的有moment时间函数库
 */

console.log(Date.now());
console.log(new Date().getDay());
console.log(new Date().getDate());
console.log(new Date().getMonth()+1);
console.log(new Date().getFullYear());
console.log(new Date().toDateString());

/**
 * JSON对象
 * ====> 轻量级的数据交换格式
 */
var normalObj={
    json:'json'
};
//序列化一个JSON值
var stringFy= JSON.stringify(normalObj);
//反序列化一个JSON值
var jsonToObj=JSON.parse(stringFy);
console.log(stringFy);
console.log(jsonToObj);

/**
 * 正则表达式
 * ===>  匹配一系列符合某个句法规则的字符串
 */
var regExpEg= new RegExp(/\d/g);
assert(true == regExpEg.test(1234))





