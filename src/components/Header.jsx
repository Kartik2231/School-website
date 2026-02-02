import { Link } from "react-router-dom";
import "../Styles/Header.css";
import { useRef } from "react";

function Header() {
    const navRef = useRef(null);

    const handleToggle = () => {
        navRef.current.classList.toggle("active");
    };

    return (
        <>
            <header className="header" id="header">
                <div className="container">
                    <div className="logo">
                        <div className="logo-icon">S</div>
                        <div className="logo-text">
                            <h1>Green Valley School</h1>
                            <span>Knowledge • Discipline • Growth</span>
                        </div>
                    </div>

                    <div
                        className="menu-toggle"
                        id="menuToggle"
                        onClick={handleToggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <nav className="nav" id="nav" ref={navRef}>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={'academic'}>Academic</Link></li>
                            <li><Link to="page">Pages</Link></li>
                            <li><Link to="admission">Admissions</Link></li>
                            <li><Link to="courses">Courses</Link></li>
                            <li><Link to="athletic">Athletic</Link></li>
                            <li><Link to="schoollife">School Life</Link></li>
                        </ul>   
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;
