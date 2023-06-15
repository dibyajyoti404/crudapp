import React from "react";  
const AddData = ({allUserData,setAllUserData,currentUserData,setCurrentUserData,setRecords,isEdit}) => {

 
    let handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value; 
        setCurrentUserData({...currentUserData,[name]:value});
    }
    let addUser=(event)=>{
        event.preventDefault();
        // if(isEdit===false){

            setAllUserData([...allUserData,{...currentUserData,id:allUserData.length+1}]) 
            console.log(allUserData)
            setCurrentUserData({id:0,first_name:"",last_name:"",email:"",gender:""} )
        // }
            
    }
  return (
    <form onSubmit={addUser}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">First Name</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter First name"
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
          placeholder="Enter Last Name"
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
          // placeholder="Enter email"
          onChange={handleChange}
          value={currentUserData.email}
        />
      </div>
      <div className="form-group">
        <select className="custom-select" name="gender" onChange={handleChange} value={currentUserData.gender}> 
          <option  defaultValue="select your gender">Select your gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option> 
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default AddData;
