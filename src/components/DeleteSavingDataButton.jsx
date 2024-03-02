const DeleteSavingDataButton = ({ deleteHandler }) => {
    return (
        <button className='font-semibold p-4 bg-blue-600' onClick={() => deleteHandler()}>
            Hapus Tabungan
        </button>
    );
};

export default DeleteSavingDataButton;
