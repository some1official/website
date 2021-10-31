import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";

//Pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Learn from "./pages/Learn";

import loginPage from "./auth/loginPage";

import PythonSoftwareEngineer from "./pages/learning paths/PythonSoftwareEngineer";

// [ Routes ]
// - Courses
import PythonCourseRoute from "./routes/courses/PythonCourseRoute";
import MetasploitCourseRoute from "./routes/courses/MetasploitCourseRoute";

// - Learning Paths
import LearningPaths from "./routes/LearningPaths";

import Timnik from "./profiles/timnik/Timnik";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/learn" component={Learn} />

        {/*Dashboard*/}
        <Route path="/dashboard">
          {" "}
          {PrivateRoute ? <Dashboard /> : <Redirect to="/login" />}{" "}
        </Route>

        <Route path="/login">
          {" "}
          {PrivateRoute ? <Redirect to="/dashboard" /> : <loginPage />}{" "}
        </Route>

        <Route
          path="/learning-path/python-software-engineer"
          component={PythonSoftwareEngineer}
        />

        <MetasploitCourseRoute />
        <PythonCourseRoute />

        {/* Profile Pages */}
        <Route path="/p/timnik" component={Timnik} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
