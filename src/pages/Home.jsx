import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { getAllSavings } from '../data/dummy';

function Home() {
    const [savings, setSavings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        const allSavings = await getAllSavings();
        setSavings(allSavings);
        setIsLoading(false);
    };
    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        fetchData();
    }, [savings]);

    if (isLoading) {
        return <p>Loading....</p>;
    }

    return (
        <div className='container'>
            {savings.length > 0 ? (
                <div className='grid grid-cols-4 gap-4'>
                    {savings.map((saving) => (
                        <Card id={saving.id} key={saving.id} isCompleted={saving.isCompleted} />
                    ))}
                </div>
            ) : (
                <p>No saving available</p>
            )}

            <Link to='/add' className='fixed bottom-4 right-4 p-4 aspect-square bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center'>
                +
            </Link>
        </div>
    );
}

export default Home;
