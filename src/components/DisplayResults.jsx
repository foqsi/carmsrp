import React from 'react';

const DisplayResults = ({ selectedTrimDetail, otherVehicleDetails, make_Model_Trim_Body }) => {
    return (
        <div className='md:p-2'>
            <h2 className='font-bold text-sm md:text-lg my-2'>{selectedTrimDetail}</h2>

            <div className="grid grid-cols-[2fr,3fr] gap-1 m-2">
                <div className='border border-black'>
                    <ul>
                        <p>Name:</p>
                        <p>MSRP:</p>
                        <p>Invoice:</p>
                        <p>Cargo Capacity:</p>
                    </ul>
                </div>
                <div className='border border-black'>
                    <p>{otherVehicleDetails?.name}</p>
                    <p>{otherVehicleDetails?.msrp}</p>
                    <p>{otherVehicleDetails?.invoice}</p>
                    <p>{make_Model_Trim_Body?.cargo_capacity}</p>
                </div>
            </div>
        </div>
    );
};

export default DisplayResults;
