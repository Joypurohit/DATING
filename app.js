var express=require('express');
var app=express();
app.use(express.static(__dirname + "/public"));
app.get('/',function(req,res){
	res.render('landing.ejs');
});

app.listen(3000,function(){console.log('server')});
