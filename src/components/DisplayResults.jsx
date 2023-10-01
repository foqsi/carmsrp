import React from 'react';

const DisplayResults = ({ selectedTrimDetail }) => {
    return (
        <div className='md:p-2'>
            <h2 className='font-bold text-sm md:text-lg my-2'>{selectedTrimDetail}</h2>

            <div className="grid grid-cols-[2fr,3fr] gap-1 m-2">
                <div className='border border-black'>
                    <ul>
                        <p>Make:</p>
                        <p>Description:</p>
                    </ul>
                </div>
                <div className='border border-black'>
                    <p>Data</p>
                </div>
            </div>

        </div>
    );
};

export default DisplayResults;
