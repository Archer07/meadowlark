var express = require('express');

var app = express();


app.set('port', process.env.PORT || 3000);


// 404 custom response middleware 

app.use(function(req, res){
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not found');
});
