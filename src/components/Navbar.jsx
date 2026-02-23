import { NavLink } from "react-router";
import { TbCategory2, TbMessage2, TbUserHexagon, TbQuestionMark } from "react-icons/tb";
import { PiBookOpenTextBold , PiGearSixBold } from "react-icons/pi";
import logo from "../assets/images/book-square.svg";

const Navbar = () => {
    return (
        <nav>
            <figure className="logo">
                <img src={logo} alt="DNX logo" />
                <figcaption>DNX</figcaption>
            </figure>
            <ul>
                <li>
                    <NavLink to="/" className={({isActive}) => isActive ? "active": null}>
                        <TbCategory2 />
                        Overview
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/task" className={({isActive}) => isActive ? "active": null}>
                        <PiBookOpenTextBold  />
                        Task
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/mentors" className={({isActive}) => isActive ? "active": null}>
                        <TbUserHexagon />
                        Mentors
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/message" className={({isActive}) => isActive ? "active": null}>
                        <TbMessage2 />
                        Message
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/settings" className={({isActive}) => isActive ? "active": null}>
                        <PiGearSixBold />
                        Settings
                    </NavLink>
                </li>
            </ul>
            <div className="help">
                <div className="help-icon">
                    <TbQuestionMark />
                </div>
                <div className="help-container">
                    <h3 className="title">Help Center</h3>
                    <p className="info">
                        Having Trouble in Learning. Please contact us for more
                        questions.
                    </p>
                    <button>
                        Go To Help Center
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
