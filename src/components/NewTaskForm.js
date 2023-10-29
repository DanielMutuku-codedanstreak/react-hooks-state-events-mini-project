import React from "react";
import { useState } from "react";

function NewTaskForm(props) {
  const {categories, onTaskFormSubmit} = props
  const [formData, setFormData] = useState({
    text: "",
    category: categories[0]
  })
  //
  const list = props.categories.filter((category,index) => category !== "All")
  .map((category) => {
    return(
      <option key={category}>{category}</option>
    )
  })
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(formData);
    // Reset the form after submitting
    setFormData({ text: "", category: categories[0] });
  }
  //
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleChange}>
          {list}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
