import React from "react";
import Task from "./Task"

function TaskList(props) {
  const filteredTasks = props.selectedCategory === 'All' ?
  props.tasks :
  props.tasks.filter(task => task.category === props.selectedCategory)
  return (
    <div className="tasks">
      {
        filteredTasks.map((task,index) => {
          return(
            <Task key={task.text} text={task.text} category={task.category} onDelete={props.onDeleteTask}></Task>
          )
        })
      }
    </div>
  );
}

export default TaskList;
