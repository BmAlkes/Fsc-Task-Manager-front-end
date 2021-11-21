import Tasks from "./components/Tasks/Tasks";
import SideBar from "./components/sidebar/Sidebar";
import "./App.scss";

const App = () => {
    return (
        <div className="app-container">
            <SideBar />
            <Tasks />
        </div>
    );
};

export default App;
