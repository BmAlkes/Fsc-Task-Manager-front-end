import CustomButton from "../../CustomButton/CustomButton";

import logo from "../../assets/image/logo.png";
import "./Sidebar.scss";

const SideBar = () => {
    return (
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="bmalkes" />
            </div>
            <div className="sign-out">
                <CustomButton>Logout</CustomButton>
            </div>
        </div>
    );
};

export default SideBar;
