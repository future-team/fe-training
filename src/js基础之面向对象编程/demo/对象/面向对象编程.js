/**
 * Created by slashhuang on 16/4/26.
 */


//用于展示的工具函数
var assert=null;
(function(globalEnv){
    if(globalEnv && globalEnv.document){
        assert= function(bool) {
            if (bool) {
                console.log('assert test passed')
            } else {
                throw new Error('assert test failed')
            }
        }}else{
        assert = require('assert');
    }}(this));
//========================  进入正题  ==============================

/**
 * ===topic1===
 *  类的基本使用方式
 */
(function(){
    /**
     * |创建类(函数)
     * |- 实例化时，构造函数(constructor)与类同名
     */
    var _class = function(args){
        //配置实例属性
        this.a='a';
        this.b='b';
        this.args=args||'args';
    };

    /**
     * |创建_class的实例
     */
    var _instance1 = new _class();
    var _instance2 = new _class([1,2,3]);

    console.log(_instance1);
    console.log(_instance2);
//判断是否是_class的实例
    assert(_instance1 instanceof _class);
    assert(_instance2 instanceof _class);
}());

/**
 * ===topic2===
 *  类的继承、原型
 */
(function(){
    /**
     * 创建类
     */
    var _class=function(){
        this._class_property = '_class_property';
    };
    /**
     * |  利用原型创建模板对象
     * |- 所有类的实例共享模板对象的属性、方法
     * |- 节约内存
     */
    _class.prototype._inherit = function(){
        //通常，this值的绑定发生在调用时(very late binding)
        console.log('using prototype  === ',this._class_property);
    };
    var _instance1 = new _class();
    var _instance2 = new _class();
    _instance1._inherit();
    //同一个类的实例所继承的方法/属性来自同一个模板对象(prototype)
    assert(_instance1._inherit === _instance2._inherit);
    assert(_instance2._inherit === _instance1.__proto__._inherit);

    /**
     * |继承二
     * |- 通过原型链prototype，实现类的继承(定义模板对象)
     * |- 子类
     * |- 父类
     */
    var _class_father=function(){
        this.father='father';
        this.fatherFunc=function(){
            return this.child;
        }
    };
    var _class_child=function(){
        this.child='child';
        _class_father.call(this);
    };
    //通过原型链,手动实现js中的继承
    Function.prototype.inherit_from=function(father){
        if(typeof father=='function'){
            //将子类构造函数的prototype替换为为父类的实例
            //将父类原型及实例属性、方法挂载至子类的原型链中
            this.prototype=new father();
        }else{
            throw TypeError('please use function as father class')
        }
    };
    //子类继承自父类
    _class_child.inherit_from(_class_father);

    var childInstance = new _class_child();
    console.log(childInstance.fatherFunc());
    console.log(childInstance.father);
    assert(childInstance instanceof _class_child);
    assert(childInstance instanceof _class_father)
}());

/**
 * 差异化继承(不基于构造函数，通过定制一个新对象，指明和它的基本对象的区别)
 * |- 轻量级的继承方式
 */
(function(){
    var father_instance={
        a:1,
        b:2
    };
    var child_instance= Object.create(father_instance);
    child_instance.child='child';
    console.log(child_instance.a);
}());
