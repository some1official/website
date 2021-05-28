import React from 'react'
import './../../../../style/pages/tutorials/python/base.css'

export default function tutorialPython() {
    return (
        <>
        
            <div className="content-tutorialPython">
              <h1 className="title-content-tutorialPython">Python Introduction</h1>
              <hr className="hr-content-tutorialPython"/>

              <h1 className="big-title-content-tutorialPython">What is Python?</h1>
              <p className="text-content-tutorialPython">
              Python is a very popular high-level programming language, because of the easy to understand syntax
              is considered one of the easiest programming languages to learn. It was created by by Guido van Rossum, 
              and released in 1991.
              </p>

              <br/>

              <h1 className="big-title-content-tutorialPython">What can Python do?</h1>

              <ul>
                <li className="li-content-tutorialPython">
                  <p className="text-content-tutorialPython">can we be used to create web applications</p>
                </li>
                <li className="li-content-tutorialPython">
                  <p className="text-content-tutorialPython">can be used to automate stuff</p>
                </li>
                <li className="li-content-tutorialPython">
                  <p className="text-content-tutorialPython">can be used alongside software to create workflows.</p>
                </li>
                <li className="li-content-tutorialPython">
                  <p className="text-content-tutorialPython">for rapid prototyping, or for production-ready software development.</p>
                </li>
              </ul>
            </div>
        </>
    )
}