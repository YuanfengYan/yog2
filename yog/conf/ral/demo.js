/**
 * @file 后端服务配置DEMO
 * @author fis@baidu.com
 */

/**
 * @file 后端服务配置从平台API接口获取数据
 * @author fis@baidu.com
 */
// var _ = require('lodash');
  var defautlOption = {
      // unpack: 'json', // 约定服务端返回JSON数据
      // pack: 'form',   // 数据封装为form
      // method: 'POST',// 使用POST请求
      // encoding: 'gbk',// 服务器返回gbk编码
      // balance: 'random',// 负载均衡策略
      // protocol: 'http', // 使用http协议请求
      // retry: 2,         // 请求重试次数
      // timeout: 500,      // 请求最长超时时间500ms
      protocol: 'http',               // 使用http协议请求
      pack: 'querystring',            // 数据封装为query
      unpack: 'json',                 // 约定服务端返回JSON数据
      method: 'GET',                  // 使用GET请求
      balance: 'roundrobin',          // 负载均衡策略
      timeout: 200000,                  // 请求最长超时时间500ms
      retry: 3,                       // 请求重试次数
       // 后端地址配置
      server: [
          { host: '127.0.0.1', port: 8085}
      ]
  }

// var userOption = {};

// switch (process.env.YOG_ENV) {
//     case "dev": userOption = { server: [{ host: '192.168.0.73', port: 9999 }] }; break;                  //测试环境
//     case "dev9999": userOption = { server: [{ host: '192.168.0.73', port: 9999 }] }; break;  
//     case "prod": userOption = { server: [{ host: '115.159.43.44', port: 8210 }] }; break;                 //生产环境
//     case "wangJia": userOption = { server: [{ host: 'enetad.vicp.net', port: 80 }] }; break;               //王佳本地环境
// }
// console.log(_.merge({}, defautlOption, userOption))
module.exports = {                      // 声明服务名为CMS
    'DEMO': defautlOption
};

//   'DEMO':{
//     protocol: 'http',               // 使用http协议请求
//     pack: 'querystring',            // 数据封装为query
//     unpack: 'json',                 // 约定服务端返回JSON数据
//     method: 'GET',                  // 使用GET请求
//     balance: 'roundrobin',          // 负载均衡策略
//     timeout: 200000,                  // 请求最长超时时间500ms
//     retry: 3,                       // 请求重试次数
//     // 后端地址配置
//     server: [

//         {
//             host: '192.168.0.73', //测试环境
//             port: 9999              //端口
//         }

//     ]
// }
