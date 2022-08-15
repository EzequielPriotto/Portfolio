import { Route } from 'wouter';
import './App.css';
import Header from './components/header/Header';
import Home from './views/home/Home';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Route path='/' component={Home}></Route>
    </div>
  );
}

export default App;
