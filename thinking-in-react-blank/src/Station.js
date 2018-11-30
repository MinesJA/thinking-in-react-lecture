import React, { Component } from 'react';
import Student from './Student'

class Station extends Component {

  filteredStudents = () => {
    let students = this.props.students.filter( student => student.station === this.props.value )

    return students.map( student => <Student student={student} handleClick={this.props.handleClick}/>)
  }

  render(){
    return(
      <div className="sections">
        <h3>{this.props.name}</h3>
        <div className="station">
          {this.filteredStudents()}
        </div>
      </div>
    )
  }
}

export default Station
