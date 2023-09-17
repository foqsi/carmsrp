import React, { useState, useEffect } from 'react';
import CarData from './CarList.jsx';
import './options.css';

const OptionsList = () => {
    const [currentWindow, setCurrentWindow] = useState('Make');
    const [selectedMake, setSelectedMake] = useState(null);
    const [selectedModel, setSelectedModel] = useState(null);
    const [selectedTrim, setSelectedTrim] = useState(null);
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedYearRange, setSelectedYearRange] = useState(null);

    const handleBreadCrumbClick = (level) => {
        switch (level) {
            case 'Make':
                setSelectedMake(null);
                setSelectedModel(null);
                setSelectedTrim(null);
                setSelectedYear(null);
                setSelectedYearRange(null);
                setCurrentWindow('Make');
                break;
            case 'Model':
                setSelectedModel(null);
                setSelectedTrim(null);
                setSelectedYear(null);
                setSelectedYearRange(null);
                setCurrentWindow('Make');
                break;
            case 'Year':
                setSelectedYear(null);
                setSelectedTrim(null);
                setSelectedYearRange(null);
                setCurrentWindow(selectedMake);
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

    const handleClickMake = (make) => {
        setSelectedMake(make);
        setCurrentWindow(make);
    };

    const handleClickModel = (model) => {
        setSelectedModel(model);
        setSelectedYearRange(null);
        setCurrentWindow('YearRange');
    };

    const handleClickYearRange = (yearRange) => {
        setSelectedYearRange(yearRange);
        setCurrentWindow('Year');
    };

    const handleClickYear = (year) => {
        setSelectedYear(year);
        setCurrentWindow('Trim');
    };

    const handleClickTrim = (trim) => {
        setSelectedTrim(trim);
        setCurrentWindow(trim);
    };

    const groupYears = (years) => {
        if (!years || years.length === 0) return [];
        years.sort((a, b) => a - b);
        const ranges = [];
        let start = years[0], end = years[0];

        for (let i = 1; i < years.length; i++) {
            if (years[i] - end === 1) {
                end = years[i];
            } else {
                ranges.push(start === end ? `${start}` : `${start}-${end}`);
                start = end = years[i];
            }
        }
        ranges.push(start === end ? `${start}` : `${start}-${end}`);
        return ranges;
    };

    return (
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
                    {selectedYear ? (
                        <ul className="transition-all duration-500 ease-in-out">
                            {CarData[selectedMake][selectedModel][selectedYearRange].trims.map((trim, index) => (
                                <li key={index} onClick={() => handleClickTrim(trim)} className="default-hover">
                                    {trim}
                                </li>
                            ))}
                        </ul>
                    ) : selectedYearRange ? (
                        <ul className="transition-all duration-500 ease-in-out">
                            {CarData[selectedMake][selectedModel][selectedYearRange].years.map((year, index) => (
                                <li key={index} onClick={() => handleClickYear(year)} className="default-hover">
                                    {year}
                                </li>
                            ))}
                        </ul>
                    ) : selectedModel ? (
                        <ul className="transition-all duration-500 ease-in-out">
                            {Object.keys(CarData[selectedMake][selectedModel]).map((yearRange, index) => (
                                <li key={index} onClick={() => handleClickYearRange(yearRange)} className="default-hover">
                                    {yearRange}
                                </li>
                            ))}
                        </ul>
                    ) : selectedMake ? (
                        <ul className="transition-all duration-500 ease-in-out">
                            {Object.keys(CarData[selectedMake]).map((model, index) => (
                                <li key={index} onClick={() => handleClickModel(model)} className="default-hover">
                                    {model}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <ul className="flex flex-col transition-all duration-500 ease-in-out">
                            {Object.keys(CarData).map((make, index) => (
                                <li key={index} onClick={() => handleClickMake(make)} className="default-hover">
                                    {make}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );

};

export default OptionsList;
