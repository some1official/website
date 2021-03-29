import React from 'react'
import Signup from './Signup'
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';
import Login from './Login';
import PrivateRoute from './Route/PrivateRoute';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';
import CourseRoute from './Route/CourseRoute';
import Courses from './courses/Main';
import CoursesLogin from './courses/Login';

function App() {
  return (
    
        <Router>
          <AuthProvider>
            <Switch>
              <CourseRoute exact path="/courses" component={Courses} />
              <Route path="/courses/login" component={CoursesLogin} />

              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />

              <Route exact path="/" component={Home} />
              <Route path="/signup" component={Signup}/>
              <Route path="/login" component={Login}/>
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
  )
}

export default App;
