import React from 'react'
import './../../../../style/pages/tutorials/python/base.css'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { CgMenuBoxed } from 'react-icons/cg';

export default function PythonVariables() {
    return (
        <div className="page-tutorialPython">

        <div className="content-tutorialPython">
        <h1 className="title-content-tutorialPython">
                Python Variables
              </h1>
              <p className="author-tutorialPython">Written by {'[ '}<a className="a-author-tutorialPython"href="/p/timnik">Timnik</a>{' ]'}</p>
              <div className="buttons-tutorialPython">
                <button className="back-buttons-tutorialPython">
                    <a href="/course/python/comments" style={{textDecoration: "inherit"}}><FaArrowLeft style={{position: "relative",top: "2px"}}/> Back</a>
                </button>
                {' '}
                <button className="next-buttons-tutorialPython">
                    <a href="/course/python/strings" style={{textDecoration: "inherit"}}>Next <FaArrowRight style={{position: "relative",top: "2px"}}/></a>
                </button>
                {' '}
                <button className="menu-buttons-tutorialPython">
                    <a href="/learning-path/python-software-engineer" style={{textDecoration: "inherit"}}>Menu <CgMenuBoxed style={{position: "relative",top: "2px"}}/></a>
                </button>
              </div>
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
            </div>
    )
}
