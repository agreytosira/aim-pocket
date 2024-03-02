import { getFormattedTime } from '../utils/format';

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

function setCompleted(id) {
    const savingToEdit = savings.find((saving) => saving.id === id);

    if (savingToEdit) {
        savings = savings.map((saving) => {
            if (saving.id === id) {
                return { ...saving, isCompleted: true };
            }
            return saving;
        });
    }
    localStorage.setItem('savings', JSON.stringify(savings));
}

function setIncompleted(id) {
    const savingToEdit = savings.find((saving) => saving.id === id);

    if (savingToEdit) {
        savings = savings.map((saving) => {
            if (saving.id === id) {
                return { ...saving, isCompleted: false };
            }
            return saving;
        });
    }
    localStorage.setItem('savings', JSON.stringify(savings));
}

const increaseSaving = (id) => {
    const saving = getSavingsByID(id);
    const currentTime = getFormattedTime();
    const value = saving.nominal;

    const newSavingData = {
        date: currentTime,
        value: parseFloat(value)
    };

    saving.saved.unshift(newSavingData);

    const updatedSavings = savings.map((s) => (s.id === id ? saving : s));
    localStorage.setItem('savings', JSON.stringify(updatedSavings));
};

const decreaseSaving = (id) => {
    const saving = getSavingsByID(id);
    const currentTime = getFormattedTime();
    const value = saving.nominal;

    const newSavingData = {
        date: currentTime,
        value: parseFloat(-value)
    };

    saving.saved.unshift(newSavingData);

    const updatedSavings = savings.map((s) => (s.id === id ? saving : s));
    localStorage.setItem('savings', JSON.stringify(updatedSavings));
};

export { getAllSavings, getSavingsByID, increaseSaving, decreaseSaving, addSaving, deleteSaving, setCompleted, setIncompleted };
