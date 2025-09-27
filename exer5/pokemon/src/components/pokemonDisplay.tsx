import { useState } from "react";
function Display({ pokemonJSON }: { pokemonJSON: any | null }) {
  const [shiny, setShiny] = useState(false);
  if (!pokemonJSON) return <p>Loading...</p>;
  

  // Define colors for types
  const typeColors: { [key: string]: string } = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };
  const handleImageClick = () => {
    setShiny((prev) => !prev); // toggle shiny on click
  };

  const imgSrc = shiny
    ? pokemonJSON.sprites.front_shiny
    : pokemonJSON.sprites.front_default;
  

  return (
    <div className="display">

      <img
        className="pokemon-image"
        src={imgSrc}
        alt={pokemonJSON.name}
        onClick={handleImageClick}
        style={{ cursor: "pointer" }}
      />
      <h2 className="pokemon-name">{pokemonJSON.name}</h2>
      <h4>Type</h4>
      <div className="type-container">
        {pokemonJSON.types.map((t: any) => {
          const typeName = t.type.name.toLowerCase();
          return (
            <div
              key={typeName}
              className="type-box"
              style={{ backgroundColor: typeColors[typeName] || "#777" }}
            >
              {typeName}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Display;
