import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Card({ id }) {
  return (
    <Link className='border border-gray-300 rounded-lg p-4 pointer hover:border-blue-600 transition-all duration-300 ease' to={`/detail/${id}`}>
      <img className='aspect-video object-contain rounded-md' src='https://cdn.eraspace.com/media/catalog/product/a/p/apple_iphone_11_black_new_1_7.jpg' alt='' />
      <div className='bg-slate-300 w-full h-2 rounded-xl my-4'>
        <div className='bg-blue-600 w-[75%] h-2 rounded-xl'></div>
      </div>
      <h3 className='text-lg text-slate-900 font-bold'>iPhone 11</h3>
      <h4 className='text-base text-slate-600 font-semibold'>Rp7.950.000</h4>
      <p className='text-[12px]'>
        tersisa <span className='font-bold text-red-600'>Rp7.250.000</span>
      </p>
    </Link>
  )
}

Card.propTypes = {
  id: PropTypes.string.isRequired
}

export default Card
