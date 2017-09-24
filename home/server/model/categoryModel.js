var yog = require('yog2-kernel');
// var util = require('../lib/util');
// 可以存放一些数据层代码，如后端API请求等
module.exports.get = function (id,req) {
  
        var list={list:{name:'yan',age:12}};
        return ;
};
module.exports.getMock = function (id,req) {
	console.log('MOCK1')
    return yog.ralPromise('DEMO', {    //promise请使用yog.ralPromise
        path: '/mock/test.json',
        method: 'GET',
        data:{
        	
        }
    })
};


module.exports.search = function (name, region) {
	console.log(123331)
    return yog.ralP('MAPAPI', {
        data: {
            region: region||'',
            query: name||''
        }
    });
}