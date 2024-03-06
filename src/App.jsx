import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DetailPage from './pages/DetailPage';
import AddSavingPage from './pages/AddSavingPage';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
    const savedTheme = localStorage.getItem('theme');
    const [theme, setTheme] = useState(savedTheme || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('class', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    const themeData = {
        theme,
        toggleTheme
    };

    return (
        <ThemeProvider value={themeData}>
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
        </ThemeProvider>
    );
}

export default App;
