import React, { Component } from 'react';

const Student = (props) => {

  let { imageURL, name } = props.student



  return (
    <div className="student" onClick={()=>{props.handleClick(name)}} >
      <img src={imageURL} className="thumbPic" />
      {name}
    </div>
  )
}




export default Student
