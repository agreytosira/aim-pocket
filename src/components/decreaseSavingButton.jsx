const DecreaseSavingButton = ({ decreaseHandler }) => {
    return (
        <button className='font-semibold p-4 bg-blue-600' onClick={() => decreaseHandler()}>
            Kurangi Isi Tabungan
        </button>
    );
};

export default DecreaseSavingButton;
