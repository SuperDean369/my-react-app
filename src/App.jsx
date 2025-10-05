import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const navStyle = {
    background: '#23242a',
    color: '#fff',
    padding: '16px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.1rem',
    marginBottom: '32px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
  };
  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 24px',
    fontWeight: 500,
    letterSpacing: '0.5px',
    transition: 'color 0.2s',
  };
  const [count, setCount] = useState(0)
  const [countTwo, setCountTwo] = useState(0)

  return (
    <>
      <nav style={navStyle}>
        <a href="#" style={linkStyle}>Home</a>
        <a href="#about" style={linkStyle}>About</a>
        <a href="#services" style={linkStyle}>Services</a>
        <a href="#contact" style={linkStyle}>Contact</a>
      </nav>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} style={{ marginBottom: '16px' }}>
          count is {count}
        </button>
        <div style={{ height: '16px' }}></div>
        <button onClick={() => setCountTwo((countTwo) => countTwo + 2)}>
          count in twos is {countTwo}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
