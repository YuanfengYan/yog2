module.exports.get = function (req, res, next) {

  	console.log("index"); 
   var list={list:{name:'yuan',age:22}};
    // return list;
   res.render('home/page/index.tpl',{'list':list});

}
