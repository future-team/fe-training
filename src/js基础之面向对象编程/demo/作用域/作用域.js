/**
 * Created by slashhuang on 16/4/27.
 * 作用域
 */


/**
 * ===topic1 块级作用域
 * 块级作用域测试
 */
{
    {
        var p='block scope does not really block';
    }
}
console.log("=======",p);

/**
 * ===topic2 函数作用域
 * | 函数作用域测试
 * |- 闭包
 */

function hello(){
    var q='i"m in a function now ';
    return function(){
        console.log("由于闭包，我可以在hello函数执行后，继续保持对q的访问====> ",q);
    }
}
try{
    console.log("the q value is ",q);//执行错误，抛向catch代码块
}catch(e){
    console.log("error happened,because q is not defined")
}

hello()();