import React, { useState, useEffect, useRef } from "react";
import { Button,Form} from "semantic-ui-react";
import axios from "axios";
import "./CreateAccount.css";
function Update(apiData,setApiData) {
    const [accountid1, setAccountId1] = useState("");
    const [accountname1, setAccountName1] = useState("");
    const [units1, setUnits1] = useState("");
    
    useEffect(() => {
        setAccountId1(localStorage.getItem("accountid1"));
        setAccountName1(localStorage.getItem("accountname1"));
        setUnits1(localStorage.getItem("units1"));
     
      }, []);

    const idRef = useRef(null);
  useEffect(() => {
    idRef.current.focus();
  }, []);
 
  const updateAPIData = () => {
    axios
      .put(`https://6269a66bf2c0cdabac118a59.mockapi.io/users/user/${accountid1}`, {
        accountid1,
        accountname1,       
        units1,
      })
      .then(() => {
        window.location.reload();
      });
      setAccountId1("");
      setAccountName1("");
      setUnits1("");
  };
 


  return (
    <div className="main" >
    <h1>Update Account Details</h1><br/>
    <div>
    <Form className="form">
      <Form.Field>
        <label>Account ID</label><br/>
        <input          
          ref={idRef} 
          value={accountid1}       
          onChange={(e) => {
            setAccountId1(e.target.value);
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>Account Name</label><br/>
        <input   
        value={accountname1}              
          onChange={(e) => {
            setAccountName1(e.target.value);
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>Number of Units1</label><br/>
        <input  
        value={units1}        
          onChange={(e) => {
            setUnits1(e.target.value);
          }}
        />
      </Form.Field><br/>
      
      <Button type="submit" className="btn btn-outline-primary" onClick={updateAPIData}>
     Update Account
      </Button>
    </Form>
    </div></div>
  );
};

export default Update