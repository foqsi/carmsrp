import React, { useState, useEffect } from 'react';
import CarData from './CarList.jsx';
import './options.css';
import ApiKey from './apikey.js';
import { getMakes, getModels, getYears, getTrims, getCarData } from './CarApi.jsx';

const OptionsList = () => {
    const [currentWindow, setCurrentWindow] = useState('Make');
    const [selectedMake, setSelectedMake] = useState(null);
    const [selectedModel, setSelectedModel] = useState(null);
    const [selectedTrim, setSelectedTrim] = useState(null);
    const [selectedYear, setSelectedYear] = useState(null);
    const [makes, setMakes] = useState([]);
    const [models, setModels] = useState([]);
    const [years, setYears] = useState([]);
    const [trims, setTrims] = useState([]);

    const handleBreadCrumbClick = (level) => {
        switch (level) {
            case 'Make':
                setSelectedMake(null);
                setSelectedModel(null);
                setSelectedYear(null);
                setSelectedTrim(null);
                setCurrentWindow('Make');
                break;
            case 'Model':
                setSelectedModel(null);
                setSelectedYear(null);
                setSelectedTrim(null);
                setCurrentWindow(selectedMake);
                break;
            case 'Year':
                setSelectedYear(null);
                setSelectedTrim(null);
                setCurrentWindow(selectedModel);
                break;
            case 'Trim':
                setSelectedTrim(null);
                setCurrentWindow(selectedYear);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        const handleScroll = (e) => {
            const scrollY = e.target.scrollTop;
            e.target.style.backgroundPosition = `0 ${scrollY}px`;
        };

        const listElement = document.querySelector('.active-list');
        listElement.addEventListener('scroll', handleScroll);

        return () => {
            listElement.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // GET MAKES
    useEffect(() => {
        const url = 'https://car-api2.p.rapidapi.com/api/makes?direction=asc&sort=name';

        const headers = {
            'X-RapidAPI-Key': ApiKey,
            'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
        };

        fetch(url, { headers })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    console.log('Not successful');
                    throw new Error('Not successful');
                }
            })
            .then(data => {
                const uniqueBrands = new Set();
                data.data.forEach(item => {
                    uniqueBrands.add(item);
                });
                const uniqueBrandsArray = Array.from(uniqueBrands);
                setMakes(uniqueBrandsArray);
            })
            .catch(err => {
                console.error('An error occurred:', err);
            });
    }, []);

    // GET MODELS
    useEffect(() => {
        if (!selectedMake) return;
        let url = `https://car-api2.p.rapidapi.com/api/models?make=${selectedMake}&sort=name&direction=asc&verbose=yes`;
        const headers = {
            'X-RapidAPI-Key': ApiKey,
            'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
        };

        fetch(url, { headers })
            .then(res => res.json())
            .then(data => {
                const modelNames = data.data.map(model => model.name);
                setModels(modelNames);
            })

            .catch(err => console.error(err));
    }, [selectedMake]);

    // GET YEARS
    useEffect(() => {
        if (!selectedModel) return;
        let url = `https://car-api2.p.rapidapi.com/api/years?model=${selectedModel}`;
        const headers = {
            'X-RapidAPI-Key': ApiKey,
            'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
        };

        fetch(url, { headers })
            .then(res => res.json())
            .then(data => {
                const uniqueYears = new Set();
                data.forEach(item => {
                    uniqueYears.add(item);
                });
                const uniqueYearsArray = Array.from(uniqueYears);
                setYears(uniqueYearsArray);
            })
            .catch(err => console.error(err));
    }, [selectedModel]);

    // GET TRIMS
    useEffect(() => {
        if (!selectedYear) return;
        let url = `https://car-api2.p.rapidapi.com/api/trims?direction=asc&sort=name&year=${selectedYear}&model=${selectedModel}&verbose=yes&make=${selectedMake}`;
        const headers = {
            'X-RapidAPI-Key': ApiKey,
            'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
        };

        fetch(url, { headers })
            .then(res => res.json())
            .then(data => {
                const uniqueTrims = new Set();
                data.data.forEach(item => {
                    uniqueTrims.add(item.name);
                });
                const uniqueTrimsArray = Array.from(uniqueTrims);
                setTrims(uniqueTrimsArray);
            })
    }, [selectedYear]);

    // GET CAR DATA
    useEffect(() => {
        if (!selectedTrim) return;
        let url = ``;
        const headers = {
            'X-RapidAPI-Key': ApiKey,
            'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
        };

        fetch(url, { headers })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }, [selectedTrim]);


    return (
        <>
            <div className=" bg-slate-200 text-black p-8 rounded-lg shadow-lg w-auto h-[800px] text-center opacity-95 transition-all duration-700 ease-in-out overflow-y-hidden">
                <div className="breadcrumb">
                    <span onClick={() => handleBreadCrumbClick('Make')} className={currentWindow === 'Make' ? '' : 'cursor-pointer hover:underline hover:text-blue-400'}>Make</span>
                    {selectedMake && (
                        <span onClick={() => handleBreadCrumbClick('Model')}>
                            {' > '}
                            <span className={currentWindow === selectedMake ? '' : 'cursor-pointer hover:underline hover:text-blue-400'}>
                                {selectedMake}
                            </span>
                        </span>
                    )}
                    {selectedModel && (
                        <span onClick={() => handleBreadCrumbClick('Year')}>
                            {' > '}
                            <span className={currentWindow === selectedModel ? '' : 'cursor-pointer hover:underline hover:text-blue-400'}>
                                {selectedModel}
                            </span>
                        </span>
                    )}
                    {selectedYear && (
                        <span>
                            {' > '}
                            <span className={currentWindow === selectedYear ? '' : 'cursor-pointer hover:underline hover:text-blue-400'}>
                                {selectedYear}
                            </span>
                        </span>
                    )}
                </div>
                <div className='active-list-wrapper'>
                    <div className="active-list bg-white text-black p-8 rounded-lg shadow-lg w-auto text-center opacity-95 transition-all duration-700 ease-in-out">
                        {
                            selectedYear ? (
                                trims.map((trim, index) => (
                                    <div key={index} onClick={() => { setSelectedTrim(trim); setCurrentWindow(selectedYear); }} className='default-hover'>
                                        {trim}
                                    </div>
                                ))
                            ) : selectedModel ? (
                                years.map((year, index) => (
                                    <div key={index} onClick={() => { setSelectedYear(year); setCurrentWindow(selectedModel); }} className='default-hover'>
                                        {year}
                                    </div>
                                ))
                            ) : selectedMake ? (
                                models.map((model, index) => (
                                    <div key={index} onClick={() => { setSelectedModel(model); setCurrentWindow(selectedMake); }} className='default-hover'>
                                        {model}
                                    </div>
                                ))
                            ) : (
                                makes.map((make, index) => (
                                    <div key={index} onClick={() => { setSelectedMake(make.name); setCurrentWindow('Make'); }} className='default-hover'>
                                        {make.name}
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default OptionsList;
