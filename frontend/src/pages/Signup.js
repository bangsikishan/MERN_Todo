import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

import styles from './Signup.module.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { dispatch } = useContext(UserContext);

    const handleSubmit = async e => {
        e.preventDefault();

        const emailErrorDiv = document.querySelector('#email');
        const passwordErrorDiv = document.querySelector('#password');

        emailErrorDiv.innerHTML = '';
        passwordErrorDiv.innerHTML = '';

        try {
            const response = await fetch('/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if(!data.error) {
                dispatch({ type: 'CREATE_USER', payload: data });

                localStorage.setItem('user', JSON.stringify(data));

                setEmail('');
                setPassword('');
                return;
            }

            
            // HANDLE ERROR
            if(data.error.toLowerCase().includes('email')) {
                emailErrorDiv.innerHTML = data.error;
            }
            if(data.error.toLowerCase().includes('password')) {
                passwordErrorDiv.innerHTML = data.error;
            }
        }
        catch(err) {
            console.log(err.message);
        }
    }


    return (
        <div className={styles.register} onSubmit={handleSubmit}>
            <form>
                <h2>Signup</h2>
                <label>
                    <span>Email:</span>
                    <input type="email" onChange={e => setEmail(e.target.value)} value={email} required />
                    <div className={styles.error} id='email'></div>
                </label>
                <label>
                    <span>Password:</span>
                    <input type="password" onChange={e => setPassword(e.target.value)} value={password} required />
                    <div className={styles.error} id='password'></div>
                </label>
                <button>Register</button>
            </form>
        </div>
    );
}
 
export default Signup;