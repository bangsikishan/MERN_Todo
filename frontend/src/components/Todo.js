import styles from './Todo.module.css';

const Todo = ({ todo }) => {
    return (
        <div className={styles.main}>
            <div className={styles.todo}>
                <h2>{todo.name}</h2>
                <p>{todo.description}</p>
                <p className={styles.time}><span>Created At: </span>{todo.createdAt}</p>
            </div>
            <p>Delete</p>
        </div>
    );
}
 
export default Todo;