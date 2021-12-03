export default async (req, res) => {
	if (req.method === "GET") {
		const { slug } = req.query;
		console.log(slug);
        const response = await fetch(`https://api.rawg.io/api/games/${slug}?key=1b349dee02d9402893d1b2be1c6e747c`);
		const data = await response.json();

		res.status(200).json(data);
	} else {
		res.setHeader("Allow", ["GET"]);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
