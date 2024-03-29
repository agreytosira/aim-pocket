import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { setCompleted, setIncompleted, increaseSaving, getSavingsByID, deleteSaving, decreaseSaving } from '../data/dummy'
import { formatNumber } from '../utils/format'
import DeleteSavingDataButton from '../components/DeleteSavingDataButton'
import DecreaseButton from '../components/DecreaseButton'
import IncreaseButton from '../components/IncreaseButton'
import Swal from 'sweetalert2'

function DetailPage() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [data, setData] = useState(getSavingsByID(id))
  const { name, imageUrl, target, nominal, saved, isCompleted } = data

  const [estimatedTime, setEstimatedTime] = useState(0)
  const [totalSaved, setTotalSaved] = useState(0)
  const [totalLess, setTotalLess] = useState(0)
  const [percentage, setPercentage] = useState(0)

  const increaseHandler = () => {
    if (totalSaved !== target) {
      increaseSaving(id)
      updateData()

      const total = data.saved.reduce((acc, curr) => acc + curr.value, 0)
      const percent = (total / target) * 100

      if (percent >= 100) {
        !isCompleted && setCompleted(id)
        Swal.fire({
          title: 'Selamat, kamu telah mencapai target!',
          icon: 'success'
        })
        updateData()
      }
    }
  }

  const decreaseHandler = () => {
    isCompleted && setIncompleted(id)

    if (totalSaved > 0) {
      decreaseSaving(id)
      updateData()
    }
  }

  const deleteHandler = () => {
    Swal.fire({
      title: 'Yakin hapus tabungan ini?',
      showDenyButton: true,
      confirmButtonText: 'Ya, Hapus',
      denyButtonText: 'Tidak'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteSaving(id)
        navigate('/')
        Swal.fire('Tabungan berhasil dihapus!', '', 'success')
      }
    })
  }

  const updateData = () => {
    const updatedData = getSavingsByID(id)
    const total = updatedData.saved.reduce((acc, curr) => acc + curr.value, 0)
    const less = target - total
    const percent = (total / target) * 100

    setData(updatedData)
    setTotalSaved(total)
    setTotalLess(less)
    if (percent <= 100) {
      setPercentage(percent)
    } else {
      setPercentage(100)
    }
    setEstimatedTime(less / nominal)
  }

  useEffect(() => {
    updateData()
  }, [])

  return (
    <div className='container w-full mx-auto mt-16 sm:w-4/5 md:w-3/5 lg:w-2/5 sm:mt-0'>
      <div className='mb-4 text-center'>
        <span className='tracking-[0.25em] font-semibold text-sm text-blue-600'>RINCIAN TABUNGAN</span>
        <h1 className='text-4xl font-bold'>{name}</h1>
      </div>
      <img className='object-cover w-full rounded-md aspect-video h-80' src={imageUrl} alt='' />
      {/* Detail Tabungan */}
      <div className='grid items-center grid-cols-2 gap-2 my-4'>
        <div className='flex flex-col'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-slate-50'>Rp{formatNumber(target)}</h2>
          <h3 className='font-semibold text-md text-slate-600 dark:text-slate-400'>Rp{formatNumber(nominal)}/Hari</h3>
        </div>
        <div className='flex flex-col'>
          <div className='flex items-center w-full gap-2'>
            <div className='w-full h-2 bg-slate-300 rounded-xl'>
              <div className='h-2 bg-blue-600 rounded-xl' style={{ width: `${percentage.toFixed(0)}%` }}></div>
            </div>
            <p>{percentage.toFixed(0)}%</p>
          </div>
          {estimatedTime > 0 ? (
            <p className='text-sm italic '>
              Tersisa <strong>{estimatedTime.toFixed(0)}</strong> hari lagi
            </p>
          ) : (
            <p className='text-sm italic '>Tabungan telah tercapai</p>
          )}
        </div>
      </div>
      <div className='grid grid-cols-2 p-4 mb-8 border border-slate-300 dark:border-slate-600 rounded-xl'>
        <div className='flex flex-col items-center text-center'>
          <h5 className='text-xl font-semibold '>Terkumpul</h5>
          <p className='text-green-600 dark:text-green-700'>Rp{formatNumber(totalSaved)}</p>
        </div>
        <div className='flex flex-col items-center text-center border-l border-l-slate-300'>
          <h5 className='text-xl font-semibold '>Kekurangan</h5>
          <p className='text-red-600 dark:text-red-700'>Rp{totalLess > 100 ? formatNumber(totalLess) : 0}</p>
        </div>
      </div>
      {/* Riwayat Tabungan */}
      <span className='tracking-[0.25em] font-semibold text-sm text-blue-600'>RIWAYAT TABUNGAN</span>
      <div className='flex flex-col mt-2'>
        {/* History Item */}
        {saved.map((save, index) => {
          if (save.value > 0) {
            return (
              <div className='flex items-center justify-between p-4 border border-slate-300 dark:border-slate-600' key={index}>
                <div className='flex flex-col'>
                  <p className='text-sm font-medium text-slate-600 dark:text-slate-400'> {save.date}</p>
                  <p className='font-semibold text-green-600 dark:text-green-700'>Isi Tabungan</p>
                </div>
                <p className='text-green-600 dark:text-green-700'>+Rp{formatNumber(save.value)}</p>
              </div>
            )
          } else {
            return (
              <div className='flex items-center justify-between p-4 border border-slate-300 dark:border-slate-600' key={index}>
                <div className='flex flex-col'>
                  <p className='text-sm font-medium text-slate-700 dark:text-slate-400'> {save.date}</p>
                  <p className='font-semibold text-red-600 dark:text-red-700'>Kurangi Tabungan</p>
                </div>
                <p className='text-red-600 dark:text-red-700'>-Rp{formatNumber(Math.abs(save.value))}</p>
              </div>
            )
          }
        })}
      </div>
      <div className='fixed flex items-center gap-0 space-x-4 right-4 bottom-4'>
        {!isCompleted && <IncreaseButton increaseHandler={increaseHandler} />}
        <DecreaseButton decreaseHandler={decreaseHandler} />
        <DeleteSavingDataButton deleteHandler={deleteHandler} />
      </div>
    </div>
  )
}

export default DetailPage
