/**
 * Created by slashhuang on 16/5/4.、
 * 单个reducer的redux实现
 */


/**
 * 引入redux的接口
 */
var redux = require('redux');
var createStore= redux['createStore'];
/**
 * 创建store的初始状态
 */
var initialState = {
    "init":'initState'
};
/**
 * 创建store的增删改查
 */
var reducer=function(state,action){
    switch(action.type){
        case "hello":
            return Object.assign({},state,{"hello:":"world"});
        default:
            return state;
    }
};
/**
 * 初始化数据管理方案
 * |-调用函数式api,将reducer和createStore、初始值组合起来
 */
var store = createStore(reducer,initialState);
/**
 * 调用store的getState(getter)获取当前的数据状态
 */
console.log(store.getState());


/**
 * 添加执行动作，具体化数据管理的操作
 */
var action={
    type:'hello'
};
/**
 * 调用store的dispatch接口，分发动作到reducer(进行增删改查)
 */
store.dispatch(action);
console.log(store.getState());



