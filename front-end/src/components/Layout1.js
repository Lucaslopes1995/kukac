import Palindromos from '../Pages/Palindromos';
import ProcuraPorCEP from '../Pages/ProcuraPorCEP';
import RetornoEmTroco from '../Pages/RetornoEmTroco';
import Veiculos from '../Pages/Veiculos';

import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
  } from '@ant-design/icons';
  import { Layout, Menu } from 'antd';
  import React, { useContext, useState } from 'react';
import AppContext from '../context/context';
  const { Header, Sider, Content } = Layout;
  
  const App = () => {
	const [collapsed, setCollapsed] = useState(false);
	const {question, setQuestion} = useContext(AppContext);

	const onClick = (e) => {
		setQuestion(e.key-1)
	  };


	return (
	  <Layout>
		<Sider trigger={null} collapsible collapsed={collapsed}>
		  <div className="logo" />
		  <Menu
			theme="dark"
			mode="inline"
			defaultSelectedKeys={['1']}
			onClick={onClick}
			items={[
			  {
				key: '1',
				label: 'Palíndromos',
			  },
			  {
				key: '2',
				label: 'Retorno em Troco',
			  },
			  {
				key: '3',
				label: 'Veículos',
			  },
			  {
				key: '4',
				label: 'Procura por CEP',
			  },
			]}
		  />
		</Sider>
		<Layout className="site-layout">
		  <Header
			className="site-layout-background"
			style={{
			  padding: 0,
			}}
		  >
			{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
			  className: 'trigger',
			  onClick: () => setCollapsed(!collapsed),
			})}
		  </Header>
		  <Content
			className="site-layout-background"
			style={{
			  margin: '24px 16px',
			  padding: 24,
			  minHeight: 280,
			  display:'flex',
			  'flex-direction': 'column',
			  'align-items': 'center'

			}}
		  >
			{	console.log(question)}
			{question === 0 && <Palindromos/>}
			{question === 1 && <RetornoEmTroco/>}
			{question === 2 && <Veiculos/>}
			{question === 3 && <ProcuraPorCEP/>}
		  </Content>
		</Layout>
	  </Layout>
	);
  };
  
  export default App;
  