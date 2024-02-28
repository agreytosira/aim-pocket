const savings = JSON.parse(localStorage.getItem('savings')) || []

export default savings

export const getSavingsByID = (id) => {
  return savings.find((saving) => saving.id === id)
}

export const addSaving = (newSaving) => {
  const updatedSavings = [...savings, newSaving]
  localStorage.setItem('savings', JSON.stringify(updatedSavings))
}
