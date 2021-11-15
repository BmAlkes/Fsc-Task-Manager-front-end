import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useAlert } from "react-alert";
import axios from "axios";

import CustomButton from "../../CustomButton/CustomButton";
import CustomInput from "../CustomInput/CustomInput";

import "./AddTask.scss";

const AddTasks = ({ fetchTasks }) => {
    const [task, setTask] = useState("");

    const alert = useAlert();

    const onChange = (e) => {
        setTask(e.target.value);
    };

    const handleTaskAddition = async () => {
        try {
            if (task.length === 0) {
                return alert.error("Task need a description to be add");
            }
            await axios.post("http://localhost:8000/tasks", {
                description: task,
                isCompleted: false,
            });
            await fetchTasks();
            setTask(" ");
        } catch (e) {
            alert.error("something is wrong");
        }
    };
    return (
        <div className="add-task-container">
            <CustomInput label="Add Task..." value={task} onChange={onChange} />
            <CustomButton onClick={handleTaskAddition} c>
                <FaPlus size={14} color="#FFFFFF" />
            </CustomButton>
        </div>
    );
};

export default AddTasks;
