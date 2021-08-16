import React from 'react'
import './../../../../style/pages/tutorials/python/base.css'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { CgMenuBoxed } from 'react-icons/cg'
import NavbarComponent from '../../../../components/Navbar/NavbarComponent';

export default function PythonNumbers() {
    return (
        <>
        <NavbarComponent />
        <div className="page-tutorialPython">
        
        <div className="content-tutorialPython">
              <h1 className="title-content-tutorialPython">
                Python Strings
              </h1>
              <p className="author-tutorialPython">Written by {'[ '}<a className="a-author-tutorialPython"href="/p/timnik">Timnik</a>{' ]'}</p>
              <div className="buttons-tutorialPython">
                <button className="back-buttons-tutorialPython">
                    <a href="/course/python/strings" style={{textDecoration: "inherit"}}><FaArrowLeft style={{position: "relative",top: "2px"}}/> Back</a>
                </button>
                {' '}
                <button className="next-buttons-tutorialPython">
                    <a href="/course/python/numbers" style={{textDecoration: "inherit"}}>Next <FaArrowRight style={{position: "relative",top: "2px"}}/></a>
                </button>
                {' '}
                <button className="menu-buttons-tutorialPython">
                    <a href="/learning-path/python-software-engineer" style={{textDecoration: "inherit"}}>Menu <CgMenuBoxed style={{position: "relative",top: "2px"}}/></a>
                </button>
              </div>

              <hr className="hr-content-tutorialPython"/>


            <p className="text-content-tutorialPython">
                There are 3 types of numbers in Python:
            </p>

            <li className="li-content-tutorialPython">
                <p className="text-content-tutorialPython">
                    Int or Integer
                </p>
            </li>
            <li className="li-content-tutorialPython">
                <p className="text-content-tutorialPython">
                    Float
                </p>
            </li>
            <li className="li-content-tutorialPython">
                <p className="text-content-tutorialPython">
                    Complex
                </p>
            </li>
              
            <br />

            <h1 className="big-title-content-tutorialPython">Int or Integer</h1>
            <p className="text-content-tutorialPython">
                Int or Integer is a whole number, it can be positive or negative, of unlimited length. 
                The int or integer can't have decimals.
            </p>
            
            <br />

            <h1 className="small-title-content-tutorialPython">Example:</h1>
            <SyntaxHighlighter language="python" style={dark}>
                {"a = 15\nb = -658\nc = 532895723745023750243\n\nprint(a)\nprint(b)\nprint(c)\nprint(type(a))\nprint(type(b))\nprint(type(c))"}
            </SyntaxHighlighter> 

            <br />

            <h1 className="big-title-content-tutorialPython">Float</h1>
            <p className="text-content-tutorialPython">
                Float (floating point number) is a number, that contains one or more decimals, it can be positive or negative.
            </p>

            <br />

            <h1 className="small-title-content-tutorialPython">Example:</h1>
            <SyntaxHighlighter language="python" style={dark}>
                {"a = 52.2\nb = -68.978\n\nprint(a)\nprint(b)\nprint(type(a))\nprint(type(b))"}
            </SyntaxHighlighter> 

            <br />

            <h1 className="big-title-content-tutorialPython">Complex</h1>
            <p className="text-content-tutorialPython">
                Complex numbers are written with a "j" as the imaginary part:
            </p>

            <br />

            <h1 className="small-title-content-tutorialPython">Example:</h1>
            <SyntaxHighlighter language="python" style={dark}>
                {"a = 6+5j\nb = 6j\nc = -85j\n\nprint(a)\nprint(b)\nprint(c)\nprint(type(a))\nprint(type(b))\nprint(type(c))"}
            </SyntaxHighlighter> 

            <br />

            <h1 className="small-title-content-tutorialPython">Try it Yourself:</h1>

            <iframe src="https://trinket.io/embed/python/f04b09d634?runOption=run" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

            <br />
            <br />
        </div>
        </div>
        </>
    )
}
