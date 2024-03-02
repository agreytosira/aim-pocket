const DeleteSavingDataButton = ({ deleteHandler }) => {
    return (
        <button className='font-semibold p-4 bg-red-600 text-white' onClick={() => deleteHandler()}>
            Hapus Tabungan
        </button>
    );
};

export default DeleteSavingDataButton;
