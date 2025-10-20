import { use, useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Navbar from './Navbar.jsx'
import Profiles from './Profiles.jsx'

function App() {
  const [findColor, setFindColor] = useState('var(--neutral-purple)')
  const [filterColor, setFilterColor] = useState('var(--purple-10)')
  const [findButtonClicked, setFindButtonClicked] = useState(false);
  const [filterButtonClicked, setFilterButtonClicked] = useState(false);
 
  useEffect(() => {
    if (findButtonClicked) {
      setFindColor((prev) =>
        prev === "var(--neutral-purple)" ? "var(--northwestern-purple)" : "var(--neutral-purple)"
      );
      setFindButtonClicked(false);
    }
  }, [findButtonClicked]);

  useEffect(() => {
    if (filterButtonClicked) {
      setFilterColor((prev) =>
        prev === "var(--purple-10)" ? "var(--save-green)" : "var(--purple-10)"
      );
      setFilterButtonClicked(false);
    }
  }, [filterButtonClicked]);

  return (
  <>
  <Navbar />
  <hr />
  <div className="content">
    <div className="container">
      <div
        onClick={() => setFindButtonClicked(true)}
        style={{color: findColor}}
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
          onClick={() => setFilterButtonClicked(true)}
          className="filter"
          style={{backgroundColor: filterColor}}
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