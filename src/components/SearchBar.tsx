import { useState } from 'react';
import searchIcon from '../assets/img/search.png';
import { Alert, AlertTitle } from '@mui/material';

const SearchBar = ({ request, setData, data, error, setError }: { request: any, setData: any, data: any, error: any, setError:any }) => {

  const [location, setLocation] = useState('');
  const handleChange = (e: any) => {
    let value = e.target.value;
    setLocation(value);
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await request(location).then((res: any) => {
      setError('');
      setData(res?.data);
    }).catch((err: any) => {
      setError(err)
    });
  }
  return (
    <div className="search-bar-container" style={{
      marginTop: data ? '2rem' : '15rem'
    }}>
      <form onSubmit={(e) => handleSubmit(e)} className='search-bar'>
        <input className='form-control' name="query" type="text" placeholder="Location" onChange={(e) => handleChange(e)} autoComplete="off" />
        <button type="submit"><img src={searchIcon} /></button>
      </form>
      {error && <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        <strong>Location not found</strong>
      </Alert>}
    </div>

  )
}

export default SearchBar;