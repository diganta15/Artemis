import styles from "../../styles/GamesSection.module.css";
import GamesItem from "./GamesItem";
export default function GamesSection({ title, items }) {
	return (
		<div className={styles.gamesSection}>
			<h1>{title}</h1>
			<div className={styles.gamesSectionGrid}>
                {items.map((item) => (
                    <GamesItem key={item.id} item={item} />
                ))}
            </div>
		</div>
	);
}
