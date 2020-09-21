import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Student from '../components/Student';
import Teacher from '../components/Teacher';
import Admin from '../components/Admin';
import SignOut from '../components/SignOut';
import Editpreferences from '../components/Editpreferences';


import { NavBar, Home, Signin, Footer } from '../components';
import {
  Signup,
  TeacherClassList,
  TeacherStudentList,
  TeacherProjectList,
} from '../pages';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={() => <Home />} />
        <Route path='/Register' exact component={Signup} />
        <Route path='/SignIn' exact component={() => <Signin />} />
        <Route path='/Student' exact component={() => <Student />} />
        <Route path='/Teacher' exact component={() => <Teacher />} />
        <Route path='/Admin' exact component={() => <Admin />} />
        <Route path='/SignOut' exact component={() => <SignOut />} />
        <Route path='/teacher/ClassList' exact component={TeacherClassList} />
        <Route path='/student/updatepreferences' exact component={Editpreferences} />
        <Route
          path='/teacher/StudentList'
          exact
          component={TeacherStudentList}
        />
        <Route
          path='/teacher/ProjectList'
          exact
          component={TeacherProjectList}
        />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
