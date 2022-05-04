import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewProfile({ apiData,setApiData }) {
  const { name } = useParams();
  console.log(name);
  const customerDetails = apiData.find((user) => user.name === name);
  console.log(customerDetails);
  const getData = () => {
    axios.get(`https://6269a66bf2c0cdabac118a59.mockapi.io/users/user`).then(
      (getData) => {
        setApiData(getData.data);
      }
    );
  };
   //post the data in localStorage using updateData function
   const updateData = (data) => {
    console.log(data);
    //get the data using object destructuring
    let { accountid1, accountname1, units1} = data;
    localStorage.setItem("accountid1", accountid1);
    localStorage.setItem("accountname1", accountname1);
    localStorage.setItem("units1", units1);
   
  };
    //Delete data from api
    const deleteFun = (id) => {
      alert("Are you sure you want to Delete Account?")&&
        axios.delete(
          `https://6269a66bf2c0cdabac118a59.mockapi.io/users/user/${id.accountid1}`
        ).then(() => {
          getData();
        });
      };

  return (
    <div className="container">
      {customerDetails ? (
        <div >
          <h1>Customer Details</h1>
            <h6>Customer Name: {name}</h6> <br/>
            <div className="table-responsive-sm">
      <table className="table table-hover">
        <thead>
          <tr>           
            <th>Account Id</th>
            <th>Account Name</th>
            <th>Number of units</th>
            <th>Action</th>
            
          </tr>
        </thead>   
        <tbody> 
            <tr key={customerDetails.accountid}>
          <td> {customerDetails.accountid1}</td>
          <td> {customerDetails.accountname1}</td>
          <td> {customerDetails.units1}</td>
          <td><button className="btn btn-outline-success" onClick={()=>updateData(customerDetails)}><Link to="/pages/update">edit</Link> </button> &nbsp;<button className="btn btn-outline-success" onClick={() => {
                    deleteFun(customerDetails);
                  }}>delete</button></td>
          
          </tr>
          <tr>
          <td> {customerDetails.accountid2}</td>
          <td> {customerDetails.accountname2}</td>
          <td> {customerDetails.units2}</td>
          <td><button className="btn btn-outline-success"><Link to="/pages/update">edit</Link> </button> &nbsp;<button className="btn btn-outline-success" onClick={() => {
                    deleteFun(customerDetails.accountid1);
                  }}>delete</button></td>
          </tr>
          </tbody>
          </table>
        </div>
        </div>
      ) : (
        <p>Customer details not found</p>
      )}
      <Link to="/pages/CreateAccount" >Create New Account</Link>
    </div>
  );
}