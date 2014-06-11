var logic = require('./logic');

exports.get = function(req, res){
	res.writeHead(200, {
		'Content-Type' : 'text/html'
	});

	res.end(
		logic.page('Exponente', logic.navbar(), [		
			'<p>Ingrese un numero para calcular</p>',
			'<form name="squared" action="/squared" method="get">',
			'DE <input type="text" name="a" /> ',
			(!isNaN(req.a)  ? ('<p> {a} Exponente ^ {a} = {sq} </p>').replace('{a}', req.a).replace('{a}', req.a).replace('{sq}', (req.a*req.a)) : ''),
			'</form>'
		].join('\n'))
	);

}
