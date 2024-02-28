const savings = JSON.parse(localStorage.getItem('savings')) || []

export default savings

export const getSavingsByID = (id) => {
  return savings.find((saving) => saving.id === id)
}
