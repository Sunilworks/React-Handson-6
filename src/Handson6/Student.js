import React, { useContext } from "react";
import '../App.css'
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
          <button className="btn" onClick={() => Navi('/newStudent')}>Add new Student</button>
        </div>
        <table className='students-table'>
          <tr>
            <th>NAME</th>
            <th>AGE</th>
            <th>COURSE</th>
            <th>BATCH</th>
            <th>CHANGE</th>
          </tr>
          {
            displayData.data.map((student, index) => {
              return (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.course}</td>
                  <td>{student.batch}</td>
                  <td className='edit-item'><NavLink>{student.change}</NavLink></td>
                </tr>
              )
            })
          }
        </table>
      </div>
    </>
  );
}

export default Student;
