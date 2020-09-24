import React, { Component } from 'react';

import api from '../api';

class TeacherStudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.location.state.user.fullName,
      course: props.location.state.course_id,
      studentData: [],
      isLoading: false,
    };
    console.log(props);
    this.getUserData();
  }

  getUserData() {
    //need to figure out how to get the id of the course
    const course_id = 'null';
    //role will always be student in this case
    api.fetchUserData('Student', course_id).then((data) => {
      this.setState({ studentData: data.data.userData });
    });
  }

  renderTableData() {
    return this.state.studentData.map((student, index) => {
      const { email, role, _id } = student; //destructuring
      return (
        <tr key={_id}>
          <td id='tdclass'>{role}</td>
          <td id='tdclass'>{email}</td>
          <td id='tdclass'>{_id}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className='container scrollable'>
        <div className='row align-items-center'>
          <div className='col' id='column'>
            <div className='row'>
              <h2>{this.state.user}'s Students</h2>
            </div>
            <table className='center' id='table'>
              <tr>
                <th id='th'>Student Role</th>
                <th id='th'>Student Email</th>
                <th id='th'>Student ID</th>
              </tr>
              <tbody>{this.renderTableData()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default TeacherStudentList;
