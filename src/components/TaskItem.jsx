import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { useAlert } from "react-alert";

import "./TaskItem.scss";

const TaskItem = ({ task, fetchTasks }) => {
    const alert = useAlert();

    const handleTaskDeletion = async () => {
        try {
            await axios.delete(
                `${process.env.REACT_APP_API_URL}/tasks/${task._id}`
            );
            alert.success("Task deleted successfully!");
            await fetchTasks();
        } catch (_error) {
            alert.error("something wrong.");
        }
    };

    const handleChangeCompleteTask = async (e) => {
        try {
            await axios.patch(
                `${process.env.REACT_APP_API_URL}/tasks/${task._id}`,
                {
                    isCompleted: e.target.checked,
                }
            );
            await fetchTasks();
            alert.success("Task updated successfully!");
        } catch (_error) {
            alert.error("something wrong");
        }
    };

    return (
        <div className="task-item-container">
            <div className="task-description">
                <label
                    className={
                        task.isCompleted
                            ? "checkbox-container-completed"
                            : "checkbox-container"
                    }
                >
                    {task.description}
                    <input
                        type="checkbox"
                        defaultChecked={task.isCompleted}
                        onChange={(e) => {
                            handleChangeCompleteTask(e);
                        }}
                    />
                    <span
                        className={
                            task.isCompleted
                                ? "checkmark completed"
                                : "checkmark"
                        }
                    ></span>
                </label>
            </div>

            <div className="delete">
                <AiFillDelete
                    size={18}
                    color="#F97474"
                    onClick={handleTaskDeletion}
                />
            </div>
        </div>
    );
};

export default TaskItem;
