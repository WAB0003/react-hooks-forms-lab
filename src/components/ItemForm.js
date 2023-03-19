import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({newItemName, handleFormNameChange, handleFormCatChange, handleFormSubmit}) {

  return (
    <form className="NewItem" onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={newItemName} onChange={handleFormNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleFormCatChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
