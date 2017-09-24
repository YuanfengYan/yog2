/**
 * @file 后端服务配置DEMO
 * @author fis@baidu.com
 */
module.exports.DEMO = {
      protocol: 'http',               // 使用http协议请求
      pack: 'querystring',            // 数据封装为query
      unpack: 'json',                 // 约定服务端返回JSON数据
      method: 'GET',                  // 使用GET请求
      balance: 'roundrobin',          // 负载均衡策略
      timeout: 200000,                  // 请求最长超时时间500ms
      retry: 3,                       // 请求重试次数
       // 后端地址配置
      server: [
            {
            host: '127.0.0.1', //测试环境  本地Apache服务器
             // port:  80       //端口  默认端口配置为80端口
        }
      ]
  }

