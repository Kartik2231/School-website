import { Link } from "react-router-dom"
import "../Styles/Footer.css"
import logo from "../assets/logo-kindergarten.png"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="logo-content">
                    <img src={logo} alt="logo" />
                    <div className="box35300">
                        <ul>
                            <li>Box 35300</li>
                            <li>1810 Campus Way NE</li>
                            <li>Bothell, WA 98011-8246</li>
                        </ul>

                        <div className="admin">
                            <p>+1-2534-4456-345</p>
                            <Link to="#">admin@kingsteruni.edu</Link>
                            <hr />
                        </div>
                    </div>
                </div>

                <div className="our-campus">
                    <h3>Our Campus</h3>
                    <hr />
                    <ul>
                        <li><a href="#">Academic</a></li>
                        <li><a href="#">Planning & Administration</a></li>
                        <li><a href="#">Campus Safety</a></li>
                        <li><a href="#">Office of the Chancellor</a></li>
                        <li><a href="#">Facility Services</a></li>
                        <li><a href="#">Human Resources</a></li>
                    </ul>
                </div>

                <div className="Campus-life">
                    <h3>Campus Life</h3>
                    <hr />
                    <ul>
                        <li>Accessibility</li>
                        <li>Financial Aid</li>
                        <li>Food Services</li>
                        <li>Housing</li>
                        <li>Information Technologies</li>
                        <li>Student Life</li>
                    </ul>
                </div>

                <div className="Academis">
                    <h3>Academis</h3>
                    <hr />
                    <ul>
                        <li><Link to="#">Canvas</Link></li>
                        <li><Link to="#">Catalyst</Link></li>
                        <li><Link to="#">Library</Link></li>
                        <li><Link to="#">Time Schedule</Link></li>
                        <li><Link to="#">Apply For Admissions</Link></li>
                        <li><Link to="#">Pay My Tuition</Link></li>
                    </ul>
                </div>
            </div>

            <div className="copy-right-container">
                <div className="copy-right-p-content">
                    <p>Copyright All Right Reserved 2026, GoodLayers</p>
                </div>

                <div className="icons">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="blue" stroke="blue">
                        <g strokeWidth="0" />
                        <g strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C18.34 21.21 22 17.06 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
                    </svg>

                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="blue">
                        <g strokeWidth="0" />
                        <g strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M175.89681,7295.36998C179.825962,7294.55179 180.342823,7290.96907 178.817578,7289.31175Z" />
                    </svg>

                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="blue">
                        <g strokeWidth="0" />
                        <g strokeLinecap="round" strokeLinejoin="round" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" />
                    </svg>

                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="blue">
                        <g strokeWidth="0" />
                        <g strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18.72 3.99997H5.37C4.61 4.01 4 4.63 4 5.25V18.63C4.01 18.99 4.16 19.33 4.41 19.59C4.67 19.84 5.01 19.99 5.37 20H18.72C19.07 19.98 19.4 19.83 19.64 19.58C19.88 19.32 20.01 18.98 20 18.63V5.25C20 4.63 19.39 4.01 18.72 3.99997Z" />
                    </svg>
                </div>
            </div>
        </footer>
    )
}

export default Footer