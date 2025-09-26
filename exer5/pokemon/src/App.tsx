
import './App.css'
import Display from "./components/pokemonDisplay";
import Moves from "./components/moves";
import InfoPanel from "./components/infoPanel";

function App() {


  return (
    <>
      <div>
        <h1>
          Bits of Good Mid-Semester Project
        </h1>
      </div>
      <div className="app-container">
        {/* Left column */}
        <div className="left-column">
          <Display />
          <Moves />
        </div>

        {/* Right column */}
        <InfoPanel />
    </div>
    </>
  )
}

export default App
