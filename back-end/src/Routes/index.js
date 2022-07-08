const {Router} = require('express');

const {Palindromos, trococomMenosNotas, getDataCep, criaNovoVeiculo} = require('../controllers');

const router = Router();



router.post('/palindromos/',Palindromos);

router.post('/troco/',trococomMenosNotas);

router.post('/cep/',getDataCep);

router.post('/veiculos/',criaNovoVeiculo);



module.exports = router;
