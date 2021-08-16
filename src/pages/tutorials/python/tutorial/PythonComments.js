import React from 'react'
import './../../../../style/pages/tutorials/python/base.css'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { CgMenuBoxed } from 'react-icons/cg'
import NavbarComponent from '../../../../components/Navbar/NavbarComponent';


export default function PythonComments() {
    return (
        <>
        <NavbarComponent />
        <div className="page-tutorialPython">
        
        

        <div className="content-tutorialPython">
              <h1 className="title-content-tutorialPython">
                Python Comments
              </h1>
              <p className="author-tutorialPython">Written by {'[ '}<a className="a-author-tutorialPython"href="/p/timnik">Timnik</a>{' ]'}</p>
              <div className="buttons-tutorialPython">
                <button className="back-buttons-tutorialPython">
                    <a href="/course/python/hello-world" style={{textDecoration: "inherit"}}><FaArrowLeft style={{position: "relative",top: "2px"}}/> Back</a>
                </button>
                {' '}
                <button className="next-buttons-tutorialPython">
                    <a href="/course/python/variables" style={{textDecoration: "inherit"}}>Next <FaArrowRight style={{position: "relative",top: "2px"}}/></a>
                </button>
                {' '}
                <button className="menu-buttons-tutorialPython">
                    <a href="/learning-path/python-software-engineer" style={{textDecoration: "inherit"}}>Menu <CgMenuBoxed style={{position: "relative",top: "2px"}}/></a>
                </button>
              </div>
              <hr className="hr-content-tutorialPython"/>

              <h1 className="big-title-content-tutorialPython">
              Comments are used for a multiple of reasons:
              </h1>

              <li className="li-content-tutorialPython">
                  <p className="text-content-tutorialPython">
                    To explain code
                  </p>
              </li>
                
              <li className="li-content-tutorialPython">
                  <p className="text-content-tutorialPython">
                    Stop code from executing for testing
                  </p>
              </li>

              <li className="li-content-tutorialPython">
                  <p className="text-content-tutorialPython">
                    Make code more readable
                  </p>
              </li>

              <br />

              <h1 className="big-title-content-tutorialPython">How to create a Comment:</h1>

              <p className="text-content-tutorialPython">
              Comments start with a "#", after that any text on the same line will be ignored
              <SyntaxHighlighter language="python" style={dark}>
                {"#This code will be ignored \nprint(\"Hello, World!\")"}    
              </SyntaxHighlighter> 
              </p>
              
              

              
            <br />
            <h1 className="big-title-content-tutorialPython">Try it Yourself:</h1>

            <iframe src="https://trinket.io/embed/python/61c4bb08c5?runOption=run" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

            <br />
            <br />
        </div>
        </div>
        </>
    )
}
