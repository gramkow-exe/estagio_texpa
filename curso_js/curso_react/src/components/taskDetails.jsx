import React from 'react';
import ReactDOM from "react-dom";

import Button from "./button"

import { useParams } from "react-router-dom"

import "./taskDetails.css"

import {useHistory} from "react-router-dom"

const TaskDetails = () => {
    // debugger
    const { params } = useParams();
    // const history = useHistory();
    // console.log(params);

    // const handleBackButtonClick = () => {
    //     history.goBack()
    // };
 
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