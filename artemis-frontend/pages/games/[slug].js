import Layout from "../../components/Layout";
import { GameDetails } from "../../components/game-details/GameDetails";
import { game } from "../../components/data";

export default function GameDetailsPage({slug}) {
    return (
        <Layout>
            <GameDetails game={game} />
        </Layout>
    )
}

export async function getServerSideProps({ query: { slug }}) {

    return{
        props:{
            slug:slug
        }
    }
}
