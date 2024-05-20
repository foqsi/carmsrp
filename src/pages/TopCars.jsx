import React from 'react';
import { data } from '../data/topCars';

const TopCars = () => {
    return (
        <div className="w-[85%] mx-auto mt-32">
            {data.map(car => (
                <div key={car.id} className="flex items-center justify-center my-4">

                    {/* Number */}
                    <div className="flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full text-white font-bold text-lg mr-4">{car.id}</div>

                    {/* Image */}
                    <div className="w-1/4 flex-shrink-0 mr-4">
                        <img src={car.img} alt={car.name} className="w-full object-cover rounded-lg max-h-48" />
                    </div>

                    {/* Description */}
                    <div className="flex-1">
                        <h1>{car.name}</h1>
                        <p>{car.description}</p>
                        <blockquote className="mt-2 italic">{car.quote}</blockquote>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TopCars;
