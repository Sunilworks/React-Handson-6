import React, { useState } from "react";
import Home from "./Home";
import Student from "./Student";
import Contact from "./Contact";
import { BrowserRouter,Route, Routes ,NavLink} from "react-router-dom";
import Store from "./Store";
import EditStudent from "./EditStudent";
import AddNewStudent from "./AddNewStudent";

function RouteCompo() {
  const [studentData, setStudentData] = useState([
    {
      Name:"John",
      Age:23,
      Course:"MERN",
      Batch:"EA21",
      Change: "Edit"
    },
    {
      Name:"Sumit",
      Age:20,
      Course:"MEAN",
      Batch:"EA23",
      Change: "Edit"
    },
    {
      Name:"Kohli",
      Age:29,
      Course:"FNTEND",
      Batch:"EA230",
      Change: "Edit"
    },
    {
      Name:"Ashish",
      Age:21,
      Course:"BKEND",
      Batch:"EA3",
      Change: "Edit"
    },
    {
      Name:"Rohit",
      Age:35,
      Course:"JAVA",
      Batch:"EA13",
      Change: "Edit"
    },
  ]);
  // console.log(studentData);
  return (
    <>
      <BrowserRouter>
      <nav className="main-nav">
      <div className="Nav">
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/student">STUDENT</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
        </ul>
      </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={ 
        <Store.Provider value={{data : studentData,dataFunc : setStudentData}}>
          <Student />
        </Store.Provider> }/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/editStudent" element={<Store.Provider value={{data : studentData,dataFunc : setStudentData}}>
          <EditStudent />
        </Store.Provider> }/>
        <Route path="/addStudent" element={<Store.Provider value={{data : studentData,dataFunc : setStudentData}}>
          <AddNewStudent />
        </Store.Provider> }/>
        
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouteCompo;
