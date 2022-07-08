import { Card } from 'antd';
import React, { useContext } from 'react';
import AppContext from '../context/context';

const App = () => {
	const {dataCEP, setDataCEP} = useContext(AppContext);
	
  return(<>
    <Card
      title="Dados do CEP"
      style={{
        width: 300,
		'max-width': '100%'
		
      }}
    >
		{Object.keys(dataCEP).map(el =>{

			return (<div className='divs-cep'>
				<span>{`${el}: `}</span>
				<span>{dataCEP[el]}</span>
			</div>
			)
		})}

    </Card>
  </>)
}

export default App;