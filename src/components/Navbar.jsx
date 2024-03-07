import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ToggleTheme from './ToggleTheme'
import { FaBars } from 'react-icons/fa6'

function Navbar() {
  const location = useLocation().pathname
  const [mobileMenu, setMobileMenu] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu)
  }

  useEffect(() => {
    setMobileMenu(false)
  }, [location])

  return (
    <nav className='fixed top-0 left-0 z-50 w-full py-4 sm:static bg-slate-50 dark:bg-slate-900'>
      <div className='container mx-auto'>
        <div className='flex justify-between align-center'>
          <h1 className='text-2xl font-bold text-blue-600'>
            <Link to='/'>AimPocket</Link>
          </h1>
          <ul className='flex items-center gap-6'>
            <li className='hidden sm:flex'>
              <Link to='/' className={`${location == '/' && 'text-blue-600'} font-semibold`}>
                Beranda
              </Link>
            </li>
            <li className='hidden sm:flex'>
              <Link to='/about' className={`${location == '/about' && 'text-blue-600'} font-semibold`}>
                Tentang
              </Link>
            </li>
            <li className='flex items-center aspect-square size-3'>
              <ToggleTheme />
            </li>
            <li className='flex items-center sm:hidden aspect-square size-3'>
              <button onClick={toggleMobileMenu}>
                <FaBars />
              </button>
            </li>
          </ul>
        </div>
      </div>
      {mobileMenu && (
        <div className='container flex items-center justify-center h-[90dvh] py-4 mx-auto sm:h-auto'>
          <ul className='flex flex-col items-center gap-4'>
            <li>
              <Link to='/' className={`${location == '/' && 'text-blue-600'} font-semibold text-xl`}>
                Beranda
              </Link>
            </li>
            <li>
              <Link to='/about' className={`${location == '/about' && 'text-blue-600'} font-semibold text-xl`}>
                Tentang
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
