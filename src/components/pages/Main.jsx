import React, { useState } from 'react';

const Main = () => {

    const [showOptions, setShowOptions] = useState(false);
    const [animate, setAnimate] = useState('');

    const handleCTAClick = () => {
        setAnimate('doorSwing');
        setTimeout(() => {
            setShowOptions(true);
            setAnimate('');
        }, 2000);
    };

    return (
        <div className='bg-background-image bg-cover'>
            <div className="absolute inset-0 bg-zinc-600 opacity-60">
                {/*Intentionally left blank 
                LOL
                */}
            </div>
            <div className={`flex flex-col items-center justify-center min-h-screen relative z-10 ${animate}`}>
                <div className="bg-white text-black p-8 px-24 rounded-lg shadow-lg w-auto text-center opacity-95">
                    <h1 className="text-4xl font-bold mb-4">All Car DB</h1>
                    <p className="text-lg mb-8">Car DB Text</p>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-3xl"
                        onClick={handleCTAClick}
                    >
                        Find A Car
                    </button>
                </div>
            </div>

            <style jsx>{`
                .doorSwing {
                    transform: rotateY(120deg);
                    transform-origin: 0%;
                    transition: transform 2s ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default Main;
