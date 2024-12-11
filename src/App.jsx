
import './App.css'
import Cards from './Components/Cards'
import Sidebar from './Components/Sidebar'
import { useState, useEffect } from 'react';



function App() {

  const [timeLeft, setTimeLeft] = useState(60);
  const [gameStatus, setGameStatus] = useState('');
  const [timer, setTimer] = useState(null);

  
  // Timer Logic
  useEffect(() => {
    if (timeLeft === 0 && gameStatus === '') {
      clearInterval(timer);
      setGameStatus('lost'); // Trigger game lost logic when timeLeft = 0
      return;
    }

    if (gameStatus === '' && timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      setTimer(interval);

      return () => clearInterval(interval);
    }

    return () => clearInterval(timer);
  }, [timeLeft, gameStatus]);

  // Restart Game Logic
  function restartGame(status) {
    if (timer) {
      clearInterval(timer);
    }
    setTimeLeft(60);
    setGameStatus(status);

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    setTimer(interval);
  }

  
  
  return (
    <>
    <h1 className=' text-light fw-bolder ' style={{fontSize:"65px", marginLeft:"400px", textShadow:"2px 2px 1px black"}}>Memory Game</h1>
    <div className="container  d-flex">
    
    <Cards   setGameStatus={setGameStatus}   />

    <Sidebar timeLeft={timeLeft}  gameStatus={gameStatus} />
    
    </div>
      
    </>
  )
}

export default App
