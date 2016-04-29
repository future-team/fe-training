/**
 * Created by slashhuang on 16/4/29.
 * 作业的答案
 */

/**========question1=======
 * | 闭包使用
 *
 *
 * |-题目描述
 *
 创建一个工具能够产生如下序列

 var sequence1 = new Sequence();
 sequence1.next() --> return 1;
 sequence1.next() --> return 2;
 **/

var Sequence = function(){
    this.targetNum=0;
};
Sequence.prototype.next=function(){
    this.targetNum++;
    return this.targetNum;
};
var sequence1 = new Sequence();
console.log(sequence1.next());
console.log(sequence1.next());



/**========question2=======
 * | 类 + 方法 + 抽象 +  级联 + 原型
 *
 * |- 问题描述
 *
 创建一个类_class使得它的实例拥有如下特征

 var _instance = new _class();
 _instance.addString('hello world').removeAll('world') --->"hello "
 *
 **/

var _class=function(){
   this.targetString='';
};
_class.prototype.addString=function(str){
    this.targetString = str;
    return this;
};
_class.prototype.removeAll=function(str){
    this.targetString = this.targetString.replace(str,'');
    return this.targetString
};
var _instance = new _class();
console.log(_instance.addString('hello world').removeAll('world'));

/**========question3=======
 * | 类 + 继承 + 原型
 *
 * | 问题描述
 *
 var _class1=function(){
    this.a='a';
    this.b='b';
 }
 var _class2=function(){
    this.c='c';
    this.d='d';
 }
 已有如上两个类(构造函数)

 -------- 编写代码功能要求---------
 1、让_class2继承_class1
 2、所有_class2的实例具有以下特征
 var _class2Instance = new _class2();
 _class2Instance.a -----> "a"
 *
 **/
var _class1=function(){
    this.a='a';
    this.b='b';
};
var _class2=function(){
    this.c='c';
    this.d='d';
};
_class2.prototype =new _class1();
var _class2Instance = new _class2();
console.log(_class2Instance.a);






