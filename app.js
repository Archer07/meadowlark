var express = require('express');

var app = express();


app.set('port', process.env.PORT || 3000);


// 404 custom response middleware

app.use(function(req, res){
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not found');
});

app.use(function(req, res) {
	console.log(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - Internal Error');

});


app.listen(app.get('port'), function () {
	console.log('Express started on port ' + app.get('port'));
});
