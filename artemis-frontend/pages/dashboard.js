import { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import styles from "../styles/Dashboard.module.css";
import Layout from "../components/Layout";
import Games from "../components/games-grid/Games";
import Menu from "../components/menu/Menu";

export default function Dashboard({data}) {
	const { user, isLoading, error } = useUser();

	console.log(user)

	return (
		<Layout title='Dashboard' >
		
			<div className={styles.container}>
				<div className={styles.mainGrid}>
					<Menu />
					<Games data={data.results} />
				</div>
			</div>
		</Layout>
	);
}

export async function getServerSideProps() {
	const res = await fetch("http://localhost:3000/api/games/popular");

	const data = await res.json();


	return {
		props:{
			data
		}
	}
}