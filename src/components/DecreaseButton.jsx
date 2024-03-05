import { FaMinus } from 'react-icons/fa6'

const DecreaseButton = ({ decreaseHandler }) => {
  return (
    <button className='flex items-center gap-2 p-4 font-semibold text-white bg-orange-600 rounded-lg' onClick={() => decreaseHandler()}>
      <FaMinus /> Kurang
    </button>
  )
}

export default DecreaseButton
