import styles from "../styles/SignUp.module.css";
export default function SignUp() {
	return (
		<div className={styles.signUpButton}>
			<a href='/api/auth/login'>Sign Up</a>
		</div>
	);
}
