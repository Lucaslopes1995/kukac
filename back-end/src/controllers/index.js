const nPalindromos = require('../palindromo')
const troco = require('../trococomMenosNotas')
const getCep = require('../models');
const criaVeiculo = require('../../veiculos');


const Palindromos = (req,res) => {
	const {n1,n2} = req.body;
	if(n1<0 || n2<0) return res.status(402).json({message: "Número 1 e numero 2 precisam ser maior que 0"});

	if(n2 < n1) return res.status(402).json({message: "n1 não pode ser maior que n2"});

	const palindromos = nPalindromos(n1,n2)

	return res.status(201).json({message: palindromos});

}

const trococomMenosNotas = (req,res) => {
	const {valorCompra,dinheirousuario} = req.body;
	if(!valorCompra || !dinheirousuario) return res.status(402).json({message: "Está faltando Dados"});

	if(valorCompra > dinheirousuario) return res.status(402).json({message: "Valor da Compra não pode ser maior que o Dinheiro do Usuário"});

	const trocoENotas = troco(valorCompra,dinheirousuario)

	return res.status(200).json({message: trocoENotas});

}

const getDataCep = async (req,res) => {
	const {cep} = req.body;
	if(!cep) return res.status(402).json({message: "Está faltando Dados"});

	const dataByCep = await getCep(cep);

	if (!dataByCep) res.status(402).json({message: "Não foi Possível Encontrar dados"});
	console.log(dataByCep);

	return res.status(200).json({message: dataByCep});

}

const criaNovoVeiculo = async (req,res) => {
	const {tipo, modelo, anoDeFabricação, marca, portas, passageiros} = req.body;
	console.log(req.body);

	let veiculo=false;

	if(tipo === "carro"){
		veiculo = await criaVeiculo({tipo, modelo, anoDeFabricação, marca, portas})
	}

	if(tipo === "moto"){
		veiculo = await criaVeiculo({tipo, modelo, anoDeFabricação, marca, passageiros})
	}

	if(!veiculo) return res.status(402).json({message: "Problemas para Cadastrar Veículo"});


	return res.status(200).json({message: "Veículo Cadastrado com Sucesso"});

}

module.exports = {Palindromos, trococomMenosNotas, getDataCep, criaNovoVeiculo}