function InfoPanel({ pokemonJSON }: { pokemonJSON: any | null }) {
  if (!pokemonJSON) return <p>Loading info...</p>;
  return (
    <div className="info-display">
    <div className="info-panel">
        <h2>Info</h2>
        <div className="stats-list">
            <p>Height: {pokemonJSON.height}</p>
            <p>Weight: {pokemonJSON.weight}</p>
            {pokemonJSON.stats.map((t: any, index: number) => (
                <p key={index}>{t.stat.name}: {t.base_stat}</p>
            ))}
        </div>
    </div>
    </div>
  );
}

export default InfoPanel;
