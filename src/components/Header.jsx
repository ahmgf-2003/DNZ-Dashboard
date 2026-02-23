import { FiBell } from "react-icons/fi";
import userImg from "../assets/images/Profil.png";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="greeting-user">
                    <h1>Hi, Dennis Nzioki</h1>
                    <p>Let's finish your task today!</p>
                </div>
                <div className="user-details">
                    <figure>
                        <img src={userImg} alt="user profile" />
                    </figure>
                    <div className="notification-bell">
                        <FiBell />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
