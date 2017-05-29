var express = require('express');
var fort = require('./lib/paras.js');
var app = express();


/* Hardcoded data  */

/* Hardcoded data  */

// setting the templating engine
app.set('view engine', 'pug');
app.set('port', process.env.PORT || 3000);


// to serve static files
// middleware for showing tests
app.use(function(req, res, next){
	res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
	next();
});




app.use(express.static(__dirname + '/public')); // static content is in the directory 'public'

app.get('/', function(req, res){
	res.render('test', {data: fort.getF()});
});

app.get('/about', function(req, res, next) {
	res.render('about', {
		fortune: fort.getF(),
		pageTestScript: '/qa/about-test.js'
	});
});

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
	res.send('500 - Internal Error'); // Node uses res.end, instead of res.send

});



	app.listen(app.get('port'), function () {
	console.log('Express started on port ' + app.get('port'));
});
