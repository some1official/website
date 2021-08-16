import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute'

//Pages
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

import loginPage from './auth/loginPage'

//PythonTutorials

import PythonSoftwareEngineer from './pages/learning paths/PythonSoftwareEngineer/PythonSoftwareEngineer'

import PythonCourseRoute from './routes/PythonCourseRoute'

import Timnik from './profiles/timnik/Timnik'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />

        {/*Dashboard*/}
        <Route path="/dashboard"> {PrivateRoute ? <Dashboard/> : <Redirect to="/login"/>  } </Route>

        {/* Python Tutorial */}
        <Route path="/learning-path/python-software-engineer" component={PythonSoftwareEngineer} />
        <Route path="/login"> {PrivateRoute ? <Redirect to="/dashboard" /> : <loginPage/> } </Route>
        
        <PythonCourseRoute />
      
        {/* Profile Pages */}
        <Route path="/p/timnik" component={Timnik} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
