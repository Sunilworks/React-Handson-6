import React, { useContext } from 'react'
import Store from './Store'
import { useNavigate } from 'react-router-dom';

function AddNewStudent() {
    const StuData = useContext(Store);
    const Navi = useNavigate();
    console.log(StuData);

    const newStu = {
        Name : '',
        Age : '',
        Course : '',
        Batch : ''
    }

    const changeHandle = (e) =>{
        newStu[e.target.name] = e.target.value
    }

    function handleClick(){
        StuData.data.push(newStu);
        Navi('/student')
    }

    return (
        <div className='adstu'>
            <h1>New Student</h1>
            <label>Name: </label>
            <input type='text' name='Name' placeholder='Enter Name' onChange={changeHandle} /> <br/>
            <label>Age: </label>
            <input type='number' name='Age' placeholder='Enter Age' onChange={changeHandle} /> <br/>
            <label>Course: </label>
            <input type='text' name='Course' placeholder='Enter Course' onChange={changeHandle} /> <br/>
            <label>Batch: </label>
            <input type='text' name='Batch' placeholder='Enter Batch' onChange={changeHandle} /> <br/>
            <button onClick={handleClick} style={{marginLeft : 620}}>Add New Student</button> 
        </div>
    )
}

export default AddNewStudent