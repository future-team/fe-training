/**
 * Created by slashhuang on 16/5/4.、
 * 多个reducer的redux实现
 */


/**
 * 引入redux的接口
 */
var redux = require('redux');
var createStore= redux['createStore'];
var combineReducers =  redux['combineReducers'];

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
        reducer1:reducer1,//命名空间
        reducer2:reducer2
    }
),{});
/**
 * 调用store的getState(getter)获取当前的数据状态
 */
console.log(store.getState());


/**
 * 添加执行动作，具体化数据管理的操作
 */
var action1={
    type:'reducer1'
};
var action2={
    type:'reducer2'
};
/**
 * 调用store的dispatch接口，分发动作到reducer(进行增删改查)
 */
store.dispatch(action1);
console.log(store.getState());
store.dispatch(action2);
console.log(store.getState());



