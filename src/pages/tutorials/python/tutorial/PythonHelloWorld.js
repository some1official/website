import React from 'react'
import './../../../../style/pages/tutorials/python/base.css'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function PythonHelloWorld() {
    return (
        <div className="content-tutorialPython">
              <h1 className="title-content-tutorialPython">Python Hello World</h1>
              <hr className="hr-content-tutorialPython"/>

              <p className="text-content-tutorialPython">
              A "Hello, World!" program is computer program that outputs or displays the message "Hello, World!".
              This program is very to easy to understand and is often used to teach the basic syntax of a programming
              language. Now you'll learn how to create your own "Hello, World!" program in Python.
              </p>

              <br />

              <h1 className="big-title-content-tutorialPython">Making the Program</h1>

              <p className="text-content-tutorialPython">
              In python is very easy to create such a program. We will use the function: 
              <SyntaxHighlighter language="python" style={dark}>print()</SyntaxHighlighter> 
              </p>
              
              

              <p className="text-content-tutorialPython">
              To output the message "Hello, World!" we will need to use quotation marks ("), as you can see below: 
              <SyntaxHighlighter language="python" style={dark}>print("Hello, World!")</SyntaxHighlighter> 
              </p>

              <br />

              <h1 className="big-title-content-tutorialPython">Running the program</h1>

              <p className="text-content-tutorialPython">
              By running the program we will get the following message displayed on the console:
              <SyntaxHighlighter language="python" style={dark}>Hello, World!</SyntaxHighlighter> 
              </p>
            </div>
    )
}
