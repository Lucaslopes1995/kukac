import Layout1 from './components/Layout1';
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
	<Switch>
		<Route path='/' component={Layout1}/>
	</Switch>
  );
}

export default App;
