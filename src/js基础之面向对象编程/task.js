/**
 * 请同学们在听完此次面向对象编程之后做如下两个练习
 */

/**========question1=======
 * | 类 实例的基本使用
 *
 *
 * |-题目描述
 *
 创建一个工具能够产生如下序列
 
 var sequence1 = new Sequence();
 sequence1.next() --> return 1;
 sequence1.next() --> return 2;
 **/




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
 让_class2继承_class1

 var _class2Instance = new _class2();

 _class2Instance.a -----> "_a"
 *
 **/





