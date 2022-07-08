import { Button, Checkbox, Form, Input, InputNumber } from 'antd';
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {

	const [answer, setAnswer] = useState([]);
	const [showAnswer, setShowAnswer] = useState(false);


  const onFinish = async (values) => {
	try {
		const response = await axios.post("http://localhost:3003/troco",values);
		const message = response?.data?.message;
		if(message){
			setShowAnswer(true)
			setAnswer(message)
		}
		console.log(message);
		
	} catch (error) {
		
	}
	
	
    console.log('Success:', values);
  };


  const renderAnswer = () => {
	console.log(answer);
	if(answer){
		return (
			<div>
				<div>
					<h3>Valor da Compra</h3>
					<p>{answer.valorCompra}</p>
				</div>
				<div>
					<h3>Valor Troco</h3>
					<p>{answer.troco}</p>
				</div>
				<div>
					<h3>Notas Utilizadas</h3>
					<div>
						<h4>Notas de 1 Utilizadas {answer.notas[1]}</h4>
						<h4>Notas de 10 Utilizadas {answer.notas[10]}</h4>
						<h4>Notas de 100 Utilizadas {answer.notas[100]}</h4>

					</div>
				</div>
			
			</div>
			)
	}else{
		return(
			<>
			<h2>Palíndromos</h2>
			<p>Nenhum Número Palíndromo</p>
			</>
		)
	}
	
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
	<>
    <Form
      name="basic"
      labelCol={{
        span: 16,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Valor da Compra"
        name="valorCompra"
        rules={[
          {
            required: true,
            message: 'Adicione o primeiro Número!',
          },
        ]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        label="Pagamento"
        name="dinheirousuario"
        rules={[
          {
            required: true,
            message: 'Adicione o segundo Número!',
          },
        ]}
      >
        <InputNumber />
      </Form.Item>


      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 8,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
	{ (showAnswer)&&

	

	renderAnswer()


	}
	</>
  );
};

export default App;