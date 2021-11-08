import { useState, useEffect } from "react";
import axios from "axios";

import TaskItem from "./components/TaskItem";
import "./App.css";

const App = () => {
    const [task, setTask] = useState([
        { id: "1", description: "estudar Programacao", isCompleted: true },
        { id: "2", description: "ler", isCompleted: false },
    ]);

    const fetchTasks = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/tasks");
            setTask(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div>
            {task.map((task, index) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    );
};

export default App;
