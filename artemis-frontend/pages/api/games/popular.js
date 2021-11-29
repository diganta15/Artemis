export default async (req, res) => {
    if(req.method === 'GET') {
        const response = await fetch(`https://api.rawg.io/api/games?key=1b349dee02d9402893d1b2be1c6e747c`);
        const games = await response.json();
  
        res.status(200).json(games);
    } 
    else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}