import React, { useState } from "react";
import tableData from "./TableData";
import DataTable from "react-data-table-component";
import { FaSistrix } from "react-icons/fa";
import "../main.css";
import AddDataModal from "./AddDataModal";

const Table = () => {
  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
      id: 1,
    },
    {
      name: "First Name",
      selector: (row) => row.first_name,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.last_name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
    },
    {
      cell: (row) => (
        <button
          className="table-btn"
          data-toggle="modal"
          data-target="#dataModal"
          onClick={() => editUser(row.id)}
        >
          Edit
        </button>
      ),
    },
    {
      cell: (row) => (
        <button className="table-btn" onClick={() => deleteUser(row.id)}>
          Delete
        </button>
      ),
    },
  ];

  // To add Data to the table
  const [allUserData, setAllUserData] = useState(tableData);
  const [currentUserData, setCurrentUserData] = useState({
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
  });
  const [records, setRecords] = useState(allUserData);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex,setEditIndex]=useState(0);
  const handleFilter = (event) => {
    let filteredRecords = allUserData.filter((row) => {
      return row.first_name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setRecords(filteredRecords);
  };
  //   console.log(allUserData,currentUserData)

  //to delete a user data
  const deleteUser = (id) => {
    console.log(allUserData);
    setAllUserData((prevData) => {
      return prevData.filter((userlist) => {
        return userlist.id !== id;
      });
    });
  };
  const editUser = (id) => {
    console.log("inside editUser function")
    setIsEdit(true);
    allUserData.forEach((user,index) => {
      if(user.id === id){
        console.log(user)
        setCurrentUserData(user);
        setEditIndex(index);
        return;
      }
    });  
  };
  return (
    <>
      <div className="main-container">
        <div className="form-container">
          <AddDataModal
            allUserData={allUserData}
            setAllUserData={setAllUserData}
            currentUserData={currentUserData}
            setCurrentUserData={setCurrentUserData}
            setRecords={setRecords}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            editIndex={editIndex}
          />

          <DataTable
            columns={columns}
            data={allUserData}
            fixedHeader
            pagination
            // fixedHeaderScrollHeight="333px"
            subHeader
            subHeaderComponent={
              <>
                <button
                  className="add-btn"
                  data-toggle="modal"
                  data-target="#dataModal"
                >
                  Add User
                </button>
                <div className="search-bar">
                  <input
                    type="search"
                    onChange={handleFilter}
                    placeholder="filter by name"
                  />
                  <FaSistrix />
                </div>
              </>
            }
          />
        </div>
      </div>
    </>
  );
};

export default Table;
