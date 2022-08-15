import { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
import { UserContext } from '../context/UserContext';

import styles from './TodoForm.module.css';

const TodoForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const { dispatch } = useContext(TodoContext);
    const { user } = useContext(UserContext);

    const submitForm = async e => {
        e.preventDefault();

        const errorDiv = document.querySelector('#error');

        if(!name.trim()) {
            errorDiv.innerHTML = 'Name cannot be empty!';
            return;
        }


        const response = await fetch('/todo', {
            method: 'POST',
            body: JSON.stringify({ name, description }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        });
        const data = await response.json();
        
        dispatch({ type: 'ADD_TODO' , payload: data.todo });

        setName('');
        setDescription('');
        errorDiv.innerHTML = '';
    }

    return (
        <form className={styles.form} onSubmit={submitForm}>
            <h2>Add Todo</h2>
            <label>
                <span>Name</span>
                <input type='text' onChange={e => setName(e.target.value)} value={name} required />
            </label>
            <label>
                <span>Description</span>
                <input type='text' onChange={e => setDescription(e.target.value)} value={description} />
            </label>
            <button>Add Todo</button>
            <div className={styles.error} id='error'></div>
        </form>
    );
}
 
export default TodoForm;