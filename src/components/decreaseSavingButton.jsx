const DecreaseSavingButton = ({ decreaseHandler }) => {
    return (
        <button className='font-semibold p-4 bg-orange-600 text-white' onClick={() => decreaseHandler()}>
            Kurangi Isi Tabungan
        </button>
    );
};

export default DecreaseSavingButton;
