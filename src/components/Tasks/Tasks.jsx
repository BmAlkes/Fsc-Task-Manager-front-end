import { useState, useEffect } from "react";
import axios from "axios";

import AddTasks from "../AddTasks/AddTasks";
import TaskItem from "../TaskItem";
import "./Tasks.scss";

const Tasks = () => {
    const [task, setTask] = useState([]);

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
        <div className="tasks-container">
            <h2>My Tasks</h2>

            <div className="last-tasks">
                <h3>Last Tasks</h3>
                <AddTasks fetchTasks={fetchTasks} />
                <div className="tasks-list">
                    {task
                        .filter((task) => task.isCompleted === false)
                        .map((lastTask) => (
                            <TaskItem task={lastTask} />
                        ))}
                </div>
            </div>

            <div className="completed-tasks">
                <h3>Completed Tasks</h3>
                <div className="tasks-list">
                    {task
                        .filter((task) => task.isCompleted)
                        .map((completedTask) => (
                            <p>{completedTask}</p>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Tasks;
