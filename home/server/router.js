// var baseOptions = yog.require('common/baseOptions.js');
// var language = yog.require('common/language.js');

module.exports = function(router){
    // you can add app common logic here
    // router.use(function(req, res, next){
    // });

    // also you can add custom action
    // require /spa/some/hefangshi
    // router.get('/some/:user', router.action('api'));
    
    // or write action directly
    // router.get('/some/:user', function(res, req){});

    // a restful api example
  router.use(function(req, res, next){
        console.log('中间件');//添加公共加载部分数据
        next();
    });
    router.route('/').get(router.action('list').get);
    router.route('/list').get(router.action('list').get);
    router.route('/test').get(router.action('test').get);
 }
