import './App.css';

import React, {FormEvent, useEffect, useState} from 'react';

import FilmsComponent from './FilmsComponent';
import { IFilms } from './IFilms'

function App() {
  const [resultsFound, setResultsFound] = useState<IFilms[]>([]);
  const [searchSkywalker, setSearchSkywalker] = useState('');

  const searchResults = async (query: string): Promise<IFilms[]> => {
    const result = await fetch(`https://swapi.dev/api/films?search=${query}`)
    return (await result.json()).results
  }

  const search = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.querySelector('#searchText') as HTMLInputElement;
    setSearchSkywalker(input.value)
  }


useEffect(() => {
  (async () => {
    const query = encodeURIComponent(searchSkywalker);
    if (query){
      const response = await searchResults(query);
      setResultsFound(response);
    } 
  })();
},[searchSkywalker]);
  return (
    <div className="App">
      <h1>Welcome to Skywalker</h1>
      <form  className="searchForm" onSubmit={event => search(event)}>
        <input id="searchText" type="text" />
        <button>Search </button>
      </form>
       {searchSkywalker && <p> Results for {searchSkywalker}...</p>}

       <div className="films-container">
         {resultsFound.length && 
          resultsFound.map(films =>
          (<FilmsComponent key={films.title} films={films}></FilmsComponent>)
          )}
       </div>
    </div>
  );
}

export default App;
