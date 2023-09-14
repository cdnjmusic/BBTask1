import './App.css';

function App() {
  const logoUrl = 'https://www.propelleraero.com/wp-content/uploads/2021/05/Vector.svg';
  const linkUrl = 'https://www.propelleraero.com/dirtmate/';

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
