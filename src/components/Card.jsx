import { Link } from 'react-router-dom'

function Card() {
  return (
    <Link className='border border-gray-300 rounded-lg p-4 pointer' to='/'>
      <h3 className='text-xl font-semibold'>iPhone 11</h3>
      <p className='text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, fugit.</p>
    </Link>
  )
}

export default Card
