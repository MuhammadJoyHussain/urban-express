import { Link } from 'react-router-dom';
import './Header.css'



const Header = () => {

    return (
        <div>
            <nav className="nav">
                <ul>
                    <li>
                        <h1 className="logo">Urban Express</h1>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/destination">Destination</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <button><Link to="/login">Login</Link></button>
                    </li>
                </ul>
            </nav>
            
        </div>
    );
};

export default Header;