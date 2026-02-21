import React from 'react';

const Player = ({ player }) => {
    const { name, country, bpl_price, player_image, player_type, country_image } = player
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm border-2 p-5">
                <figure className="px-10 pt-10">
                    <img
                        src={player_image}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div>
                    <div>
                        <img src="" alt="" />
                        <h1 className='text-center'>{name}</h1>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <img className='w-10 rounded-2xl' src={country_image} alt="" />
                            <h4>{country}</h4>
                        </div>
                        <div>
                            <button className='btn rounded-2xl'>{player_type}</button>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;