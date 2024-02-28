import { useState } from 'react'
import savings from '../data/dummy'

const AddSaving = () => {
  const [name, setName] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [target, setTarget] = useState(0)
  const [nominal, setNominal] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault()
    const newSaving = {
      id: (savings.length + 1).toString(), // Generate ID baru
      name,
      imageUrl,
      target: Number(target),
      nominal: Number(nominal),
      isCompleted: false,
      saved: []
    }

    // Simpan data baru ke localStorage
    const updatedSavings = [...savings, newSaving]
    localStorage.setItem('savings', JSON.stringify(updatedSavings))

    // Reset form setelah data tersimpan
    setName('')
    setImageUrl('')
    setTarget(0)
    setNominal(0)
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col'>
      <label>
        Name:
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Image URL:
        <input type='text' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      </label>
      <label>
        Target:
        <input type='number' value={target} onChange={(e) => setTarget(e.target.value)} />
      </label>
      <label>
        Nominal:
        <input type='number' value={nominal} onChange={(e) => setNominal(e.target.value)} />
      </label>
      <button type='submit'>Add Saving</button>
    </form>
  )
}

export default AddSaving
