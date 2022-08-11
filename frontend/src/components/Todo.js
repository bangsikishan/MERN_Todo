import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

import styles from './Todo.module.css';

const Todo = ({ todo }) => {
    const { dispatch } = useContext(TodoContext);

    const deleteTodo = async () => {
        const response = await fetch(`/${todo._id}`, {
            method: 'DELETE'
        });

        const data = await response.json();
        
        dispatch({ type: 'DELETE_TODO', payload: data.todo });
    }


    return (
        <div className={styles.main}>
            <div className={styles.todo}>
                <h2>{todo.name}</h2>
                <p>{todo.description}</p>
                <p className={styles.time}><span>Created At: </span>{formatDistanceToNow(new Date(todo.createdAt), { addSuffix: true })}</p>
            </div>
            <p className="material-symbols-outlined" id={styles.delete} onClick={deleteTodo}>delete</p>
        </div>
    );
}
 
export default Todo;