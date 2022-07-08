const nPalindromos = (n1,n2) => {
	let npalindromos = [];

	for(let i =n1;i<=n2;i+=1){
		const nString = i.toString().split('').join()
		const nInvertido = i.toString().split('').reverse().join();
		if(nString===nInvertido){
			npalindromos= [...npalindromos,i];
		}
	}


	
	return(npalindromos);
}

// nPalindromos(0,10)


module.exports = nPalindromos;