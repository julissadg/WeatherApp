import { useState, useEffect } from 'react';
import { getCurrentWeather } from './services/getWeather';
import logo from './assets/img/background_1.jpg';
import SearchBar from './components/SearchBar';
import CardInfo from './components/CardInfo';
function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    getCurrentWeather();
  }, []);
  
  return (
    <>
      <div className='parent-container'>
        <SearchBar/>
        <CardInfo/>
        <img src={logo} className='bg' />
      </div>
    </>
  )
}

export default App
