import styles from '../styles/Login.module.css';

export default function Login() {
    return (
        <div className={styles.loginButton}>
            <a href="/api/auth/login">Login</a>
        </div>
    )
}