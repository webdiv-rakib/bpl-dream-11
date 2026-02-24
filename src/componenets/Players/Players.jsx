import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';

const Players = ({ handleChoosePlayer, selectedCount, selectedPlayers, handleRemovePlayer }) => {
    const [players, setPlayers] = useState([]);
    const [isActive, setIsActive] = useState({
        available: true,
        status: 'available'
    });

    const handleIsActiveState = status => {
        if (status === 'available') {
            setIsActive({ available: true, status: 'available' });
        } else {
            setIsActive({ available: false, status: 'selected' });
        }
    };

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data));
    }, []);

    return (
        <div className="px-10 mt-10">
            <div className='flex justify-between items-center mb-8'>
                <div>
                    <h3 className='text-xl font-bold'>
                        {isActive.available ? `Available Players: ${players.length}` : `Selected Player (${selectedCount}/6)`}
                    </h3>
                </div>
                <div className="flex border rounded-xl overflow-hidden">
                    <button
                        className={`btn rounded-none border-none ${isActive.available ? ' bg-[#e7fe29] text-black' : ''}`}
                        onClick={() => handleIsActiveState('available')}>Available</button>

                    <button
                        className={`btn rounded-none border-none ${!isActive.available ? 'bg-[#e7fe29] text-black' : ''}`}
                        onClick={() => handleIsActiveState('selected')}>Selected ({selectedCount})</button>
                </div>
            </div>
           
            {/* CONDITIONAL RENDERING STARTS HERE */}
            {isActive.available ? (
                // AVAILABLE GRID VIEW
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-80 relative'>
                    {players.map(player => (
                        <Player
                            player={player}
                            key={player.player_id} // Changed from player.id to match your JSON
                            handleChoosePlayer={handleChoosePlayer}
                        />
                    ))}
                </div>
            ) : (
                // SELECTED LIST VIEW
                <div className="space-y-4 mb-50">
                    {selectedPlayers.map(player => (
                        <div key={player.player_id} className="flex justify-between items-center p-4 border rounded-2xl shadow-sm">
                            <div className="flex items-center gap-4">
                                <img className="w-20 h-20 rounded-2xl object-cover" src={player.player_image} alt="" />
                                <div>
                                    <h2 className="text-xl font-bold">{player.name}</h2>
                                    <p className="text-gray-500">{player.player_type}</p>
                                    <p className="font-semibold text-orange-500">{player.bpl_price}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => handleRemovePlayer(player.player_id)}
                                className="btn btn-ghost text-red-500 text-2xl"
                            >
                                🗑️
                            </button>
                        </div>
                    ))}
                    <button
                        onClick={() => handleIsActiveState('available')}
                        className="btn bg-[#e7fe29] font-bold mt-4 text-black rounded-2xl"
                    >
                        Add More Player
                    </button>
                </div>
            )}
        </div>
    );
};

export default Players;