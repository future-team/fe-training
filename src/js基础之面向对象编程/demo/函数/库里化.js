/**
 * Created by slashhuang on 16/4/27.
 *
 * 库里化
 */

/**
 * ====topic1====
 * |curry化函数形式
 * |- 将多参函数转换为一系列单参函数并进行调用的技术
 */
var normal_func=function(a,b){
    return a+b
};
// 将多参函数===转换为===> 单参函数
var curry_func=function(a){
    return function(b){
        return a+b;
    }
};

console.log(normal_func(1,2));
console.log(curry_func(1)(2));