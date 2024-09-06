import logo from "../assets/images/logo.png"
import LogIn from "../../pages/LogIn/LogIn";
import SignUp from "../../pages/SignUp/SignUp"
import { useState } from 'react'
const Header = () => {
    const [isActive, setActive] = useState("false");
    const ToggleClass = () => {
        setActive(!isActive);
    };

    const [show, setShow] = useState(false);
    const popupClass = () => {
        setShow(!show);
    };
    const [showMenu, setMenu] = useState(false);
    const popupMenu = () => {
        setMenu(!showMenu);
    };


    return <>
        <header className="header-section">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="logo-img" />
                </div>
                <div className="menu-wrap">
                    <button className={isActive ? 'hamburger  ' : 'hamburger active-class '} onClick={ToggleClass}>
                        <span className="bar"></span>
                        <span className="bar middle-bar"></span>
                        <span className="bar"></span>
                    </button>


                    <nav className={isActive ? 'navigation-menu ' : 'navigation-menu active-menu '} >
                        <ul className="menu-list">
                            <li className={isActive ? 'active'  : ' '} onClick={ToggleClass} >
                                <a href="#">
                                    Home
                                </a>
                            </li>
                            <li className={isActive ? 'active'  : ' '} onClick={ToggleClass} >
                                <a href="#">
                                    Page
                                </a>
                            </li>
                            <li className={isActive ? ''  : ' '} onClick={ToggleClass}>
                                <a href="#">
                                    Feature
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="login-wrap">
                        <button className="signup" onClick={popupMenu}>
                            Sign up
                        </button>

                        <button className="signup" onClick={popupClass}>
                            Sign In
                        </button>
                    </div>
                </div>

            </div>
        </header>
        {show && <LogIn setShow={setShow} />}
        {showMenu && <SignUp setMenu={setMenu} />}


    </>
};
export default Header;
