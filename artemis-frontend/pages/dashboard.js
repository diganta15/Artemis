import { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import styles from "../styles/Dashboard.module.css";
import Layout from "../components/Layout";
import Games from "../components/games-grid/Games";
import Menu from "../components/menu/Menu";

export default function Dashboard() {
	const { user, isLoading, error } = useUser();

	return (
		<Layout>
			<div className={styles.container} >
				<div className={styles.header}>
					<h1>Dashboard</h1>
				</div>
				<div className={styles.mainGrid}>
					<Menu />
					<Games />
				</div>
			</div>
		</Layout>
	);
}
