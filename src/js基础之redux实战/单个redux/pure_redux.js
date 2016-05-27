/**
 * Created by slashhuang on 16/5/4.
 * 纯粹的redux数据管理方案
 *
 */


/**
 * 引入redux的接口
 */
import {createStore,combineReducers} from 'redux';

/**
 * 创建store的增删改查
 */
var reducer1=function(state,action){
    var initReducer1 = {
        "init":'reducer1'
    };
    var state = state || initReducer1;
    switch(action.type){
        case "reducer1":
            return Object.assign({},state,{"reducer1:":"reducer1"});
        default:
            return state;
    }
};
var reducer2=function(state,action){
    var initReducer2 = {
        "init":'reducer2'
    };
    var state=state || initReducer2;
    switch(action.type){
        case "reducer2":
            return Object.assign({},state,{"reducer2:":"reducer2"});
        default:
            return state;
    }
};
/**
 * 初始化数据管理方案
 * |-调用函数式api,将reducer和createStore、初始值组合起来
 * |-通过combineReducers，结合多个reducer进行页面管理
 * |-combineReducers为整个store状态提供了子命名空间
 */
var store = createStore(combineReducers(
    {
        reducer1,
        reducer2,
    }
),{});

/**
 * dom节点用于展示
 */
var contentNode = document.getElementById('contents');

/**
 * 注册事件进redux(react也是按照同样的原理进行代理的)
 * 这里修改了redux源码，更好演示redux的使用方式
 */
var addSubscribe= function(action){
    console.log(action);
    var stateNow = store.getState();
    var li = document.createElement('li');
    li.innerHTML= "执行action:"+JSON.stringify(action)+"\n结果为:"+JSON.stringify(stateNow);
    contentNode.appendChild(li);
};
store.subscribe(addSubscribe)
/**
 * 添加执行动作，具体化数据管理的操作
 */
var action = {
    type:'@@redux/INIT'
};
var action1={
    type:'reducer1'
};
var action2={
    type:'reducer2'
};
/**
 * 调用store的dispatch接口，分发动作到reducer(进行增删改查)
 */

document.getElementById("init").addEventListener('click',()=>{store.dispatch(action);});
document.getElementById("action1").addEventListener('click',()=>{store.dispatch(action1);});
document.getElementById("action2").addEventListener('click',()=>{store.dispatch(action2);});




