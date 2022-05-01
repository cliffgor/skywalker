import './App.css';

import React, {useState} from 'react';

import logo from './logo.svg';

function App() {
  const [resultsFound, setResultsFound] = useState([]);
  const [search, setSearch] = useState('');

  const searchResults = async (query: string) => {
    const result = await fetch(`https://swapi.dev/api/films?search=${query}`)
    return (await result.json()).results
  }



  return (
    <div className="App">
      <h1>Welcome to Skywalker</h1>
    </div>
  );
}

export default App;
