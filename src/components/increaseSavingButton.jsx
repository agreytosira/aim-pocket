const IncreaseSavingButton = ({ increaseHandler }) => {
  return (
    <button className='p-4 font-semibold text-white bg-blue-600' onClick={() => increaseHandler()}>
      Tambah Data Tabungan
    </button>
  )
}

export default IncreaseSavingButton
