import styles from "../../styles/MenuItem.module.css";
export const MenuItem = ({ title }) => {
	return (
		<div className={styles.card}>
			<span className='material-icons'>sports_esports</span>
			<h3>{title}</h3>
		</div>
	);
};
