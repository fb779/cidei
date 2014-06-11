var logic = require('./logic');

exports.get = function(req, res){
	res.writeHead(200, {
		'Content-Type' : 'text/html'
	});

	res.end(
		logic.page('Exponente', logic.navbar(), [
			'<p>Ingrese los numero para calcular</p>',
			'<form name="divide" action="/divide" method="get">',
			'Primer Numero <input type="text" name="a" /> ',
			'Segundo Numero <input type="text" name="b" /> ',
			'<input type="submit" value="Calcular" /> ',
			(!isNaN(req.a) && !isNaN(req.b) ? ('<p> Dividir {a} / {b} = {rt} </p>').replace('{a}', req.a).replace('{b}', req.b).replace('{rt}', (req.a / req.b)) : ''),
			'</form>'
		].join('\n'))
	);

}
