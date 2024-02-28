import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { getSavingsByID } from '../data/dummy'
import { formatNumber } from '../utils/format'

function Card({ id, isCompleted }) {
  const data = getSavingsByID(id)
  const { name, imageUrl, target } = data

  const totalSaved = data.saved.reduce((total, current) => total + current.value, 0)
  const totalLess = target - totalSaved
  const percentage = (totalSaved / target) * 100

  return (
    <Link className='border border-gray-300 rounded-lg p-4 pointer hover:border-blue-600 transition-all duration-300 ease relative' to={`/detail/${id}`}>
      {isCompleted && <div className='bg-green-600 text-white text-xs font-semibold rounded-md py-1 px-2 absolute top-4 left-4'>Completed</div>}
      <img className='aspect-video object-contain rounded-md' src={imageUrl} alt={name} />
      <div className='flex items-center gap-2'>
        <div className='bg-slate-300 w-full h-2 rounded-xl my-4'>
          <div className={`bg-blue-600 h-2 rounded-xl`} style={{ width: percentage.toFixed(2) + '%' }}></div>
        </div>
        <p className='text-sm font-semibold'>{percentage.toFixed(0)}%</p>
      </div>
      <h3 className='text-lg text-slate-900 font-bold'>{name}</h3>
      <h4 className='text-base text-slate-600 font-semibold'>Rp{formatNumber(target)}</h4>
      <p className='text-[12px]'>
        tersisa <span className='font-bold text-red-600'>Rp{formatNumber(totalLess)}</span>
      </p>
    </Link>
  )
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired
}

export default Card
