import { useParams } from 'react-router-dom'
import { getSavingsByID } from '../data/dummy'
import { formatNumber } from '../utils/format'

function Detail() {
  const { id } = useParams()
  const data = getSavingsByID(id)
  const { name, imageUrl, target, nominal, saved } = data
  const estimatedTime = target / nominal

  const totalSaved = data.saved.reduce((total, current) => total + current.value, 0)
  const totalLess = target - totalSaved
  const percentage = (totalSaved / target) * 100

  return (
    <div className='container mx-auto w-2/5'>
      <div className='text-center mb-4'>
        <span className='tracking-[0.25em] font-semibold text-sm text-blue-600'>RINCIAN TABUNGAN</span>
        <h1 className='text-4xl font-bold'>{name}</h1>
      </div>
      <img className='aspect-video object-contain rounded-md w-full h-80' src={imageUrl} alt='' />
      {/* Detail Tabungan */}
      <div className='items-center grid grid-cols-2 gap-2 my-4'>
        <div className='flex flex-col'>
          <h2 className='text-2xl text-slate-900 font-bold'>Rp{formatNumber(target)}</h2>
          <h3 className='text-md text-slate-600 font-semibold'>Rp{formatNumber(nominal)}/Hari</h3>
        </div>
        <div className='flex flex-col'>
          <div className='flex items-center gap-2 w-full'>
            <div className='bg-slate-300 w-full h-2 rounded-xl'>
              <div className='bg-blue-600 w-[75%] h-2 rounded-xl'></div>
            </div>
            <p>{percentage.toFixed(1)}%</p>
          </div>
          <p className='text-sm italic '>
            Tersisa <strong>{estimatedTime}</strong> hari lagi
          </p>
        </div>
      </div>
      <div className='border border-slate-300 grid grid-cols-2 p-4 rounded-xl mb-8'>
        <div className='flex flex-col text-center items-center'>
          <h5 className='text-xl font-semibold '>Terkumpul</h5>
          <p className='text-green-600'>Rp{formatNumber(totalSaved)}</p>
        </div>
        <div className='flex flex-col text-center items-center border-l border-l-slate-300'>
          <h5 className='text-xl font-semibold '>Kekurangan</h5>
          <p className='text-red-600'>Rp{formatNumber(totalLess)}</p>
        </div>
      </div>
      {/* Riwayat Tabungan */}
      <span className='tracking-[0.25em] font-semibold text-sm text-blue-600'>RIWAYAT TABUNGAN</span>
      <div className='flex flex-col mt-2'>
        {/* History Item */}
        {saved.map((save, index) => (
          <div className='flex items-center justify-between p-4 border border-slate-300' key={index}>
            <div className='flex flex-col'>
              <p className='text-sm font-medium text-slate-600'> {save.date}</p>
              <p className='font-semibold'>Isi Tabungan</p>
            </div>
            <p className='text-green-600'>+Rp{formatNumber(save.value)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Detail
