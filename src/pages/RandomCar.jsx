import React from "react";

const RandomCar = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <a href="#" className="block">
                <div className="bg-gray-200 rounded-lg p-4">
                    <h2 className="text-lg font-bold text-gray-800 text-center">Car Title</h2>
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Car"
                        className="mx-auto mb-4"
                    />
                </div>
            </a>
        </div>
    );
};

export default RandomCar;
