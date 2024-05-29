import React from 'react';

export default function ErrorMessage({ message }) {
    if (!message || (Array.isArray(message) && message.length === 0)) return null;

    return (
        <div className="text-red-500 mb-4">
            {Array.isArray(message) ? (
                <ul>
                    <>Password must contain: </>
                    {message.map((item, index) => (
                        <li key={index} className="list-disc ml-4">{item}</li>
                    ))}
                </ul>
            ) : (
                message
            )}
        </div>
    );
}
