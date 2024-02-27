import Card from '../components/Card'
import savings from '../data/dummy'

function Home() {
  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-4 gap-4'>
        {savings.map((saving) => (
          <Card id={saving.id} key={saving.id} />
        ))}
      </div>
    </div>
  )
}

export default Home
