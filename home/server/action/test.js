var category = yog.require('home/model/categoryModel');
var _= require('lodash')
module.exports.get = function (req, res, next) {
  	// console.log("list"); 
   // var list={list:{name:'yan',age:12}};
    // return list;
console.log("test.js12");
    category.getMock(req.query.name, req.query.region)
        .then(function (data) {
        	console.log(data)
        	  var list=_.merge({},data.data,{list:{name:'yan',age:12}});
			    // return list;
			   res.render('home/page/index.tpl',{'list':list});
        })
        .catch(next);

}
