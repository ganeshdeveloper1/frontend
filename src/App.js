import './App.css'
import Home from './Components/HomePage'
import Navbar from './Components/Nav'
import Footer from './Components/Footer'
import { Routes, Route } from 'react-router-dom'
import Ranker from './Components/Ranker'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/ranker' element={<Ranker />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
