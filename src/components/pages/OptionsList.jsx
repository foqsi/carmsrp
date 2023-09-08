import React, { useState } from 'react';
import CarData from './CarData.jsx';
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

    // Function to group years into ranges
    const groupYears = (years) => {
        if (!years || years.length === 0) return [];
        years.sort((a, b) => a - b);  // Sort years
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
        <div className="bg-white text-black p-8 rounded-lg shadow-lg w-auto text-center opacity-95 overflow-y-auto max-h-screen transition-all duration-700 ease-in-out overflow-hidden">
            <div className="breadcrumb">
                <span onClick={() => handleBreadCrumbClick('Make')} className={currentWindow === 'Make' ? '' : 'cursor-pointer'}>Make</span>
                {selectedMake && <span onClick={() => handleBreadCrumbClick('Model')} className={currentWindow === selectedMake ? '' : 'cursor-pointer'}>{' > '}{selectedMake}</span>}
                {selectedModel && <span onClick={() => handleBreadCrumbClick('Year')} className={currentWindow === selectedModel ? '' : 'cursor-pointer'}>{' > '}{selectedModel}</span>}
                {selectedYear && <span className={currentWindow === selectedYear ? '' : 'cursor-pointer'}>{' > '}{selectedYear}</span>}
            </div>

            <div className="bg-white text-black p-8 rounded-lg shadow-lg w-auto text-center opacity-95 overflow-y-auto max-h-screen transition-all duration-700 ease-in-out overflow-hidden">


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
    );

};

export default OptionsList;
