import React, { useState,useRef } from "react";
import tableData from "./TableData";
import DataTable from "react-data-table-component";
import AddData from "./AddData";

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
      cell: (row) => <button onClick={() => editUser(row.id)}>Edit</button>,
    },
    { 
      cell: (row) => <button onClick={() => deleteUser(row.id)}>Delete</button>,
    },
  ];

  // To add Data to the table
  const [allUserData,setAllUserData]=useState(tableData)
  const [currentUserData,setCurrentUserData]=useState({id:0,first_name:"",last_name:"",email:"",gender:""})
  const [records, setRecords] = useState(allUserData);
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
  const deleteUser=(id)=>{
        console.log(allUserData)
        setAllUserData((prevData)=>{
         return prevData.filter((userlist)=>{
                    return userlist.id!==id;
            }) 
        })
  }
  const editUser=(id)=>{
    let editUserData=allUserData.find((userlist)=>{
        return userlist.id===id;
    })
    console.log(editUserData)
    setCurrentUserData(editUserData)
  }
  return (
    <>
      <AddData allUserData={allUserData}
      setAllUserData={setAllUserData}
      currentUserData={currentUserData}
      setCurrentUserData={setCurrentUserData}
      setRecords={setRecords}
       />
      <input
        type="search"
        onChange={handleFilter}
        placeholder="filter by name"
      />
      <DataTable
        columns={columns}
        data={allUserData}
        fixedHeader
        pagination
        // fixedHeaderScrollHeight="333px"
      />
    </>
  );
};

export default Table;
