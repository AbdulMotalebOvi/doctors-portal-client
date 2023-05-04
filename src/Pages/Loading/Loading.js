import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="spinner-border animate-spin w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border-4 rounded-full" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>

    );
};

export default Loading;