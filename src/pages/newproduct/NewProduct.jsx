import React from "react";
import "./newproduct.css";

const NewProduct = () => {
  return (
    <div className="new-product">
      <h1 className="new-product-title">New product</h1>
      <form className="new-product-form">
        <div className="new-product-form-item">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="new-product-form-item">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="new-product-form-item">
          <label>Stock</label>
          <input type="number" placeholder="123" />
        </div>
        <div className="new-product-form-item">
          <label>Active</label>
          <select name="active" id="active" className="new-product-select">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="new-product-button">Create</button>
      </form>
    </div>
  );
};

export default NewProduct;
