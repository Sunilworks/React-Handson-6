import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function EditStudent() {
    const Navi = useNavigate();
    const indexData = useLocation().state.index;
    // console.log(indexData.state.index);
  return (
    <>
    <p>EditStudent</p>
    <button onClick={() => Navi('/student')}>Go Back</button>
    </>
  )
}

export default EditStudent