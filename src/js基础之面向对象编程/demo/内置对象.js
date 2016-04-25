/**
 * Created by slashhuang on 16/4/25.
 */

/**
 * ====== JS中的内置对象,方法不可变=======
 *
 */


/**
 * Math对象
 */
var p = Math.random();
console.log(p);
console.log(Math.round(2.3));


/**
 * Number对象
 * ====>处理
 */
var q= 1;  //等价于====> var p = new Number(1);
console.log(q.toFixed(2));

/**
 * Date 对象用于处理日期和时间。
 * =====> 经典的有moment时间函数库
 */

console.log(Date.now());
console.log(new Date().getDay());
console.log(new Date().getDate());
console.log(new Date().getMonth()+1);
console.log(new Date().getFullYear());
console.log(new Date().toDateString())





