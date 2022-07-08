import { Button, Form, Input, InputNumber, Select } from 'antd';
import axios from 'axios';
import React, { useContext } from 'react';
import AppContext from '../context/context';
const layout = {
	labelCol: {
		span: 16,
	},
	wrapperCol: {
		span: 16,
	},
};
const { Option } = Select;
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} é obrigatório!',
  types: {
    number: '${label} é do tipo número!',
  },
  number: {
    range: '${label} precisa ser maior que ${min}',
  },
};




/* eslint-enable no-template-curly-in-string */

const App = () => {

  const {veiculo, setVeiculo} = useContext(AppContext);

  const onFinish = async (values) => {
	  
	  let dados;
	  
	  console.log(values.veiculo.tipo.value);
	if(values.veiculo.tipo.value ==="moto"){
		dados = {...values.veiculo, passageiros:values.veiculo.passageiros.value, tipo:"moto"}

	}

	if(values.veiculo.tipo.value ==="carro"){
		dados = {...values.veiculo, portas:values.veiculo.portas.value, tipo:"carro"}

	}



	const response = await axios.post("http://localhost:3003/veiculos",dados);
		console.log(response);
		const message = response?.data?.message;

		console.log(message);






  };

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>

		<Form.Item
        name={['veiculo', 'tipo']}
        label="Tipo de Veículo"
        rules={[
          {
            required: true,
          },
        ]}
      	>
        	<Select
			labelInValue
			defaultValue={{
			value: 'veiculo',
			label: 'veiculo',
			}}
			style={{
			width: 120,
			}}
			onChange={(e) =>setVeiculo(e.value)}
			>
				<Option value="veiculo" hidden>veiculo</Option>
				<Option value="carro">Carro</Option>
				<Option value="moto">Moto</Option>
			</Select>
      </Form.Item>
		


			





















      <Form.Item
        name={['veiculo', 'modelo']}
        label="Modelo"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['veiculo', 'anoDeFabricação']}
        label="Ano de fabricação"
        rules={[
          {
			
            required: true,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      

	  <Form.Item
        name={['veiculo', 'marca']}
        label="Marca"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>




	  { veiculo ==="carro" &&

			<Form.Item
			name={['veiculo', 'portas']}
			label="Portas"
			rules={[
			{
				required: true,
			},
			]}
			>
				<Select
				labelInValue
				defaultValue={{
				value: '2',
				label: '2',
				}}
				style={{
				width: 120,
				}}
				// onChange={(e) =>setVeiculo(e.value)}
				>
					<Option value="2">2</Option>
					<Option value="3">3</Option>
					<Option value="4">4</Option>
				</Select>
			</Form.Item>


	  }

		{ veiculo ==="moto" &&

		<Form.Item
		name={['veiculo', 'passageiros']}
		label="Passageiros"
		rules={[
		{
			required: true,
		},
		]}
		>
			<Select
			labelInValue
			defaultValue={{
			value: '1',
			label: '1',
			}}
			style={{
			width: 120,
			}}
			// onChange={(e) =>setVeiculo(e.value)}
			>
				<Option value="1">1</Option>
				<Option value="2">2</Option>
			</Select>
		</Form.Item>


		}


      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 16 }}>
        <Button type="primary" htmlType="submit">
          Cadastrar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;