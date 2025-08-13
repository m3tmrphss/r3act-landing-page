import logo from '../assets/Vector.svg'
import '../styles/header.scss';
import adaptiveBtn from '../assets/Group 64.svg';
import { useEffect, useState } from 'react';
export default function HeaderNode () {
    const [scrolled, setScrolled] = useState(false); 
    let [isActive, setIsActive] = useState(false)
    useEffect(() => {
        let body = document.querySelector('body');
        if (isActive) {
            body.classList.add('no-scroll')
        } else {
            body.classList.remove('no-scroll')
        }
    }, [isActive])

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20); 
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <header className={scrolled ? "scrolled" : ""}>
            <div className="header-container">
                <img src={logo} alt="" className="site-logo" />
                <nav className={`nav-container ${isActive ? 'active' : ''}`}>
                    <ul className="nav-items">
                        <li className="nav-item">
                            <a href="# " className='nav-link'>Experience</a>
                        </li>
                        <li className="nav-item"> 
                            <a href="# " className='nav-link'>Work </a>
                        </li>
                        <li className="nav-item"> 
                            <a href="# " className='nav-link'>Photography</a>
                        </li>
                        <li className="nav-item">
                            <a href="# " className='nav-link'>Contact</a> 
                        </li>
                    </ul>
                </nav>
                <div className="adaptive-btn" onClick={() => setIsActive(!isActive)}>
                    <img src={adaptiveBtn} alt="" className="btn-image" />
                </div>
            </div>

        </header>
    )
}