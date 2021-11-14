import Link from "next/link";
import styles from "../../styles/MenuItem.module.css";
export const MenuItem = ({ title, icon, link }) => {
	return (
		<Link href={`/${link}`}>
			<a className={styles.link}>
				<div className={styles.card}>
					<i className={icon}></i>
					<h3>{title}</h3>
				</div>
			</a>
		</Link>
	);
};
