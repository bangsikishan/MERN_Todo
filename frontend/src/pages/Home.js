import { useContext, useEffect } from 'react';
import { TodoContext } from '../context/TodoContext';

import styles from './Home.module.css';
import TodoForm from '../components/TodoForm';
import Todo from '../components/Todo';

const Home = () => {
    const { todos, dispatch } = useContext(TodoContext);


    useEffect(() => {
        const getTodos = async () => {
            const response = await fetch('/todos');
            const todos = await response.json();

            dispatch({ type: 'GET_WORKOUT', payload: todos.todos });
        }
        
        getTodos();
    }, [dispatch]);

    
    return (
        <div className={styles.main}>
            <div className={styles.lists}>
                {todos && todos.map(todo => (
                    <Todo key={todo._id} todo={todo} />
                )) }
            </div>
            <div className={styles.form}>
                <TodoForm/>
            </div>
        </div>
    );
}
 
export default Home;