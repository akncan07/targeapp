import logoTarge from './logo-targe.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoTarge} className="App-logo" alt="logo" />
        <p>
         Powered by Targe Development
        </p>
        <a
          className="App-link"
          href="https://www.targe.com.tr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Targe is loading..
        </a>
      </header>
    </div>
  );
}

export default App;
