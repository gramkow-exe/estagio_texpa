import React from 'react';
import "./task.css";
import {CgClose, CgInfo} from "react-icons/cg";
import {useHistory} from "react-router-dom"

const Task = ({task, handleTaskClick, handTaskDeletion}) => {
    // const history = useHistory();

    // const handleTaskDetailsClick = (task) => {
    //     history.push(`/${task.title}`)
    // };
    
    return (
        <div className='task-container' style={task.completed ? {borderLeft: "6px solid magenta"}: {}}>
            <div className='task-title' onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            <div className='button-container'>
                <button className='remove-task-button' onClick={() => handTaskDeletion(task.id)}><CgClose /></button>
                <button className='see-task-details-button' ><CgInfo /></button>
            </div>
        </div>
    )
    //return <div className="task-container">{task.title}</div> ;
}
 
export default Task;