import { useState } from 'react';
import { getCurrentWeather } from './services/getWeather';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import SearchBar from './components/SearchBar';
import CardInfo from './components/CardInfo';

function App() {
  const [data, setData] = useState('');
  const [error, setError] = useState('');

  return (
    <>
      <div className='parent-container'>
        <SearchBar request={getCurrentWeather} setData={setData} data={data} error={error} setError={setError}/>
        {(data && !error) &&
          <CardInfo data={data} />
        }
        
      </div>
    </>
  )
}

export default App
