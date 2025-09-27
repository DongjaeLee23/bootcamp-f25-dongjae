function InfoPanel({ pokemonJSON }: { pokemonJSON: any | null }) {
  if (!pokemonJSON) return <p>Loading info...</p>;
  return (
    <div className="right-column">
      <div className="info-display">
        <div className="info-panel">
            <h2>Info</h2>
            <p>Height: {pokemonJSON.height}</p>
            <p>Weight: {pokemonJSON.weight}</p>
            <p>Types: {pokemonJSON.types.map((t: any) => t.type.name).join(", ")}</p>
        </div>
      </div>
      <div className="info-buttons">
        <button>Info</button>
        <button>Moves</button>
      </div>
    </div>
  );
}

export default InfoPanel;
