const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./src/Routes');

const criaNovoVeiculo = require('./veiculos');




// const nPalindromos = require('./src/palindromo')
// const trococomMenosNotas = require('./src/trococomMenosNotas')

// const getCep = require('./src/models');

// getCep(35582000)






const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use('/',router);


const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
	console.info(`Ouvindo na Porta: ${PORT}`);
});
