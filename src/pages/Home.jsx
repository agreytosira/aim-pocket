import Card from '../components/Card'

function Home() {
  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-4 gap-6'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Home
