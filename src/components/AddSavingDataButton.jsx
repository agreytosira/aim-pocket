const AddSavingDataButton = ({ addHandler }) => {
    return (
        <button className='font-semibold p-4 bg-blue-600' onClick={() => addHandler()}>
            Tambah Data Tabungan
        </button>
    );
};

export default AddSavingDataButton;
