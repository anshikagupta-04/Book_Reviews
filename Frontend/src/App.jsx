import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css'
import Home from './components/Home';
import Login from './components/Login';
import Reviews from './components/Reviews';
import Signup from './components/Signup';
import Navbar from './shared/Navbar';
import AddReview from './components/AddReview';

function App() {

  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/signup' element={<Signup />}/>
        <Route path='/addreview' element={<AddReview/>}/>
      </Routes>
    </Router>
  )
}

export default App
