import React from "react";
import { Route } from "react-router-dom";

import Menu from "../../pages/tutorials/metasploit/00Menu";

export default function PythonCourse() {
  return (
    <div>
      <Route path="/course/metasploit" component={Menu} />
    </div>
  );
}
