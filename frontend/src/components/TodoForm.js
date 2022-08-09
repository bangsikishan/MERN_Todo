import { useState } from 'react';

import styles from './TodoForm.module.css';

const TodoForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const submitForm = e => {
        e.preventDefault();

        const errorDiv = document.querySelector('#error');

        if(!name.trim()) {
            errorDiv.innerHTML = 'Name cannot be empty!';
        }
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