const DeleteSavingDataButton = ({ deleteHandler }) => {
  return (
    <button className='p-4 font-semibold text-white bg-red-600 ' onClick={() => deleteHandler()}>
      Hapus Tabungan
    </button>
  )
}

export default DeleteSavingDataButton
