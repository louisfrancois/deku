import React from 'react';
import Nodes from './components/Nodes'
import './App.css';

function App() {
  return (
    <div className="app">
      <form className="search-form">
        <input
          className="search-bar"
          type="text">
        </input>
        <button
          className="search-button"
          type="submit">
          Search
        </button>
      </form>
      <React.Fragment>
        <Nodes />
      </React.Fragment>
    </div>
  );
}

export default App;
