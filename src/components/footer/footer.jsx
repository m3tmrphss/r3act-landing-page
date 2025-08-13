import '../styles/footer.scss';
//logo 
import logo from '../assets/Vector.svg';
//social icons
import twitterIcon from '../assets/Vector (3).svg';
import dribbbleIcon from '../assets/Vector (4).svg'
import instIcon from '../assets/Vector (5).svg';
export default function FooterNode () {
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="links-container">
                        <div className="icons-links">
                            <img src={logo} className="footer-logo" alt="" />
                            <div className="icons-container">
                                <a href="https://x.com/" className="icon-link x"><img src={twitterIcon} alt="" className="social-icon" /></a>
                                <a href="https://dribbble.com/" className="icon-link dribbble"><img src={dribbbleIcon} alt="" className="social-icon" /></a>
                                <a href="https://www.instagram.com/" className="icon-link inst"><img src={instIcon} alt="" className="social-icon" /></a>
                            </div>
                        </div>
                        <nav className="nav-container">
                            <ul className="nav-list">
                                <div className="column-container">
                                    <li className="nav-item">
                                        <a className="nav-link" href='# '>Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href='# '>About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href='# '>Work</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href='# '>Process</a>
                                    </li>
                                </div>
                                <div className="column-container">
                                    <li className="nav-item">
                                        <a className="nav-link" href='# '>Store</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href='# '>Blog</a>
                                    </li> 
                                    <li className="nav-item">
                                        <a className="nav-link" href='# '>Reading List</a>
                                    </li>
                                </div> 
                            </ul>
                        </nav>
                    </div>
                    <div className="bottom-text">Not Copyright 2020 • Robin Williams. Webflow cloneable</div>
                </div>
            </footer>
        </>
    )
}