import { useState } from 'react';
import { addSaving } from '../data/dummy';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddSavingPage = () => {
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [target, setTarget] = useState(0);
    const [nominal, setNominal] = useState(0);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const newSaving = {
            id: Math.floor(Math.random() * 1000000).toString(),
            name,
            imageUrl: imageUrl || '/placeholder.png',
            target: Number(target),
            nominal: Number(nominal),
            isCompleted: false,
            saved: []
        };

        addSaving(newSaving);
        Swal.fire({
            title: 'Tabungan berhasil dibuat!',
            icon: 'success',
            timer: 1000
        });
        navigate('/');

        setName('');
        setImageUrl('');
        setTarget(0);
        setNominal(0);
    };

    return (
        <div className='container w-full sm:w-4/5 md:w-3/5 lg:w-2/6'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                <h1 className='mb-4 text-2xl font-bold text-center'>Buat Tabungan Baru</h1>
                <label className='flex flex-col'>
                    Nama Tabungan
                    <input className='px-2 py-1 border rounded-md outline-none border-slate-300 dark:bg-slate-800 dark:border-slate-600 focus:border-blue-600' type='text' value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label className='flex flex-col'>
                    Link URL Gambar
                    <input className='px-2 py-1 border rounded-md outline-none border-slate-300 dark:bg-slate-800 dark:border-slate-600 focus:border-blue-600' type='text' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                </label>
                <label className='flex flex-col'>
                    Jumlah yang ingin dicapai
                    <input className='px-2 py-1 border rounded-md outline-none border-slate-300 dark:bg-slate-800 dark:border-slate-600 focus:border-blue-600' type='number' value={target} onChange={(e) => setTarget(e.target.value)} />
                </label>
                <label className='flex flex-col'>
                    Nominal
                    <input className='px-2 py-1 border rounded-md outline-none border-slate-300 dark:bg-slate-800 dark:border-slate-600 focus:border-blue-600' type='number' value={nominal} onChange={(e) => setNominal(e.target.value)} />
                </label>
                <button type='submit' className='flex justify-center mt-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-900 transition-all duration-300 ease-out'>
                    Buat Tabungan
                </button>
            </form>
        </div>
    );
};

export default AddSavingPage;
