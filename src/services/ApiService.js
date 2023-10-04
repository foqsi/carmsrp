import API_KEY from '../utils/apikey.js';


const BASE_URL = 'https://car-api2.p.rapidapi.com';
const headers = {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
};

export const fetchMakes = async () => {
    try {
        const response = await fetch(`${BASE_URL}/api/makes?direction=asc&sort=name`, { headers });
        if (!response.ok) throw new Error('Not successful');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;
    }
};

export const fetchModels = async (selectedMake) => {
    try {
        const response = await fetch(`${BASE_URL}/api/models?make=${selectedMake}&sort=name&direction=asc&verbose=yes`, { headers });
        if (!response.ok) throw new Error('Not successful');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;
    }
};

export const fetchYears = async (selectedModel) => {
    try {
        const response = await fetch(`${BASE_URL}/api/years?model=${selectedModel}`, { headers });
        if (!response.ok) throw new Error('Not successful');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;
    }
};

export const fetchTrims = async (selectedMake, selectedModel, selectedYear) => {
    try {
        const response = await fetch(`${BASE_URL}/api/trims?direction=asc&sort=name&year=${selectedYear}&model=${selectedModel}&verbose=yes&make=${selectedMake}`, { headers });
        if (!response.ok) throw new Error('Not successful');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;
    }
};

export const fetchTrimDetails = async (selectedMake, selectedModel, selectedYear, selectedTrim) => {
    try {
        const response = await fetch(`${BASE_URL}/api/trims?direction=asc&sort=id&year=${selectedYear}&model=${selectedModel}&trim=${selectedTrim}&verbose=yes&make=${selectedMake}`, { headers });
        if (!response.ok) throw new Error('Not successful');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;
    }
}

export const fetchVehicleInformation = async (selectedIds) => {
    try {
        const response = await fetch(`${BASE_URL}/api/trims/${selectedIds}`, { headers });
        if (!response.ok) throw new Error('Not successful');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;
    }
}

export const fetchExteriorColors = async (selectedIds) => {
    try {
        const response = await fetch(`${BASE_URL}/api/trims/${selectedIds}/colors/exterior`, { headers });
        if (!response.ok) throw new Error('Not successful');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;
    }
}

export const fetchInteriorColors = async (selectedIds) => {
    try {
        const response = await fetch(`${BASE_URL}/api/trims/${selectedIds}/colors/interior`, { headers });
        if (!response.ok) throw new Error('Not successful');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;
    }
}
