import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Login from './components/Login'
import Home from './pages/Home';

function App() {

  return (
    <div className=''>
     <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
