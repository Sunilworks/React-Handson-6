import React, { useContext } from "react";
import "../App.css";
import { useNavigate, NavLink } from "react-router-dom";
import Store from "./Store";

function Student() {
  const Navi = useNavigate();
  const displayData = useContext(Store);
  console.log(displayData);

  return (
    <>
      {/* <h1>This is Student Data</h1> */}
      <div className="main">
        <div className="container">
          <h2>STUDENT DETAILS</h2>
          <button className="btn" onClick={() => Navi("/addStudent")}>
            Add new Student
          </button>
        </div>
        <table className="students-table">
          <thead>
            <tr>
              <th>NAME</th>
              <th>AGE</th>
              <th>COURSE</th>
              <th>BATCH</th>
              <th>CHANGE</th>
            </tr>
          </thead>
          {displayData.data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.Name}</td>
                <td>{item.Age}</td>
                <td>{item.Course}</td>
                <td>{item.Batch}</td>
                <td className="edit-item">
                  <NavLink to="/editStudent" state={{index}}>Edit</NavLink>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Student;
