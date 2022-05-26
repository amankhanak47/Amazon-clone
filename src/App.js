// import logo from './logo.svg';
import {BrowserRouter as  Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import reducer, { initialState } from './components/reducer';
import { StateProvider } from './components/StateProvider';

function App() {
  return (
    
    <Router>
    <div className="App">
    <Header/>
      <Routes>
        <Route path="/" element={[<Home/>]}/>
        <Route path="/checkout" element={[<Checkout/>]}/>
        <Route path='/login' element={[<Login/>]}/>
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
