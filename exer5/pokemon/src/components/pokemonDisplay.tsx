function Display({ pokemonJSON }: { pokemonJSON: any | null }) {
  if (!pokemonJSON) return <p>Loading...</p>;

  return (
    <div className="display">
      <h2>{pokemonJSON.name}</h2>
      <img src={pokemonJSON.sprites.front_default} alt={pokemonJSON.name} />
    </div>
  );
}

export default Display;