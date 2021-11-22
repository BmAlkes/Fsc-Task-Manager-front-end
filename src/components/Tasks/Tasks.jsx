import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useAlert } from "react-alert";

import AddTasks from "../AddTasks/AddTasks";
import TaskItem from "../TaskItem";
import "./Tasks.scss";

const Tasks = () => {
    const [task, setTask] = useState([]);

    const alert = useAlert();

    const fetchTasks = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/tasks");
            setTask(data);
        } catch (_err) {
            alert.error("can get tasks from DB");
        }
    };

    const lastTasks = useMemo(() => {
        return task.filter((task) => task.isCompleted === false);
    }, [task]);

    const completedTask = useMemo(() => {
        return task.filter((task) => task.isCompleted === true);
    }, [task]);

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
                    {lastTasks.map((lastTask) => (
                        <TaskItem
                            key={lastTask._id}
                            task={lastTask}
                            fetchTasks={fetchTasks}
                        />
                    ))}
                </div>
            </div>

            <div className="completed-tasks">
                <h3>Completed Tasks</h3>
                <div className="tasks-list">
                    {completedTask.map((completedTask) => (
                        <TaskItem
                            key={completedTask._id}
                            task={completedTask}
                            fetchTasks={fetchTasks}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tasks;
