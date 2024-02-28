import savings, { getSavingsByID } from '../data/dummy' // Impor data dan fungsi dari file savings

const AddSavingDataButton = ({ id }) => {
  const handleAddSavingData = () => {
    const saving = getSavingsByID(id)
    alert(id)
    if (saving) {
      const currentDate = new Date().toISOString().split('T')[0] // Ambil tanggal hari ini
      const value = saving.nominal // Ambil nilai dari nominal

      const newSavingData = {
        date: currentDate,
        value: parseFloat(value) // Konversi nilai ke tipe float
      }

      saving.saved.push(newSavingData) // Tambahkan data baru ke array saved

      // Perbarui data di localStorage
      const updatedSavings = savings.map((s) => (s.id === id ? saving : s))
      localStorage.setItem('savings', JSON.stringify(updatedSavings))
    }
  }

  return (
    <div>
      <button className='fixed bottom-4 right-4 p-4 bg-blue-600' onClick={handleAddSavingData}>
        Tambah Data Tabungan
      </button>
    </div>
  )
}

export default AddSavingDataButton
