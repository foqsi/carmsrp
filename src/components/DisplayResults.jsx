import React from 'react';

const DisplayResults = ({ selectedMake, selectedModel, selectedYear, selectedTrim }) => {
    return (
        <div>
            <h2>Your Selection</h2>
            <ul>
                <li>Make: {selectedMake}</li>
                <li>Model: {selectedModel}</li>
                <li>Year: {selectedYear}</li>
                <li>Trim: {selectedTrim}</li>
            </ul>
        </div>
    );
};

export default DisplayResults;
