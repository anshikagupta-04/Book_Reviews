import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from '../shared/Navbar';
import Home from '../components/Home';
import Login from '../components/Login';
import Reviews from '../components/Reviews';
import Signup from '../components/Signup';

function App() {

  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/signup' element={<Signup />}/>
      </Routes>
    </Router>
  )
}

export default App
