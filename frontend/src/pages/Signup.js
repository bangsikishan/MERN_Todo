import styles from './Signup.module.css';

const Signup = () => {
    return (
        <div className={styles.register}>
            <form>
                <h2>Signup</h2>
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
                <button>Register</button>
            </form>
        </div>
    );
}
 
export default Signup;