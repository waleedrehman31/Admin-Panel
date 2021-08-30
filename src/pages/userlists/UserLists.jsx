import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";

import { rows } from "../../DummyData";
import "./UserLists.css";

export default function UserLists() {
  const [data, setData] = useState(rows);

  const handelDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userlist-user">
            <img
              className="userlist-user-image"
              src={params.row.avatar}
              alt="user_avatar"
            />
            {params.row.userName}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      type: "email",
      width: 180,
    },
    {
      field: "status",
      headerName: "Status",
      renderCell: (params) => {
        return (
          <div className="userlists-status ">
            <div className="userlists-status-icon"></div>
            {params.row.status}
          </div>
        );
      },
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userlist-edit">Edit</button>
            </Link>
            <DeleteOutline
              className="userlist-delete"
              onClick={() => handelDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="userlists">
      <h3>User Lists</h3>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
