const trococomMenosNotas = (valorCompra,dinheirousuario) => {
	const troco = dinheirousuario - valorCompra;
	let notas = {"100":0, "10":0, "1":0};
	let valorFaltante = troco;


	// while(valorFaltante>=100)
	while(valorFaltante>=100){
		valorFaltante = valorFaltante-100;
		notas[100] = notas[100]+1
	}
	console.log(valorFaltante)
	while(valorFaltante>=10){
		valorFaltante = valorFaltante-10;
		notas[10] = notas[10]+1
	}
	while(valorFaltante>=1){
		valorFaltante = valorFaltante-1;
		notas[1] = notas[1]+1
	}

	return {notas,valorCompra, troco}


}


module.exports = trococomMenosNotas;