import React from 'react';

const Breadcrumb = ({ currentWindow, handleBreadCrumbClick, selectedMake, selectedModel, selectedYear }) => {
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
                <span>
                    {' > '}
                    <span className={currentWindow === selectedYear ? '' : 'cursor-pointer hover:underline hover:text-blue-400'}>
                        {selectedYear}
                    </span>
                </span>
            )}
        </div>
    );
};

export default Breadcrumb;
