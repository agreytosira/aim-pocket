import { FaRegTrashCan } from 'react-icons/fa6'

const DeleteSavingDataButton = ({ deleteHandler }) => {
  return (
    <button className='flex items-center gap-2 p-4 font-semibold text-white bg-red-600 rounded-lg ' onClick={() => deleteHandler()}>
      <FaRegTrashCan /> <p className='hidden sm:flex'>Hapus</p>
    </button>
  )
}

export default DeleteSavingDataButton
