const DecreaseButton = ({ decreaseHandler }) => {
  return (
    <button className='p-4 font-semibold text-white bg-orange-600' onClick={() => decreaseHandler()}>
      Kurangi Isi Tabungan
    </button>
  )
}

export default DecreaseButton
