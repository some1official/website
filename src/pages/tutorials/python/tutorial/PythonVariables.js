import React from 'react'
import './../../../../style/pages/tutorials/python/base.css'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function PythonHelloWorld() {
    return (
        <div className="content-tutorialPython">
              <h1 className="title-content-tutorialPython">Python Variables</h1>
              <hr className="hr-content-tutorialPython"/>

              <p className="text-content-tutorialPython">
              Variables are containers used to store different types of data values.
              </p>

              <br />

              <h1 className="big-title-content-tutorialPython">Creating Variables & Displaying Them</h1>

              <p className="text-content-tutorialPython">
              Python has not special command for declaring a variable.
              <br/>
              A variable is created when a value is assigned to it.
              
              <SyntaxHighlighter language="python" style={dark}>number = 12</SyntaxHighlighter>
              <SyntaxHighlighter language="python" style={dark}>name = "John"</SyntaxHighlighter>

              <br />

              To output code we use the command print() as you can see below:
              <SyntaxHighlighter language="python" style={dark}>print(number)</SyntaxHighlighter>
              <SyntaxHighlighter language="python" style={dark}>print(name)</SyntaxHighlighter>

              <br />

              <h1 className="small-title-content-tutorialPython">Output:</h1>
              <SyntaxHighlighter language="python" style={dark}>12</SyntaxHighlighter>
              <SyntaxHighlighter language="python" style={dark}>John</SyntaxHighlighter>
              </p>

              <br />

                <h1 className="big-title-content-tutorialPython">Different types of data</h1>
                

                <p className="text-content-tutorialPython">
                In python there are different types of data, that can be stored inside a variable. Now you learn a bit about every single one of them, but we will
                talk more about every single one later in the tutorial.

                < br/>

                </p>

                <br />

                <h1 className="small-title-content-tutorialPython">Standard Data Types:</h1>
                <ul>
                
                <li className="li-content-tutorialPython">
                  <p className="text-content-tutorialPython">Number</p>
                </li>
                <SyntaxHighlighter language="python" style={dark}>number = 5</SyntaxHighlighter>

                <li className="li-content-tutorialPython">
                  <p className="text-content-tutorialPython">String</p>
                </li>
                <SyntaxHighlighter language="python" style={dark}>message = "This is a string."</SyntaxHighlighter>

                <li className="li-content-tutorialPython">
                  <p className="text-content-tutorialPython">Bool</p>
                </li>
                <SyntaxHighlighter language="python" style={dark}>boolean = True</SyntaxHighlighter>

                <li className="li-content-tutorialPython">
                  <p className="text-content-tutorialPython">List</p>
                </li>
                <SyntaxHighlighter language="python" style={dark}>myFriends = ["George", "David", "Alex", "Andreea"]</SyntaxHighlighter>

                <li className="li-content-tutorialPython">
                  <p className="text-content-tutorialPython">Tuple</p>
                </li>
                <SyntaxHighlighter language="python" style={dark}>myNumbers = (21.6, 5, -263, 53225)</SyntaxHighlighter>

                <li className="li-content-tutorialPython">
                  <p className="text-content-tutorialPython">Dictionary</p>
                </li>
                <SyntaxHighlighter language="python" style={dark}>prices = idk to show them</SyntaxHighlighter>

              </ul>
            </div>
    )
}
