import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";

import { productRows } from "../../DummyData";

import "./productlist.css";

const ProductList = () => {
  const [data, setData] = useState(productRows);

  const handelDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Product Name",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="products">
            <img
              className="products-image"
              src={params.row.img}
              alt="user_avatar"
            />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      width: 120,
    },
    {
      field: "status",
      headerName: "Status",
      renderCell: (params) => {
        return (
          <div className="products-status ">
            <div className="products-status-icon"></div>
            {params.row.status}
          </div>
        );
      },
      width: 120,
    },
    {
      field: "price",
      headerName: "Product Price",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="products-edit">Edit</button>
            </Link>
            <DeleteOutline
              className="products-delete"
              onClick={() => handelDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="product-list">
      <h3>Product List</h3>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default ProductList;
