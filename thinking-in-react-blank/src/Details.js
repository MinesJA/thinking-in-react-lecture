import React, { Component } from 'react';

const Details = (props) => {


  if(props.student){
    let { name, age, gender, motto, imageURL, style } = props.student
    return(
      <div className="details" style={style}>
        <img className="profilePic" src={imageURL} />
        <div>
          <ul>
            <li> Name: {name} </li>
            <li> Age: {age} </li>
            <li> Gender: {gender}</li>
            <li>
              <select onChange={props.handleChange}>
                <option value="admissions">Admissions</option>
                <option selected value="mod-1">Mod 1</option>
                <option value="mod-2">Mod 2</option>
                <option value="mod-3">Mod 3</option>
                <option value="mod-4">Mod 4</option>
                <option value="mod-5">Mod 5</option>
              </select>
            </li>
          </ul>
          <h4> {motto} </h4>
        </div>
      </div>
    )
  } else {

    return null
  }

  }

export default Details
