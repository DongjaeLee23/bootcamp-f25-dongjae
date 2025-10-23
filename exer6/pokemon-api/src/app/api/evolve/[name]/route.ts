export const GET = async (
    req: Request, 
    { params }: { params: { name: string } } 
): Promise<Response> => {
    try {
        const awaitedParams = await params;
        const pokemonName = awaitedParams.name
        if (!pokemonName)
            return new Response("Missing pokemon name", { status: 400 });

        const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`);
        if (!speciesRes.ok)
            return new Response("Invalid Pokémon name", { status: 404 });

        const speciesData = await speciesRes.json();

        const evoRes = await fetch(speciesData.evolution_chain.url);
        const evoData = await evoRes.json();

        let nextEvolution = pokemonName;
        function findNext(chain: any): string | null {
            if (chain.species.name == pokemonName && chain.evolves_to.length > 0) {
                return chain.evolves_to[0].species.name;
            }
            for (const evo of chain.evolves_to) {
                const result = findNext(evo);
                if (result) return result;
            }
            return null;
        }

        nextEvolution = findNext(evoData.chain) || pokemonName;
        const evolution = { evolution: nextEvolution }
        return Response.json(evolution, { status: 200 });
        } catch (error) {
            console.log(error)
        return new Response("error", { status: 500 });
  }
}