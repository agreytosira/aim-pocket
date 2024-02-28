const savings = [
  {
    id: '1',
    name: 'iPhone 11',
    imageUrl: 'https://cdn.eraspace.com/media/catalog/product/a/p/apple_iphone_11_black_new_1_7.jpg',
    target: 7950000,
    nominal: 50000,
    isCompleted: false,
    saved: [
      {
        date: '2024-02-26',
        value: 50000
      },
      {
        date: '2024-02-25',
        value: 50000
      },
      {
        date: '2024-02-24',
        value: 50000
      }
    ]
  }
]

export default savings

export const getSavingsByID = (id) => {
  return savings.find((saving) => saving.id === id)
}
