import React from "react";
import { Route } from "react-router-dom";

import PythonSoftwareEngineer from "../pages/learning paths/PythonSoftwareEngineer";

export default function LearningPaths() {
  return (
    <div>
      <Route
        path="/learning-path/python-software-engineer"
        component={PythonSoftwareEngineer}
      />
    </div>
  );
}
