import "./CustomButton.scss";

const CustomButton = ({ children }) => {
    return (
        <div className="custom-button-container" onClick={onClick}>
            {children}
        </div>
    );
};

export default CustomButton;
