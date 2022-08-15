import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { UserContext } from '../context/UserContext';

import styles from './Navbar.module.css';

const Navbar = () => {
    const { dispatch: todosDispatch } = useContext(TodoContext);
    const { user, dispatch } = useContext(UserContext);

    const logout = () => {
        localStorage.removeItem('user');
        dispatch({ type: 'LOGOUT'});
        todosDispatch({ type: 'LOGOUT' });
    }

    return (
        <nav className={styles.navbar}>
            <h2>
                <Link to='/'>Todo</Link>
            </h2>
            <ul>
                {user && (
                    <>
                        <li>{user.email}</li>
                        <li className={styles.logout} onClick={logout}>Logout</li>
                    </>
                )}
                {!user && (
                    <>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/signup'>Signup</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
}
 
export default Navbar;