import React from "react";
import "../DesignForm.css"; 
const DesignForm = () => {
  
  return (
    <div className="main-container">
      <div className="main-wrapper">
        <div className="heading">
          <h1>User Registration</h1>
        </div>
        <form className="form-wrapper"> 
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">First Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp" 
                name="first_name" 
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
              />
            </div>
            <div className="form-group">
              <select
                className="drop-down"
                name="gender" 
              >
                <option defaultValue="select your gender">
                  Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button> 
        </form>
      </div>
    </div>
  );
};

export default DesignForm;
