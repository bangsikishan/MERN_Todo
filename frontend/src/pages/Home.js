import styles from './Home.module.css';
import TodoForm from '../components/TodoForm';
import Todo from '../components/Todo';

const Home = () => {
    return (
        <div className={styles.main}>
            <div className={styles.lists}>
                <Todo/>
            </div>
            <div className={styles.form}>
                <TodoForm/>
            </div>
        </div>
    );
}
 
export default Home;