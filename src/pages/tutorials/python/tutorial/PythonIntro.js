import React from 'react'
import './../../../../style/pages/tutorials/python/base.css'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { CgMenuBoxed } from 'react-icons/cg'
import NavbarComponent from '../../../../components/Navbar/NavbarComponent';

export default function PythonHelloWorld() {
    return (
      <>
        <NavbarComponent />
        <div className="page-tutorialPython">
        
        <div className="content-tutorialPython">
              <h1 className="title-content-tutorialPython">
                What is Python? {'(Introduction)'}
              </h1>
              <p className="author-tutorialPython">Written by {'[ '}<a className="a-author-tutorialPython"href="/p/timnik">Timnik</a>{' ]'}</p>
              <div className="buttons-tutorialPython">
                <button className="next-buttons-tutorialPython">
                    <a href="/course/python/hello-world" style={{textDecoration: "inherit"}}>Start <FaArrowRight style={{position: "relative",top: "2px"}} /></a>
                </button>
                {' '}
                <button className="menu-buttons-tutorialPython">
                    <a href="/learning-path/python-software-engineer" style={{textDecoration: "inherit"}}>Menu <CgMenuBoxed style={{position: "relative",top: "2px"}}/></a>
                </button>
              </div>
              <hr className="hr-content-tutorialPython"/>

              <p className="text-content-tutorialPython">
              Python is an interpreted high-level general-purpose programming language. 
              It was created by Guido van Rossum, and released in 1991. 
              < br/>
              < br/>
              It is considered a great programming language for beginners to start with because 
              it has simple syntax and it is high-level. And it is also a good language to have in any
              programmer's stack as it can be used for everything from web development to software development
              and scientific applications.
              </p>

              <br />

              <h1 className="big-title-content-tutorialPython">Good to Know:</h1>
              
              <li className="li-content-tutorialPython">
                  <p className="text-content-tutorialPython">
                    In this course you will learn Python 3, not Python 2.
                  </p>
              </li>
                
              <li className="li-content-tutorialPython">
                  <p className="text-content-tutorialPython">
                    We will be usind an IDE {'(Integrated Development Environment)'} in this course, you can use our own IDE in your browser or install one yourself.
                  </p>
              </li>
            </div>
            </div>
      </>
    )
}
