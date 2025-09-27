import type { Dispatch, SetStateAction } from "react";

interface MovesProps {
  setPokemonId: Dispatch<SetStateAction<number>>;
}

function Moves({ setPokemonId }: MovesProps) {
  const handleLeft = () => setPokemonId((prev) => Math.max(prev - 1, 1));
  const handleRight = () => setPokemonId((prev) => Math.min(prev + 1, 1000));

  return (
    <div className="moves">
      <h2>Moves</h2>
      <div className="move-buttons">
        <button onClick={handleLeft}>Left</button>
        <button onClick={handleRight}>Right</button>
      </div>
    </div>
  );
}

export default Moves;
