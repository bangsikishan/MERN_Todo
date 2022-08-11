import styles from './Login.module.css';

const Login = () => {
    return (
        <div className={styles.login}>
            <form>
                <h2>Login</h2>
                <label>
                    <span>Email:</span>
                    <input type="email" required />
                    <div className={styles.error}></div>
                </label>
                <label>
                    <span>Password:</span>
                    <input type="password" required />
                    <div className={styles.error}></div>
                </label>
                <button>Login</button>
            </form>
        </div>
    );
}
 
export default Login;