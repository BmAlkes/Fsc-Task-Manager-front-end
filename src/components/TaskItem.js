const TaskItem = ({ task }) => {
    return (
        <>
            <h1>{task.description}</h1>
            <p>{task.isCompleted ? "Completed" : "not completed"}</p>
        </>
    );
};

export default TaskItem;
