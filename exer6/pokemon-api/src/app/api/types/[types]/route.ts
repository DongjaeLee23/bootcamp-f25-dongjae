export const GET = async (
    req: Request, 
    { params }: { params: { types: string } } 
): Promise<Response> => {
    try {
        const awaitedParams = await params;
        const pokemonType = awaitedParams.types
        if (!pokemonType)
            return new Response("Missing type name", { status: 400 });

        const res = await fetch(`https://pokeapi.co/api/v2/type/${pokemonType}`);
        if (!res.ok)
            return new Response("Invalid Pokémon name", { status: 404 });

        const data = await res.json();
        const filtered = {
            pokemon: data.pokemon.map((t:any) => t.pokemon.name)
        };
        return Response.json(filtered, { status: 200 });
    } catch (error) {
        console.log(error)
        return new Response("error", { status: 500 });
  }
}