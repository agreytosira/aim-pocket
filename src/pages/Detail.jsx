import { useParams } from 'react-router-dom'

function Detail() {
  const { id } = useParams()
  console.log(id)

  return (
    <div className='container mx-auto w-2/5'>
      <div className='text-center mb-4'>
        <span className='tracking-[0.25em] font-semibold text-sm text-blue-600'>RINCIAN TABUNGAN</span>
        <h1 className='text-4xl font-bold'>iPhone 11 </h1>
      </div>
      <img className='aspect-video object-contain rounded-md w-full h-80' src='https://cdn.eraspace.com/media/catalog/product/a/p/apple_iphone_11_black_new_1_7.jpg' alt='' />
      {/* Detail Tabungan */}
      <div className='items-center grid grid-cols-2 gap-2 my-4'>
        <div className='flex flex-col'>
          <h2 className='text-2xl text-slate-900 font-bold'>Rp7.500.000</h2>
          <h3 className='text-md text-slate-600 font-semibold'>Rp50.000/Hari</h3>
        </div>
        <div className='flex items-center gap-2 w-full'>
          <div className='bg-slate-300 w-full h-2 rounded-xl my-4'>
            <div className='bg-blue-600 w-[75%] h-2 rounded-xl'></div>
          </div>
          <p>75%</p>
        </div>
      </div>
      <div className='border border-slate-300 grid grid-cols-2 p-4 rounded-xl mb-8'>
        <div className='flex flex-col text-center items-center'>
          <h5 className='text-xl font-semibold '>Terkumpul</h5>
          <p className='text-green-600'>Rp15.000</p>
        </div>
        <div className='flex flex-col text-center items-center border-l border-l-slate-300'>
          <h5 className='text-xl font-semibold '>Kekurangan</h5>
          <p className='text-red-600'>Rp7.485.000</p>
        </div>
      </div>
      {/* Riwayat Tabungan */}
      <span className='tracking-[0.25em] font-semibold text-sm text-blue-600'>RIWAYAT TABUNGAN</span>
      <div className='flex flex-col mt-2'>
        {/* History Item */}
        <div className='flex items-center justify-between p-4 border border-slate-300'>
          <div className='flex flex-col'>
            <p className='text-sm font-medium text-slate-600'> 26 Februari 2024</p>
            <p className='font-semibold'>Tambah</p>
          </div>
          <p className='text-green-600'>+Rp5.000</p>
        </div>
        <div className='flex items-center justify-between p-4 border border-slate-300'>
          <div className='flex flex-col'>
            <p className='text-sm font-medium text-slate-600'> 26 Februari 2024</p>
            <p className='font-semibold'>Tambah</p>
          </div>
          <p className='text-green-600'>+Rp5.000</p>
        </div>
        <div className='flex items-center justify-between p-4 border border-slate-300'>
          <div className='flex flex-col'>
            <p className='text-sm font-medium text-slate-600'> 26 Februari 2024</p>
            <p className='font-semibold'>Tambah</p>
          </div>
          <p className='text-green-600'>+Rp5.000</p>
        </div>
      </div>
    </div>
  )
}

export default Detail
