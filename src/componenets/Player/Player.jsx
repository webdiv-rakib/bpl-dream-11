import React from 'react';

const Player = ({ player }) => {
    const { name, country, bpl_price, player_image, player_type, country_image, batting_hand, bowling_hand, rating } = player
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm border-2 p-5 border-[#e7fe29]">
                <figure className="px-10">
                    <img
                        src={player_image}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div>
                    <div className='mt-2 text-xl font-semibold'>
                        <h1 className='text-center'>{name}</h1>
                    </div>
                    <div className='flex justify-between items-center mt-5'>
                        <div className='flex items-center gap-2'>
                            <img className='w-10 rounded-2xl' src={country_image} alt="" />
                            <h4>{country}</h4>
                        </div>
                        <div>
                            <button className='btn rounded-2xl'>{player_type}</button>
                        </div>
                    </div>
                    <hr className='mt-2 border-[#e7fe29]' />
                </div>
                <div className='mt-5 space-y-3'>
                    <div className='text-left'>
                        <h4>Rating: {rating}</h4>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h4>Batting: {batting_hand}</h4>
                        <h4>Bowling: {bowling_hand}</h4>
                    </div>
                    <div className="flex justify-between items-center">
                        <h4>Price: {bpl_price}</h4>
                        <button className="btn rounded-3xl">Choose Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;