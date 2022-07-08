import React, { useState } from 'react';
import AppContext from './context';

function Provider({ children }) {
  const [question, setQuestion] = useState(0);
  const [dataCEP, setDataCEP] = useState(0);
  const [stateB, setStateB] = useState('initialStateB');
  const [veiculo, setVeiculo] = useState('initialStateB');
  
  const contextValue = {
    stateB,
    setStateB,
	question,
	setQuestion,
	dataCEP,
	setDataCEP,
	veiculo, 
	setVeiculo
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;