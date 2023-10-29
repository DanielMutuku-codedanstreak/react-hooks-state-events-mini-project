import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks,setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState('All')
  //
  const handleDeleteTask = (taskText)=>{
    //console.log("Deleting task:", taskText);
    setTasks((prevTasks) => prevTasks.filter((task) => task.text !== taskText));
  }
  //
  const handleSelectCategory = (category)=>{
    //console.log(category)
    setSelectedCategory(category)
  }
  //
  const handleTaskFormSubmit = (formData) => {
    const newTask = {
      text: formData.text,
      category: formData.category,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onSelectCategory={handleSelectCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit}/>
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
