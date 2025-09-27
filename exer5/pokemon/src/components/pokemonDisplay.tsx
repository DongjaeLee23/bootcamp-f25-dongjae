import { useEffect, useState } from "react";

function Display({ pokemonId }: { pokemonId: number }) {
  const [pokemonImg, setPokemonImg] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
      const data = await response.json();
      setPokemonImg(data.sprites.front_default); // save image URL in state
    }
    fetchPokemon();
  }, [pokemonId]); // empty deps → run only once on mount

  return (
    <div className="display">
      <h2>Display</h2>
      {pokemonImg ? (
        <img src={pokemonImg} alt="Azumarill" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Display;
