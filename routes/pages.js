// 动态路由文件

var express = require('express');
var router = express.Router();
var glob = require('glob');	

var srcDirName = './public/src/*.js'; //入口文件夹路径

glob.sync(srcDirName).forEach(function (name) {
    //n 获取文件名字
    var url = '/' + name.slice(name.lastIndexOf('/'), name.length - 3).split("/")[1];

    router.get(url, function(req, res, next) {
    	
    	// if(req.session.lastPage) {
    	// 	console.log(req.session.lastPage);
    	// }

    	// req.session.lastPage = url;
	  	res.render('pages' + url);
	});
});

router.get('/hello', function(req, res, next) {
  	res.send('  hello ! welcom to the world !');
});

module.exports = router;