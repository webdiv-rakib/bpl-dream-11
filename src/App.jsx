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

  return (
    <>
      <Header coins={coins}></Header>
      <Hero handleFreeCredit={handleFreeCredit}
        claimCount={claimCount}></Hero>
      {showSuccess && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 transition-all duration-300">
          <div className="bg-green-100 border-2 border-green-500 text-green-800 px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce">
            <p className="font-bold">Successfully claimed free credits!</p>
          </div>
        </div>
      )}
      <Players></Players>
    </>
  )
}

export default App
