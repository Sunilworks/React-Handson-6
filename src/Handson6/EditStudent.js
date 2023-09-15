import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Store from './Store';

function EditStudent() {
    const Navi = useNavigate();
    const indexData = useLocation().state.index;
    const contextData = useContext(Store);
    // console.log(indexData);
    
    //creating Obj
    const updateData = {
    Name: contextData.data[indexData].Name,
    Age: contextData.data[indexData].Age,
    Course: contextData.data[indexData].Course,
    Batch: contextData.data[indexData].Batch
    }

    function handleChange(e){
      updateData[e.target.name] = e.target.value;
    }

    function handleUpdate(){
      console.log('Handle Update');
      console.log(contextData.data[indexData]);
      contextData.data[indexData] = updateData;
      // console.log(contextData.data[indexData]);
      console.log(updateData);
      Navi('/student')
    }
  return (
    <div className='edstu'>
    <h1>EditStudent</h1>
    <label>Name: </label>
    <input type='text' name='Name' placeholder={contextData.data[indexData].Name} onChange={handleChange}/> <br/>
    <label>Age: </label>
    <input type='number' name='Age' placeholder={contextData.data[indexData].Age} onChange={handleChange}/> <br/>
    <label>Course: </label>
    <input type='text' name='Course' placeholder={contextData.data[indexData].Course} onChange={handleChange}/> <br/>
    <label>Batch: </label>
    <input type='text' name='Batch' placeholder={contextData.data[indexData].Batch} onChange={handleChange}/> <br/>
    <button onClick={handleUpdate} style={{marginLeft : 620}}>Update Student</button>
    <button onClick={() => Navi('/student')} style={{marginLeft:650}}>Go Back</button>
    </div>
  )
}

export default EditStudent