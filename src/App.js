import React, { useEffect, useState } from 'react';
import Nodes from './components/Nodes'
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Mariah Carey');

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    // stop the page refresh
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="app">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}>
        </input>
        <button
          className="search-button"
          type="submit">
          Search
        </button>
      </form>
      <React.Fragment>
        <Nodes query={query}/>
      </React.Fragment>
    </div>
  );
}

export default App;
