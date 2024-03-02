let savings = JSON.parse(localStorage.getItem('savings')) || [];

const getAllSavings = () => {
    return savings;
};

const getSavingsByID = (id) => {
    return savings.find((saving) => saving.id === id);
};

const addSaving = (newSaving) => {
    const updatedSavings = [...savings, newSaving];
    localStorage.setItem('savings', JSON.stringify(updatedSavings));
};

const deleteSaving = (id) => {
    savings = savings.filter((saving) => saving.id !== id);
    localStorage.setItem('savings', JSON.stringify(savings));
};

function setCompleted({ id }) {
    const savingToEdit = savings.find((note) => note.id.includes(id));

    savings = savings.map((saving) => {
        if (saving.id === id) {
            return { ...saving, isComplete: true };
        }
        return saving;
    });
}

const addSavingTransaction = (id) => {
    const saving = getSavingsByID(id);
    const currentDate = new Date().toISOString().split('T')[0]; // Ambil tanggal hari ini
    const value = saving.nominal; // Ambil nilai dari nominal

    const newSavingData = {
        date: currentDate,
        value: parseFloat(value) // Konversi nilai ke tipe float
    };

    saving.saved.push(newSavingData); // Tambahkan data baru ke array saved

    // Perbarui data di localStorage
    const updatedSavings = savings.map((s) => (s.id === id ? saving : s));
    localStorage.setItem('savings', JSON.stringify(updatedSavings));
};

export { getAllSavings, getSavingsByID, addSavingTransaction, addSaving, deleteSaving, setCompleted };
