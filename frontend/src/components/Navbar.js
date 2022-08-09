import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <h2>
                <Link to='/'>Todo</Link>
            </h2>
            <ul>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/signup'>Signup</Link></li>
            </ul>
        </nav>
    );
}
 
export default Navbar;