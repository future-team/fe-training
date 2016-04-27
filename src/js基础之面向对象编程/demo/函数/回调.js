/**
 * Created by slashhuang on 16/4/27.
 */


var _callback=function(callback){
    console.log('before callback');
    callback&&callback();
};
var callback=function(){
    console.log('======callback calling');
};

_callback(callback);
