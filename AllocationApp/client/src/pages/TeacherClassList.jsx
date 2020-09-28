import React from 'react';

import api from '../api';

import edit from '../res/edit.png';
import del from '../res/delete.png';
import { Component } from 'react';

class TeacherClassList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.location.state.user,
      classData: [],
      isLoading: false,
      courseIds: [],
    };

    this.fetchClassList(this.state.user._id);
  }

  fetchClassList() {
    api.getAllCourses().then((data) => {
      // need to change class model and check if the course is for that teacher
      console.log(data);
      this.setState({ classData: data.data.data });
    });
  }

  editClass(user) {
    // event.preventDefault();
    console.log('edit');
    console.log(user);
  }

  deleteClass(_id, name) {
    const class_id = _id;
    api.deleteCourse(class_id).then((data) => {
      window.alert(name + ' has been deleted!');
      window.location.reload();
    });
  }

  viewStudents(_id, name) {
    const user = this.state.user;
    const classname = name;
    this.props.history.push({
      pathname: '/Teacher/StudentList',
      state: { user: user, course: _id, className: classname },
    });
  }

  viewProjects = async (_id, name) => {
    const user = this.state.user;
    const classname = name;
    this.props.history.push({
      pathname: '/Teacher/ProjectList',
      state: { user: user, course: _id, className: classname },
    });
  };

  addClass = async (event) => {
    event.preventDefault();
    // redirect to add class
  };

  renderTableData() {
    return this.state.classData.map((course, index) => {
      const { name, numberOfStudents, _id } = course; //destructuring
      return (
        <tr key={_id}>
          <td id='tdclass'>{name}</td>
          <td id='tdclass'>{numberOfStudents}</td>
          <td>
            <button
              key={_id}
              id='classbtn'
              className='btn btn-primary btn-round'
              onClick={() => this.viewStudents(_id, name)}
            >
              Students
            </button>
          </td>
          <td>
            <button
              key={_id}
              id='classbtn'
              className='btn btn-primary btn-round'
              onClick={() => this.viewProjects(_id, name)}
            >
              Projects
            </button>
          </td>
          <td>
            <button id='icon' key={_id} onClick={() => this.editClass(_id)}>
              <img id='edit' src={edit} />
            </button>
          </td>
          <td>
            <button
              id='icon'
              key={_id}
              onClick={() => this.deleteClass(_id, name)}
            >
              <img id='del' src={del} />
            </button>
          </td>
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
              <h2>{this.state.user.fullName}'s Classes</h2>
            </div>
            <table className='center' id='table'>
              <tr>
                <th id='th'>Name</th>
                <th id='th'>Number of Students</th>
                <th id='th'>View Students</th>
                <th id='th'>View Projects</th>
                <th></th>
                <th></th>
              </tr>
              <tbody>{this.renderTableData()}</tbody>
              <button
                style={{
                  width: '15%',
                  position: 'absolute',
                  right: '50px',
                  marginTop: '25px',
                }}
                className='btn btn-primary btn-round'
                onClick={this.addClass}
              >
                Add Class
              </button>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default TeacherClassList;
