// var configModel = yog.require('common/lib/configModel');
// var categoryModel = yog.require('common/model/categoryModel');
// var paginate = yog.require('common/lib/paginate.js');
// var navModel = yog.require('common/model/navModel.js');
// var _ = require('lodash');

// var navModel = yog.require('common/model/navModel.js');
module.exports.get = function (req, res, next) {

  	console.log("list"); 
   var list={list:{name:'yan',age:12}};
    // return list;
   res.render('home/page/index.tpl',{'list':list});

}
