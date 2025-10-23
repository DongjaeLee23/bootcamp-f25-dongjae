
import { useState, useEffect } from "react";
import './App.css'
import Display from "./components/pokemonDisplay";
import {Moves} from "./components/moves";
import InfoPanel from "./components/infoPanel";
import MovesPanel from "./components/movesPanel";
const URL = "https://pokeapi.co/api/v2/pokemon";

function App() {
  const [pokemonId, setPokemonId] = useState(197); // current Pokémon ID 197
  const [pokemonJSON, setPokemonJSON] = useState<any | null>(null); // full data
  const [activePanel, setActivePanel] = useState<"info" | "moves">("info"); // set info/moves 

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch(`${URL}/${pokemonId}/`);
        const data = await response.json();
        setPokemonJSON(data); // save entire JSON
      } catch (e) {
        console.error("Error fetching Pokémon:", e);
      }
    }
    fetchPokemon();
  }, [pokemonId]);

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
          <Display pokemonJSON={pokemonJSON} />
          <Moves pokemonId={pokemonId} setPokemonId={setPokemonId} />
        </div>

        {/* Right column */}
        <div className="right-column">
          {activePanel === "info" && <InfoPanel pokemonJSON={pokemonJSON} />}
          {activePanel === "moves" && <MovesPanel pokemonJSON={pokemonJSON} />}
          <div className="info-buttons">
            <button onClick={() => setActivePanel("info")}>Info</button>
            <button onClick={() => setActivePanel("moves")}>Moves</button>
          </div>
        </div>
    </div>
    </>
  )
}

export default App
