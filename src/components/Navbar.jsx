import { Link, useLocation } from 'react-router-dom'
import ToggleTheme from './ToggleTheme'

function Navbar() {
  const location = useLocation().pathname

  return (
    <nav className='py-4'>
      <div className='container mx-auto'>
        <div className='flex justify-between align-center'>
          <h1 className='text-2xl font-bold text-blue-600'>
            <Link to='/'>AimPocket</Link>
          </h1>
          <ul className='flex items-center gap-6'>
            <li>
              <Link to='/' className={`${location == '/' && 'text-blue-600'} font-semibold`}>
                Beranda
              </Link>
            </li>
            <li>
              <Link to='/about' className={`${location == '/about' && 'text-blue-600'} font-semibold`}>
                Tentang
              </Link>
            </li>
            <li className='flex items-center aspect-square size-3'>
              <ToggleTheme />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
