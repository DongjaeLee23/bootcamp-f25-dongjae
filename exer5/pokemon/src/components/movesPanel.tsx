function MovesPanel({ pokemonJSON }: { pokemonJSON: any | null }) {
  if (!pokemonJSON) return <p>Loading info...</p>;
  return (
    <div className="info-display">
    <div className="info-panel">
        <h2>Moves</h2>
        <div className="moves-list">
            {pokemonJSON.moves.map((t: any, index: number) => (
                <p key={index}>{t.move.name}</p>
            ))}
        </div>
    </div>
    </div>
  );
}

export default MovesPanel;
