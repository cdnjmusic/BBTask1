import React from 'react';
import './App.css';

// Import the logo and link constants
import { logoUrl, linkUrl } from './constants'; // Create a separate constants.js file

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
          <img src={logoUrl} className="App-logo" alt="logo" />
        </a>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
