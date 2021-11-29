import styles from '../styles/Login.module.css';
//password: 33444kkll

export default function Login() {
    return (
        <div className={styles.loginButton}>
            <a href="/api/auth/login">Login</a>
        </div>
    )
}
