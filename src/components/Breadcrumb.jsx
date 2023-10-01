import React from 'react';

const Breadcrumb = ({ currentWindow, handleBreadCrumbClick, selectedMake, selectedModel, selectedYear, selectedTrim }) => {
    return (
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
                <span onClick={() => handleBreadCrumbClick('Trim')}>
                    {' > '}
                    <span className={currentWindow === selectedYear ? '' : 'cursor-pointer hover:underline hover:text-blue-400'}>
                        {selectedYear}
                    </span>
                </span>
            )}
            {selectedTrim && (
                <span>
                    {' > '}
                    <span className={currentWindow === selectedTrim ? '' : 'cursor-pointer hover:underline hover:text-blue-400'}>
                        {selectedTrim}
                    </span>
                </span>
            )}
        </div>
    );
};

export default Breadcrumb;
