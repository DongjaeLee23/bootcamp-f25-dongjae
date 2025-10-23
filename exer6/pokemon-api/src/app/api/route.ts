export const GET = async (
  req: Request
): Promise<Response> => {
    try {

    const pokemonId = Math.floor(Math.random() * 1025) + 1;
    if (!pokemonId)
      return new Response("Missing Pokémon ID", { status: 400 });

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    if (!res.ok)
      return new Response("Invalid Pokémon name", { status: 404 });

    const data = await res.json();
    const filtered = {
      name: data.name,
      sprite: data.sprites.front_default,
      type: data.types.map((t:any) => t.type.name)
    };

    return Response.json(filtered, { status: 200 });
  } catch (error) {
    return new Response("error error", { status: 500 });
  }
};