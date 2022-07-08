import { Button, Checkbox, Form, Input, InputNumber } from 'antd';
import React, { useContext, useState } from 'react';
import axios from 'axios';
import CardCep from '../components/CardCep';
import AppContext from '../context/context';


const App = () => {
	const {dataCEP, setDataCEP} = useContext(AppContext);
	const [answer, setAnswer] = useState([]);
	const [showAnswer, setShowAnswer] = useState(false);


  const onFinish = async (values) => {
	try {
		const response = await axios.post("http://localhost:3003/cep",values);

		const message = response?.data?.message;
		if(message){
			setShowAnswer(true)
			setAnswer(message)
			setDataCEP(message)
		}

		
	} catch (error) {
		
	}
	
  };


  const renderAnswer = () => {
	return <CardCep/>
	
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
	<>
    <Form
      name="basic"
      labelCol={{
        span: 8,
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
        label="CEP"
        name="cep"
        rules={[
          {
            required: true,
            message: 'Adicione um CEP!',
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
          Enviar
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