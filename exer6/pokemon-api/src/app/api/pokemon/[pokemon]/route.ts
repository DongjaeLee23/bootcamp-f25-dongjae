export const GET = async (
  req: Request,
  { params }: { params: { pokemon: string } } 
): Promise<Response> => {
    try {
    const awaitedParams = await params;
    const pokemonName = awaitedParams.pokemon;
    if (!pokemonName)
      return new Response("Missing Pokémon name", { status: 400 });

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
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