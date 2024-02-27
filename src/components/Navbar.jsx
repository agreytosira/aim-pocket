import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='p-4'>
      <div className='container flex align-center justify-between'>
        <h1 className='font-bold text-blue-600 text-2xl'>AimPocket</h1>
        <ul className='flex gap-4'>
          <li>
            <Link to='/' className='font-semibold'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about' className='font-semibold'>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
