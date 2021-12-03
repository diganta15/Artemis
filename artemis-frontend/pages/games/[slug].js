import Layout from "../../components/Layout";
import { GameDetails } from "../../components/game-details/GameDetails";
// import { game } from "../../components/data";

export default function GameDetailsPage({slug,game}) {
    return (
        <Layout title={slug} >
            <GameDetails game={game} />
        </Layout>
    )
}

export async function getServerSideProps({ query: { slug }}) {

    const gameDetails = await fetch(`http://localhost:3000/api/games/game/${slug}`);
    const game = await gameDetails.json();

    return{
        props:{
            slug:slug,
            game:game
        }
    }
}
