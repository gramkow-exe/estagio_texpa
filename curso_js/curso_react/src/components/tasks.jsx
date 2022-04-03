import React from "react"

import Task from "./task"

const Tasks = ({ tasks, handleTaskClick, handTaskDeletion })  => {
    
    return <>
        {tasks.map((task) => (
            <Task task={task} handleTaskClick={handleTaskClick} handTaskDeletion={handTaskDeletion}/>
        ))}
    </>
};
export default Tasks;