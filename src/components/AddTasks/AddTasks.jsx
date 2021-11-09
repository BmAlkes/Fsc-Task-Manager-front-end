import { useState } from "react";
import CustomInput from "../CustomInput/CustomInput";

import "./AddTask.scss";

const AddTasks = () => {
    const [task, setTask] = useState("");

    const onChange = (e) => {
        setTask(e.target.value);
    };
    return (
        <div className="add-tasks-container">
            <CustomInput label="Add Task..." value={task} onChange={onChange} />
        </div>
    );
};

export default AddTasks;
