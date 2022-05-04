import React, { useState, useEffect, useRef } from "react";
import { Button,Form} from "semantic-ui-react";
import axios from "axios";
import "./CreateAccount.css";
function CreateAccount(apiData,setApiData) {
    const [accountid, setAccountId] = useState("");
    const [accountname, setAccountName] = useState("");
    const [units, setUnits] = useState("");
    

    const idRef = useRef(null);
  useEffect(() => {
    idRef.current.focus();
  }, []);
 
  const postData = (event) => {
    event.preventDefault();
    axios
      .post("https://6269a66bf2c0cdabac118a59.mockapi.io/users/user", {
        accountid,
        accountname,
        units,           
      })
      .then((res) => {
        setApiData([...apiData, res.data]);
        console.log(res.data)
      });
      setAccountId("");
      setAccountName(" ");
      setUnits(" ");
   
  };

  return (
    <div className="main" >
    <h1>Create New Account</h1><br/>
    <div>
    <Form className="form">
      <Form.Field>
        <label>Account ID</label><br/>
        <input          
          ref={idRef}        
          onChange={(e) => {
            setAccountId(e.target.value);
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>Account Name</label><br/>
        <input                 
          onChange={(e) => {
            setAccountName(e.target.value);
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>Number of Units</label><br/>
        <input          
          onChange={(e) => {
            setUnits(e.target.value);
          }}
        />
      </Form.Field><br/>
      
      <Button type="submit" className="btn btn-outline-primary" onClick={postData}>
     Save Account
      </Button>
    </Form>
    </div></div>
  );
};

export default CreateAccount