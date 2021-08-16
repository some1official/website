import React from 'react'
import { Route } from 'react-router-dom'

import PythonIntro from '../pages/tutorials/python/tutorial/PythonIntro'
import PythonHelloWorld from '../pages/tutorials/python/tutorial/PythonHelloWorld'
import PythonVariables from '../pages/tutorials/python/tutorial/PythonVariables'
import PythonComments from '../pages/tutorials/python/tutorial/PythonComments'
import PythonStrings from '../pages/tutorials/python/tutorial/PythonStrings'

export default function PythonCourse() {
    return (
        <div>
            <Route path="/course/python/intro" component={PythonIntro} />
            <Route path="/course/python/hello-world" component={PythonHelloWorld} />
            <Route path="/course/python/comments" component={PythonComments} />
            <Route path="/course/python/variables" component={PythonVariables} />
            <Route path="/course/python/strings" component={PythonStrings} />
        </div>
    )
}
