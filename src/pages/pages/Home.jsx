import SideBar from "../../components/sidebar/Sidebar";
import Tasks from "../../components/Tasks/Tasks";

import "./Home.scss";

const Home = () => {
    return (
        <div className="home-container">
            <SideBar />
            <Tasks />
        </div>
    );
};

export default Home;
