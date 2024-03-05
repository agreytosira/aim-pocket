import { FaPlus } from 'react-icons/fa6'

const IncreaseButton = ({ increaseHandler }) => {
  return (
    <button className='flex items-center gap-2 p-4 font-semibold text-white bg-blue-600 rounded-lg' onClick={() => increaseHandler()}>
      <FaPlus /> Tambah
    </button>
  )
}

export default IncreaseButton
