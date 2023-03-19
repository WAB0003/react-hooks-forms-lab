import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [itemSearch, setItemSearch] = useState("")
  //*State variables to get new items from form
  const[newItemCategory, setNewItemCategory]=useState("Produce")
  const[newItemName, setNewItemName]=useState("")

  const[allItems, setAllItems]=useState(items)
  


  //*function that gets new name of food
  function handleFormNameChange(e) {
    setNewItemName(e.target.value)
    console.log(newItemName)
  }
  
    
  //*Create a function that grabs category for new item
  function handleFormCatChange(e){
    setNewItemCategory(e.target.value)
    console.log(newItemCategory)
  }
  
  //*function for handling form submit
  function handleFormSubmit (e) {
    e.preventDefault()
    
    const newItem = {
      id: allItems.length +1, // Math.floor(Math.random()*100), // the `uuid` library can be used to generate a unique id,
      name: newItemName,
      category: newItemCategory,
    }
    const newItemsArray = [...allItems,newItem]
    setAllItems(()=>newItemsArray)
  }

  //! Funtion for handle the seach of a single item
  function onSearchChange(e){
    setItemSearch(e.target.value)
    console.log(itemSearch)
  }

//! Function for handlling the Category 
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

//!Original function that filters items by category.
  const itemsToDisplayByCategory = allItems.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });
//! New function that filters items by Name
  const itemsToDisplay = itemsToDisplayByCategory.filter((item) => {
    if (itemSearch === "") {
      return true
    }else{
      return item.name.toLowerCase().includes(itemSearch.toLowerCase())
    }
  })

  return (
    <div className="ShoppingList">
      <ItemForm newItemName={newItemName} handleFormNameChange={handleFormNameChange} handleFormCatChange={handleFormCatChange} handleFormSubmit={handleFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} itemSearch={itemSearch}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
