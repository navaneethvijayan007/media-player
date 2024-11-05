import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import History from  './pages/History'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
    {/* header */}
    <Header/>
    <Routes>
      {/* Path for Landing, Home, History */}
      <Route path='/' element={<Landing />} />
      <Route path='/home' element={<Home />} />
      <Route path='/history' element={<History />} />
    </Routes>
    {/* footer */}
    <Footer/>
    </>
  )
}

export default App