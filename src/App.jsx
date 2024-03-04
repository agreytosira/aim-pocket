import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Detail from './pages/Detail'
import AddSaving from './pages/AddSaving'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/add' element={<AddSaving />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
