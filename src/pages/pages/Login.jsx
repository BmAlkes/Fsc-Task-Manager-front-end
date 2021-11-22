import "./Login.scss";
import logo from "../../assets/image/logo.png";
import CustomButton from "../../CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigation = useNavigate();
    const handleSignIn = () => {
        navigation("/");
    };

    return (
        <div className="login-container">
            <img src={logo} alt="bmalkes" />
            <div className="button-container">
                <CustomButton onClick={handleSignIn}>Login</CustomButton>
            </div>
        </div>
    );
};

export default Login;
