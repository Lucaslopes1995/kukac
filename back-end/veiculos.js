const fs = require('fs/promises');

const path = require('path');

// path.resolve('veiculos.json');


// module.exports = {
// 	'config': path.resolve('src','config','config.js'),
// 	'models-path': path.resolve('src','models'),
// 	'seeders-path': path.resolve('src','seeders'),
// 	'migrations-path': path.resolve('src','migrations')

// }

const readFile = async () => {
  const readVeiculos = await fs.readFile('./veiculos.json', 'utf-8');
  return JSON.parse(readVeiculos);
};




const criaNovoVeiculo = async (veiculo) => {

	try {
		let veiculos = await readFile();

		if(!veiculos.length){
			veiculos = [veiculos]
		}


		fs.writeFile('veiculos.json', JSON.stringify([...veiculos,veiculo]));
		return true
	} catch (error) {
		return false
	}

	

}



module.exports = criaNovoVeiculo;