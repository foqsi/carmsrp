import React, { useState } from 'react';
import CarData from './CarData.jsx';

const OptionsList = () => {
    const [currentWindow, setCurrentWindow] = useState('Make');
    const [selectedMake, setSelectedMake] = useState(null);
    const [selectedModel, setSelectedModel] = useState(null);
    const [selectedTrim, setSelectedTrim] = useState(null);

    const handleClickMake = (make) => {
        setSelectedMake(make);
        setCurrentWindow(make);
    };

    const handleClickModel = (model) => {
        setSelectedModel(model);
        setCurrentWindow(model);
    };

    const handleClickTrim = (trim) => {
        setSelectedTrim(trim);
        setCurrentWindow(trim);
    };

    // Function to group years into ranges
    const groupYears = (years) => {
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
        <div className="bg-white text-black p-8 rounded-lg shadow-lg w-auto text-center opacity-95 overflow-y-auto max-h-screen transition-all duration-700 ease-in-out">
            <h1 className="transition-opacity duration-500 ease-in-out">{currentWindow}</h1>
            {selectedTrim ? (
                <ul className="transition-all duration-500 ease-in-out">
                    {groupYears(CarData[selectedMake][selectedModel][selectedTrim]).map((range, index) => (
                        <li key={index} className="transition-opacity duration-500 ease-in-out">
                            {range}
                        </li>
                    ))}
                </ul>
            ) : selectedModel ? (
                <ul className="transition-all duration-500 ease-in-out">
                    {Object.keys(CarData[selectedMake][selectedModel]).map((trim, index) => (
                        <li key={index} onClick={() => handleClickTrim(trim)} className="transition-opacity duration-500 ease-in-out">
                            {trim}
                        </li>
                    ))}
                </ul>
            ) : selectedMake ? (
                <ul className="transition-all duration-500 ease-in-out">
                    {Object.keys(CarData[selectedMake]).map((model, index) => (
                        <li key={index} onClick={() => handleClickModel(model)} className="transition-opacity duration-500 ease-in-out">
                            {model}
                        </li>
                    ))}
                </ul>
            ) : (
                <ul className="flex flex-col transition-all duration-500 ease-in-out">
                    {Object.keys(CarData).map((make, index) => (
                        <li key={index} onClick={() => handleClickMake(make)} className="transition-transform duration-500 ease-in-out transform hover:scale-110">
                            {make}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default OptionsList;
