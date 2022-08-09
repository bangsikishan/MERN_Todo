import styles from './Todo.module.css';

const Todo = () => {
    return (
        <div className={styles.main}>
            <div className={styles.todo}>
                <h2>Play Valorant</h2>
                <p>Play valorant(comp) tonight at 10:00 PM</p>
                <p className={styles.time}><span>Created At: </span>Time</p>
            </div>
            <p>Delete</p>
        </div>
    );
}
 
export default Todo;