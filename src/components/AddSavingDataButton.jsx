const AddSavingDataButton = ({ addHandler }) => {
    return (
        <button className='fixed bottom-4 right-4 p-4 bg-blue-600' onClick={() => addHandler()}>
            Tambah Data Tabungan
        </button>
    );
};

export default AddSavingDataButton;
