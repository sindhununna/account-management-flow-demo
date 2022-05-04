import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
export default function ListUsers({apiData, setApiData }) {
  const [searchData, setSearchData] = useState("");
 
//Read data from API
useEffect(() => {
    axios.get("https://6269a66bf2c0cdabac118a59.mockapi.io/users/user")
      .then((response) => setApiData(response.data))
      .catch((e) => console.log(e));
  }, [setApiData]);
  console.log(apiData);




  //search for the user data
  const handleSearch = (listData, searchValue) => {
    let filteredData = [];
    if (!searchValue.trim()) {
      filteredData = listData;
    } else {
      filteredData = listData.filter(
        (item) =>
          item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.id.includes(searchValue)
      );
    }
    return filteredData;
  };
  return (
    <div className="container">
      <h1>SEARCH CUSTOMER</h1>
      <br />
     
<h6>Customer Name :</h6>
      <input
        type="search"
        className="form-control mb-3"
        name="usersearch"
        placeholder="Search here..."
        onChange={(e) => setSearchData(e.target.value)}
      />
<div className="table-responsive-sm">
      <table className="table table-hover">
        <thead>
          <tr>           
            <th>Customer Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>PhoneNumber</th>
            <th>Email</th>
            <th>SalesPerson</th>
            <th>TimeZone</th>
          </tr>
        </thead>
        {handleSearch(apiData, searchData).map((user) => {
          return (
            <tbody key={user.id}>
              <tr>            
                <td> {user.id}</td>
                <td><Link key={user.id} to={`/pages/Read/${user.name}`}>
                 {user.name}
                  </Link></td>
                <td>{user.address}</td>
                <td>{user.contact}</td>
                <td>{user.email}</td>
                <td>{user.salesperson}</td>
                <td>{user.timezone}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
      </div>
     </div>
  );
}

// import React, { useState } from "react";

// import useTable from "../hooks/useTable";

// import TableFooter from "./TableFooter";
// import { Link } from "react-router-dom";

// const Read = ({ data, rowsPerPage }) => {
//     const [searchData, setSearchData] = useState("");
//   const [page, setPage] = useState(1);
//   const { slice, range } = useTable(data, page, rowsPerPage);
// console.log(slice)
//    //search for the user data
//    const handleSearch = (listData, searchValue) => {
//     let filteredData = [];
//     if (!searchValue.trim()) {
//       filteredData = listData;
//     } else {
//       filteredData = listData.filter(
//         (item) =>
//           item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
//           item.id.includes(searchValue)
//       );
//     }
//     return filteredData;
//   };
//   return (
//     <>
//       <div className="container">
//       <h1>CUSTOMER DETAILS</h1>
//       <br />
     
// <h6>Customer Name :</h6>
//       <input
//         type="search"
//         className="form-control mb-3"
//         name="usersearch"
//         placeholder="Search here..."
//         onChange={(e) => setSearchData(e.target.value)}
//       />
// <div className="table-responsive-sm">
//       <table className="table table-hover">
//         <thead>
//           <tr>           
//             <th>Customer Id</th>
//             <th>Name</th>
//             <th>Address</th>
//             <th>PhoneNumber</th>
//             <th>Email</th>
//             <th>SalesPerson</th>
//             <th>TimeZone</th>
//           </tr>
//         </thead>
//         {handleSearch(slice, searchData).map((user) => {
//           return (
//             <tbody key={user.id}>
//               <tr>            
//                 <td> {user.id}</td>
//                 <td><Link key={user.id} to={`/pages/Read/${user.name}`}>
//                  {user.name}
//                   </Link></td>
//                 <td>{user.address}</td>
//                 <td>{user.contact}</td>
//                 <td>{user.email}</td>
//                 <td>{user.salesperson}</td>
//                 <td>{user.timezone}</td>
//               </tr>
//             </tbody>
//           );
//         })}
//       </table>
//       </div>
//      </div>
//       <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
//     </>
//   );
// };
// export default Read;