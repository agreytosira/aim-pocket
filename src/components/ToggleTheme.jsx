import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa6';

function ToggleTheme() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} className='text-xl'>
            {theme === 'light' ? <FaSun /> : <FaMoon />}
        </button>
    );
}

export default ToggleTheme;
