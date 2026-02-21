import { useState } from 'react'
import './App.css'
import Header from './componenets/Header/Header'
import Hero from './componenets/Hero/Hero'
import Players from './componenets/Players/Players'

function App() {
  // state handle for coins
  const [coins, setCoins] = useState(0);

  // state handle for claim count
  const [claimCount, setClaimCount] = useState(0);

  // state to show modal
  const [showSuccess, setShowSuccess] = useState(false);

  // state to selected players
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleFreeCredit = () => {
    if (claimCount < 3) {
      setCoins(prevCoin => prevCoin + 600000);
      setClaimCount(prevCount => prevCount + 1);
      // show the modal
      setShowSuccess(true);
      // hide it after 3sec
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
  };

  const handleChoosePlayer = player => {
    const isExist = selectedPlayers.find((p) => p.id === player.id);
    if (isExist) {
      alert('Player already selected')
    }
    else {
      const newSelectedPlayers = [...selectedPlayers, player];
      setSelectedPlayers(newSelectedPlayers);
      console.log('Team Size: ', newSelectedPlayers.length)
    }
  }

  return (
    <>
      <Header coins={coins}></Header>

      <Hero handleFreeCredit={handleFreeCredit}
        claimCount={claimCount}
      ></Hero>

      {showSuccess && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 transition-all duration-300">
          <div className="border-2 border-[#e7fe29] text-green-800 px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce">
            <p className="font-bold text-white">Successfully claimed free credits!</p>
          </div>
        </div>
      )}

      <Players
        handleChoosePlayer={handleChoosePlayer}
        selectedCount={selectedPlayers.length}
      ></Players>
    </>
  )
}

export default App
