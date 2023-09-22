import ApiKey from './apikey.js';

export const getMakes = async () => {
    const url = 'https://car-api2.p.rapidapi.com/api/makes?direction=asc&sort=name';
    const headers = {
        'X-RapidAPI-Key': ApiKey,
        'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
    };
    const res = await fetch(url, { headers });
    const data = await res.json();
    return data;
};

export const getModels = async (selectedMake) => {
    const url = `https://car-api2.p.rapidapi.com/api/models?make=${selectedMake}&sort=name&direction=asc&verbose=yes`;
    const headers = {
        'X-RapidAPI-Key': ApiKey,
        'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
    };
    const res = await fetch(url, { headers });
    const data = await res.json();
    return data;
};

export const getYears = async (selectedModel) => {
    const url = `https://car-api2.p.rapidapi.com/api/years?model=${selectedModel}`;
    const headers = {
        'X-RapidAPI-Key': ApiKey,
        'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
    };
    const res = await fetch(url, { headers });
    const data = await res.json();
    return data;
};

export const getTrims = async (selectedMake, selectedModel, selectedYear) => {
    const url = `https://car-api2.p.rapidapi.com/api/trims?direction=asc&sort=name&year=${selectedYear}&model=${selectedModel}&verbose=yes&make=${selectedMake}`;
    const headers = {
        'X-RapidAPI-Key': ApiKey,
        'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
    };
    const res = await fetch(url, { headers });
    const data = await res.json();
    return data;
};

export const getCarData = async (selectedTrim) => {
    const url = ``;  // Replace with the actual URL
    const headers = {
        'X-RapidAPI-Key': ApiKey,
        'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
    };
    const res = await fetch(url, { headers });
    const data = await res.json();
    return data;
};
