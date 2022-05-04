import React,{useState} from "react";
import Read from "./pages/Read";
import {Routes, Route} from "react-router-dom";
import ViewProfile from "./pages/ViewProfile"
import CreateAccount from "./pages/CreateAccount";
import "./App.css";
import Update from "./pages/Update";
function App() {
  const [apiData, setApiData] = useState([]);
  console.log(apiData)
  return (
    <div >
   <Routes>
     <Route path="/" exact element={<Read apiData={apiData} setApiData={setApiData} />} />
     <Route path="/pages/Read/:name" element={<ViewProfile apiData={apiData}/>}/>
     <Route path="/pages/CreateAccount" element={<CreateAccount/>} />
     <Route path="/pages/Update" element={<Update/>} />
   </Routes>
   </div>
  );
}

export default App;
