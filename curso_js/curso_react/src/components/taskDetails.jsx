import React from 'react';

import Button from "./button"

import { useParams } from "react-router-dom"

import "./taskDetails.css"

const TaskDetails = () => {
    const { params } = useParams();
    console.log(params);
 
    return ( 
        <>
            <div className='back-button-container'>
                <button>Voltar</button>
            </div>
            <div className="task-details-container">
                {<h2>{params.taskTitle}</h2>}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nostrum ut omnis. Earum, minus modi.</p>
            </div>
        </> 
    );
}
 
export default TaskDetails;