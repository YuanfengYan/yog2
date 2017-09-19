var category = yog.require('home/model/categoryModel');

module.exports.get = function (req, res, next) {
  	// console.log("list"); 
   // var list={list:{name:'yan',age:12}};
    // return list;
   var id=1;
   category.getMock(id,req).then(data){
		console.log("data");
		console.log(data);
	   res.render('home/page/index.tpl',{'list':data});
   }

}
