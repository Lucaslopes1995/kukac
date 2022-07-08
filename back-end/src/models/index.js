const axios = require("axios")

const getCep = async(cep) => {
	try {
		const URL = `https://viacep.com.br/ws/${cep}/json/`
		const response = await axios.get(URL)
		// console.log(response.data);
		return response.data
		
	} catch (error) {
		return false;
	}

}


module.exports = getCep;