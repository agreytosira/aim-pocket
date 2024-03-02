const IncreaseSavingButton = ({ increaseHandler }) => {
    return (
        <button className='font-semibold p-4 bg-blue-600 text-white' onClick={() => increaseHandler()}>
            Tambah Data Tabungan
        </button>
    );
};

export default IncreaseSavingButton;
