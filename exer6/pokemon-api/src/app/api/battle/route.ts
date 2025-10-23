export const POST = async (req: Request): Promise<Response> => {
    try {
        const body = await req.json();
        const { pokemon1, pokemon2 } = body;
        const [res1, res2] = await Promise.all([
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon1}`),
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon2}`)
        ]);
        const data1 = await res1.json();
        const data2 = await res2.json();

        const stat1 = data1.stats.reduce((sum: number, s: any) => sum + s.base_stat, 0);
        const stat2 = data2.stats.reduce((sum: number, s: any) => sum + s.base_stat, 0);

        const winner = stat1 >= stat2 ? pokemon1 : pokemon2;

        return Response.json({ winner }, { status: 200 });
    } catch (error) {
        return new Response(`Error: ${error}`, {status:500})
    }

}