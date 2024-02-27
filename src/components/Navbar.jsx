import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation().pathname

  return (
    <nav className='p-4'>
      <div className='container mx-auto'>
        <div className='flex align-center justify-between'>
          <h1 className='font-bold text-blue-600 text-2xl'>
            <Link to='/'>AimPocket</Link>
          </h1>
          <ul className='flex gap-4'>
            <li>
              <Link to='/' className={`${location == '/' && 'text-blue-600'} font-semibold`}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about' className={`${location == '/about' && 'text-blue-600'} font-semibold`}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
