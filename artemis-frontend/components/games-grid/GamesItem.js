import Image from "next/image";
import Platform from "./Platform";
import styles from "../../styles/GamesItem.module.css";
import Link from "next/link";
export default function GamesItem({ item }) {
	const { parent_platforms, released } = item;
	const { rating } = item;

	const date = new Date(released);

	const style = {
		color: "white",
		fontFamily: "Nunito,sans-serif",
		fontSize: "17px",
	};

	if (rating < 2) {
		style.color = "red";
	}
	if (rating < 3.7 && rating > 2) {
		style.color = "#fcff82";
	}
	if (rating > 3.7) {
		style.color = "#42b883";
	}
	return (
		<div className={styles.card}>
			<Link href={`/games/${item.slug}`}>
				<a className={styles.link}>
					<Image
						src={item.background_image}
						className={styles.image}
						width={350}
						height={170}
					/>

					<div className={styles.details}>
						<h3 className={styles.name}>{item.name}</h3>
						<h2 style={style}>{item.rating}</h2>
						<p className={styles.released}>
							Released:{" "}
							{date.getDate() +
								"/" +
								date.getMonth() +
								"/" +
								date.getFullYear()}{" "}
						</p>
						<div className={styles.metacriticRating}>
							<p>
								Metacritic: <span>{item.metacritic}</span>
							</p>
						</div>
						<div className={styles.platforms}>
							<p>Platforms: </p>
							<span className={styles.platform}>
								{" "}
								{parent_platforms.map((platform) => (
									<Platform
										key={platform.platform.id}
										slug={platform.platform.slug}
									/>
								))}
							</span>
						</div>
						<div className={styles.esrb}>
							<p>ESRB: </p>
							<span>{item.esrb_rating.name}</span>
						</div>
						<div className={styles.playtime}>
							<p>Play Time: </p>
							<span>{item.playtime} hrs</span>
						</div>
					</div>
				</a>
			</Link>
		</div>
	);
}
