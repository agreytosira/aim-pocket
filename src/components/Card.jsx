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
    <Link className='relative transition-all duration-300 border border-gray-300 rounded-lg pointer hover:border-blue-600 ease' to={`/detail/${id}`}>
      {isCompleted && <div className='absolute px-2 py-1 text-xs font-semibold text-white bg-green-600 rounded-md top-4 right-4'>Completed</div>}
      <img className='object-cover w-full rounded-md aspect-video' src={imageUrl} alt={name} />
      <div className='p-4 pt-2'>
        <div className='flex items-center gap-2'>
          <div className='w-full h-2 my-4 bg-slate-300 rounded-xl'>
            <div className={`bg-blue-600 h-2 rounded-xl`} style={{ width: percentage.toFixed(2) + '%' }}></div>
          </div>
          <p className='text-sm font-semibold'>{percentage > 0 ? 100 : percentage.toFixed(0)}%</p>
        </div>
        <h3 className='text-lg font-bold text-slate-900'>{name}</h3>
        <h4 className='text-base font-semibold text-slate-600'>Rp{formatNumber(target)}</h4>
        {!isCompleted && (
          <p className='text-[12px]'>
            tersisa <span className='font-bold text-red-600'>Rp{formatNumber(totalLess)}</span>
          </p>
        )}
      </div>
    </Link>
  )
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired
}

export default Card
