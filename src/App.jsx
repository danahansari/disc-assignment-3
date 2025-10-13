import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('var(--purple-10)')
  const [clickColor, setClickColor] = useState('var(--neutral-purple)')

  useEffect(() => {
    console.log('Color changed to:', color);
  }, [color]);

  return (
  <>
  <Navbar />
  <hr />
  <div className="content">
    <div className="container">
      <div
        onClick={() => setClickColor(prev =>
          prev === 'var(--neutral-purple)' ? 'red' : 'var(--purple-10)')}
        style={{backgroundColor: clickColor}}
        className="directory-title"
      >
        Find A Match!
      </div>
      <div className="search-bar">
        <input
          type="text"
          className="search"
          placeholder="search..."
          aria-label="Search profiles"
        />
        <button
          onClick={() => setColor(prev =>
            prev === 'var(--purple-10)' ? 'var(--save-green)' : 'var(--purple-10)')}
          className="filter"
          style={{backgroundColor: color}}
        >
          filter
        </button>
      </div>
    </div>
  </div>
  <div className="grid-container">
    <Profiles />
  </div>
  <hr />
  <div className="bottom-bar">Made with love by Danah Ansari</div>
  </>
  )
}

function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="logo">NYou</div>
      <ul className="nav-links">
        <li>home</li>
        <li>sign up</li>
        <li>search</li>
      </ul>
    </nav>
  );
}

function Profiles() {
  return (
    <>
      <div className="grid-item">Profile 1</div>
      <div className="grid-item">Profile 2</div>
      <div className="grid-item">Profile 3</div>
      <div className="grid-item">Profile 4</div>
      <div className="grid-item">Profile 5</div>
      <div className="grid-item">Profile 6</div>
    </>
  );
}

export default App;