import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute'

//Pages
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

import loginPage from './auth/loginPage'

//PythonTutorials
import PythonIntro from './pages/tutorials/python/tutorial/PythonIntro'
import PythonHelloWorld from './pages/tutorials/python/tutorial/PythonHelloWorld'
import PythonVariables from './pages/tutorials/python/tutorial/PythonVariables'
import PythonSoftwareEngineer from './pages/learning paths/PythonSoftwareEngineer/PythonSoftwareEngineer'

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
        <Route path="/tutorials/python/intro"> {PrivateRoute ? <Redirect to="/" /> : <Redirect to="/login" />} </Route>
        <Route path="/tutorials/python/hello-world" component={PythonHelloWorld} />
        <Route path="/tutorials/python/variables" component={PythonVariables} />
      
        {/* Profile Pages */}
        <Route path="/p/timnik" component={Timnik} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
