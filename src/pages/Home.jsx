import { Link } from 'react-router-dom'
import Card from '../components/Card'
import savings from '../data/dummy'

function Home() {
  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-4 gap-4'>{savings && savings.map((saving) => <Card id={saving.id} key={saving.id} isCompleted={saving.isCompleted} />)}</div>
      <Link to='/add' className='fixed bottom-4 right-4 p-4 aspect-square bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center'>
        +
      </Link>
    </div>
  )
}

export default Home
