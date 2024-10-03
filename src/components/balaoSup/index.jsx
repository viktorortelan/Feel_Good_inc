import './index.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CorretorPopup from '../botaoPopup';

export default function Balao() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    }

    return (
        <div className="balao">
            <button onClick={toggleMenu} className="menu-button">
                <img src="/assets/images/loganfeelgood.png" alt="balão de suporte" id="suporte" />
            </button>

            {menuVisible && (
                <div className="menu">
                    <button onClick={toggleMenu} className="close-button">X</button>
                    <ul>
                        <li><Link to="/">Nossos Termos</Link></li>
                        <li id='corretor'><CorretorPopup/></li>
                        <li><Link to="/sobree">Conheça Nós</Link></li>
                    </ul>
                </div>
            )}
        </div>
    );
}
