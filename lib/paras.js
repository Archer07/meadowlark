var fortunes = [
	'Lorem Ipsum bla bla bla',
	'This is a para',
	'Another pragrapgh and that is enough',
	'Ma name is EssoLojo'
];

exports.getF = function() {
  var fort = fortunes[Math.floor(Math.random() * fortunes.length)];
  return fort;
}
