import React from "react";

function CategoryFilter(props) {
  const {categories, onSelectCategory} = props
  //
  const btnCategory = props.categories.map((category, index) => {
    return(
      <button className={category === 'All' ? 'selected' : ''} key={category} onClick={() => handleCategoryButton(category)}>{category}</button>
    )
  });
  //
  const handleCategoryButton = (category)=>{
    onSelectCategory(category);
  }
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {btnCategory}
    </div>
  );
}

export default CategoryFilter;
