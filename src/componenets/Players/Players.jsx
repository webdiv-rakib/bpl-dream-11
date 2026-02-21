import React from 'react';

const Players = () => {
    return (
        <div className='flex justify-between items-center px-10 mt-5'>
            <div>
                <h3 className='text-xl font-bold'>Available Players</h3>
            </div>
            <div>
                <button className='btn rounded-l-2xl border-[#e7fe29]'>Available: </button>
                <button className='btn rounded-r-2xl border-[#e7fe29]'>Selected: </button>
            </div>
        </div>
    );
};

export default Players;