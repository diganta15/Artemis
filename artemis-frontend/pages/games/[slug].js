import Layout from "../../components/Layout";
export default function GameDetails({slug}) {
    return (
        <div>
            <h1>Games Details</h1>
        </div>
    )
}

export async function getServerSideProps({ query: { slug }}) {
    console.log(slug);
    return{
        props:{
            slug:slug
        }
    }
}
