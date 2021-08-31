import { Publish } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { productData } from "../../DummyData";

import "./product.css";

const Product = () => {
  return (
    <div className="product">
      <div className="product-title-container">
        <h1 className="product-title">Edit Product</h1>
        <Link to="/newproduct">
          <button className="product-add-button">Create</button>
        </Link>
      </div>
      <div className="product-top">
        <div className="product-top-left">
          <Chart data={productData} dataKey="Sales" title="Sales Performace" />
        </div>
        <div className="product-top-right">
          <div className="product-info-top">
            <img
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="product_picture"
              className="product-info-img"
            />
            <span className="product-info-name">Apple Airpods</span>
          </div>
          <div className="product-info-bottom">
            <div className="product-info-item">
              <div className="product-info-key">id:</div>
              <div className="product-info-volume">123</div>
            </div>
            <div className="product-info-item">
              <div className="product-info-key">Sales:</div>
              <div className="product-info-volume">{1000 + 500 + 800}</div>
            </div>
            <div className="product-info-item">
              <div className="product-info-key">Active:</div>
              <div className="product-info-volume">Yes</div>
            </div>
            <div className="product-info-item">
              <div className="product-info-key">In Stock:</div>
              <div className="product-info-volume">No</div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-bottom">
        <form className="product-form">
          <div className="product-form-left">
            <label>Product Name</label>
            <input
              type="text"
              placeholder="Apple Airpod"
              className="product-form-input"
            />
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="product-form-right">
            <div className="product-upload">
              <img
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="product_image_preview"
                className="product-upload-image"
              />
              <label for="file">
                <Publish className="upload-icon" />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="product-button">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
