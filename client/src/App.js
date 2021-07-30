import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import HomePage from './components/auth/HomePage';
import RegisterPage from './components/auth/RegisterPage';
import LoginPage from './components/auth/LoginPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/register" component={RegisterPage}/>
        <Route path="/login" component={LoginPage}/>
      </Switch>
    </Router>
  );
}

export default App;
