import CustomButton from "../../CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/image/logo.png";
import "./Sidebar.scss";

const SideBar = () => {
    const navigation = useNavigate();

    const handleLogout = () => {
        navigation("/login");
    };
    return (
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="bmalkes" />
            </div>
            <div className="sign-out">
                <CustomButton onClick={handleLogout}>Logout</CustomButton>
            </div>
        </div>
    );
};

export default SideBar;
