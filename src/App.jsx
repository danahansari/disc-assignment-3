import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Navbar from './Navbar.jsx'
import Profiles from './Profiles.jsx'

function App() {
  const [color, setColor] = useState('var(--purple-10)')
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    if (buttonClicked) {
      setColor((prev) =>
        prev === "var(--purple-10)" ? "var(--save-green)" : "var(--purple-10)"
      );
      setButtonClicked(false); // reset so you can click again later
    }
  }, [buttonClicked]);

  return (
  <>
  <Navbar />
  <hr />
  <div className="content">
    <div className="container">
      <div
        onClick={() => setButtonClicked(true)}
        style={{color: color}}
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
          onClick={() => setButtonClicked(true)}
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
  );
}

export default App;