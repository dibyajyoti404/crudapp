import React from "react";
import "../DesignForm.css";
const AddDataModal = ({
  allUserData,
  setAllUserData,
  currentUserData,
  setCurrentUserData,
  setRecords,
  isEdit,
  setIsEdit,
  editIndex
}) => {
  let handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCurrentUserData({ ...currentUserData, [name]: value });
  };
  let addAndUpdateUser = (event) => {
    console.log("hello and edit value is ",isEdit)
    console.log(allUserData)
    event.preventDefault();
    if(isEdit===false){

    setAllUserData([
      ...allUserData,
      { ...currentUserData, id: allUserData.length + 1 },
    ]); 
    setCurrentUserData({
      id: 0,
      first_name: "",
      last_name: "",
      email: "",
      gender: "",
    });
    }
    if(isEdit===true){
        console.log("inside another edit and edit index is ",editIndex,currentUserData)  
             allUserData.splice(editIndex,1,currentUserData) 
         setAllUserData(allUserData)
       
        setCurrentUserData({
            id: 0,
            first_name: "",
            last_name: "",
            email: "",
            gender: "",
          });

    setIsEdit(false);
    }
  }; 
  return (
    <div
      className="modal fade"
      id="dataModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header heading">
            <h1>User Registration</h1>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form className="form-wrapper"  >
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="first_name"
                  onChange={handleChange}
                  value={currentUserData.first_name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="last_name"
                  onChange={handleChange}
                  value={currentUserData.last_name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  onChange={handleChange}
                  value={currentUserData.email}
                />
              </div>
              <div className="form-group">
                <select
                  className="drop-down"
                  name="gender"
                  onChange={handleChange}
                  value={currentUserData.gender}
                >
                  <option defaultValue="select your gender">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <button type="submit" className="modal-btn" data-dismiss="modal" onClick={addAndUpdateUser}>
                {isEdit?"Save Changes":"Add User"} 
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDataModal;
