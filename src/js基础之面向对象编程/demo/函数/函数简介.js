/**
 * Created by slashhuang on 16/4/27.
 * 函数简介【函数声明和表达式的区别】
 */


/**
 * ===topic1===
 * 测试函数声明与表达式的区别
 */
hello();//函数提升
world();//throw TypeError

/**
 * === 细节讲解 ===
 * 函数声明
 * |- js引擎执行初始化过程:
 * |- var hello=undefined;hello=function(){//执行代码};
 *
 */
function hello(){
   console.log('hello');
}
/**
 * 函数表达式
 * |-js引擎执行初始化过程:
 * |- var world=undefined;
 * |- 执行赋值function代码主体
 */
var world = function world(){
    console.log('world');
};


