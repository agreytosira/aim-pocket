import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import DetailPage from './pages/DetailPage'
import AddSavingPage from './pages/AddSavingPage'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/detail/:id' element={<DetailPage />} />
        <Route path='/add' element={<AddSavingPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
