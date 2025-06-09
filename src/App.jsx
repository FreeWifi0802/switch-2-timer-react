import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const _second = 1000;
  const _minute = _second * 60;
  const _hour   = _minute * 60;
  const _day    = _hour * 24;

function App() {
  const releaseDate = new Date("6/9/2025 8:30AM");
  const [timeLeft, setTimeLeft] = useState(releaseDate - new Date());

  useEffect(() => {
      let timer = setInterval(() => {
      updateTimer(releaseDate)
      }, _second);

     return () => {
      clearInterval(timer);
     }
  }, [releaseDate]);

  function updateTimer(goalTime){
    setTimeLeft(goalTime - new Date());
  }

   if (timeLeft <= 0){
    return (
      <>
      <h1>The Switch has been released!</h1>
      </>
    );
  } else {
    const daysLeft = String(Math.floor(timeLeft / _day)).padStart(2, '0');
            const hoursLeft = String(Math.floor((timeLeft % _day) / _hour)).padStart(2, '0');
            const minutesLeft = String(Math.floor((timeLeft % _hour) / _minute)).padStart(2, '0');
            const secondsLeft = String(Math.floor((timeLeft % _minute) / _second)).padStart(2, '0');
    return (
    <>
      <h1>Time Left: Days: {daysLeft} Hours: {hoursLeft} Minutes: {minutesLeft} Seconds: {secondsLeft}s</h1>
    </>
    )
  }

  
}

export default App