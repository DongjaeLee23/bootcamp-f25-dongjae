interface MovesProps {
  setPokemonId: (newId: number) => void;
  pokemonId: number;
}

export const Moves = ({ pokemonId, setPokemonId }: MovesProps) => {
  const handleLeft = () => setPokemonId(pokemonId - 1 >= 1 ? pokemonId - 1 : 1);
  const handleRight = () => setPokemonId(pokemonId + 1 <= 1025 ? pokemonId + 1 : 1025);

  return (
    <div className="moves">
      <p>Current Pokémon ID: {pokemonId}</p>
      <div className="move-buttons">
        <button onClick={handleLeft}>&lt;</button>
        <button onClick={handleRight}>&gt;</button>
      </div>
    </div>
  );
};

