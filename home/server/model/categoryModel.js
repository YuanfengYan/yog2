var yog = require('yog2-kernel');
// var util = require('../lib/util');
// 可以存放一些数据层代码，如后端API请求等
module.exports.get = function (id,req) {
  
        var list={list:{name:'yan',age:12}};
        return ;
};
module.exports.getMock = function (id,req) {
	console.log('MOCK')
    return yog.ralPromise('DEMO', {    //promise请使用yog.ralPromise
        path: '/api/user',
        method: 'GET',
    });
}
