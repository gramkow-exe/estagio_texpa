import React, { useEffect, useState } from 'react'
import "./App.css"
import AddTask from './components/addTask'
import Tasks from "./components/tasks"
import {v4 as uuidv4} from "uuid"
import Header from "./components/header"
import {BrowserRouter as Router, Route} from "react-router-dom"
import TaskDetails from './components/taskDetails'


const App = () => {
  const [tasks, setTasks] = useState([
    {
      id : "1",
      title: "Estudadar Programação",
      completed: false,
    },
    {
      id : "2",
      title: "Ler livros",
      completed: true,
    },
  ])
  useEffect(() => {
    
  })

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id ===taskId) return {... task, completed: !task.completed}

      return task;
    })

    setTasks(newTasks);
  }


  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ... tasks, 
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTasks);
  }

  const handTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }

    return (
      <Router>
        <div className = "container">
        <Header />

        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAddition = {handleTaskAddition}/>

              <Tasks tasks={tasks} handleTaskClick = {handleTaskClick} handTaskDeletion={handTaskDeletion}/>
            </>
          )}
        
        />

        <Route path="/:taskTitle" exact component={TaskDetails}/>
        </div>

      </Router>
    )
      
 
}
export default App;