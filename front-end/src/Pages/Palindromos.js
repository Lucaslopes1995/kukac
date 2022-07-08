import { Button, Checkbox, Form, Input, InputNumber } from 'antd';
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {

	const [answer, setAnswer] = useState([]);
	const [showAnswer, setShowAnswer] = useState(false);


  const onFinish = async (values) => {
	try {
		const response = await axios.post("http://localhost:3003/palindromos",values);
		console.log(response);
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
	if(answer.length >0){
		return (
			<>
			<h2>Palíndromos</h2>
			{answer.map((el) => (<p key={el}>{el}</p>))}
			</>
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
        label="Numero Menor"
        name="n1"
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
        label="Numero Maior"
        name="n2"
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
          span: 16,
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