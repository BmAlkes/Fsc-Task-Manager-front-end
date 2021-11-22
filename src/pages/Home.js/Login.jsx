import "./Login.scss";
import logo from "../../assets/image/logo.png";
import CustomButton from "../../CustomButton/CustomButton";

const Login = () => {
    return (
        <div className="login-container">
            <img src={logo} alt="bmalkes" />
            <div className="button-container">
                <CustomButton>Login</CustomButton>
            </div>
        </div>
    );
};

export default Login;
