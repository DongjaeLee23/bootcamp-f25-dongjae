interface MovesProps {
  setPokemonId: (newId: number) => void;
  pokemonId: number;
}

export const Moves = ({ pokemonId, setPokemonId }: MovesProps) => {
  const handleLeft = () => setPokemonId(pokemonId - 1 >= 1 ? pokemonId - 1 : 1);
  const handleRight = () => setPokemonId(pokemonId + 1 <= 1025 ? pokemonId + 1 : 1025);

  return (
    <div className="moves">
      <h2>Moves</h2>
      <p>Current Pokémon ID: {pokemonId}</p>
      <div className="move-buttons">
        <button onClick={handleLeft}>Left</button>
        <button onClick={handleRight}>Right</button>
      </div>
    </div>
  );
};

