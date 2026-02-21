import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
const Players = ({ handleChoosePlayer, selectedCount }) => {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])
    return (
        <div>
            <div className='flex justify-between items-center px-10 mt-5'>
                <div>
                    <h3 className='text-xl font-bold'>Available Players: {players.length}</h3>
                </div>
                <div>
                    <button className='btn rounded-l-2xl border-[#e7fe29]'>Available: </button>
                    <button className='btn rounded-r-2xl border-[#e7fe29]'>Selected: ({selectedCount})</button>
                </div>
            </div>
            <div className='grid grid-cols-4 justify-self-center mt-10 gap-10'>
                {
                    players.map(player => <Player
                        player={player}
                        key={player.id}
                        handleChoosePlayer={handleChoosePlayer}
                    ></Player>)
                }
            </div>
        </div>
    );
};

export default Players;