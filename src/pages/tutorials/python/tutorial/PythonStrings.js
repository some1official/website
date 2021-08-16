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
                Python Strings
              </h1>
              <p className="author-tutorialPython">Written by {'[ '}<a className="a-author-tutorialPython"href="/p/timnik">Timnik</a>{' ]'}</p>
              <div className="buttons-tutorialPython">
                <button className="back-buttons-tutorialPython">
                    <a href="/course/python/variables" style={{textDecoration: "inherit"}}><FaArrowLeft style={{position: "relative",top: "2px"}}/> Back</a>
                </button>
                {' '}
                <button className="next-buttons-tutorialPython">
                    <a href="/course/python/comments" style={{textDecoration: "inherit"}}>Next <FaArrowRight style={{position: "relative",top: "2px"}}/></a>
                </button>
                {' '}
                <button className="menu-buttons-tutorialPython">
                    <a href="/learning-path/python-software-engineer" style={{textDecoration: "inherit"}}>Menu <CgMenuBoxed style={{position: "relative",top: "2px"}}/></a>
                </button>
              </div>

              <hr className="hr-content-tutorialPython"/>


              <p className="text-content-tutorialPython">
              A "string" in programming is a sequence of characters. Strings in python are surrounded 
              by single quotation marks{'(\' \')'} or double quotation marks{'(\" \")'}.
              </p>

              <br />

              <h1 className="small-title-content-tutorialPython">We can output a string using the "print()" function:</h1>
              
              <p className="text-content-tutorialPython">
              <SyntaxHighlighter language="python" style={dark}>
                print("This is a string!")
              </SyntaxHighlighter> 
              </p>

              <h1 className="small-title-content-tutorialPython">We can also assign a string to a variable:</h1>
              
              <p className="text-content-tutorialPython">
              <SyntaxHighlighter language="python" style={dark}>
                {"a = \"This is a string\" \nprint(a)"}
              </SyntaxHighlighter> 
              </p>
              
              <br />

              <p className="text-content-tutorialPython">
                  Strings are awesome but how can we make a multi-line string? Well.. There are 2 ways you can do it:
              </p>

              <li className="li-content-tutorialPython">
                  <p className="text-content-tutorialPython">By creating a multi-line string</p>
              </li>
              <li className="li-content-tutorialPython">
                  <p className="text-content-tutorialPython">By adding strings together (concatenate)</p>
              </li>
        
              <br />

              <h1 className="big-title-content-tutorialPython">
                  Create a multi-line string:
              </h1>

              <p className="text-content-tutorialPython">
                You can create a multi-line string by using three double quotes (""" """) or single quotes (''' '''). 
              </p>

              <br />
              <h1 className="small-title-content-tutorialPython">
                  Double Quotes:
              </h1>
              <SyntaxHighlighter language="python" style={dark}>
                {"a = \"\"\"This is the first line\nThis is the second line\nThis is the last line\"\"\"\nprint(a)"}
              </SyntaxHighlighter> 

              <p className="text-content-tutorialPython">
                or...
              </p>

              <h1 className="small-title-content-tutorialPython">
                  Single Quotes:
              </h1>
              <SyntaxHighlighter language="python" style={dark}>
                {"a = \'\'\'This is the first line\nThis is the second line\nThis is the last line\'\'\'\nprint(a)"}
              </SyntaxHighlighter> 

              <br />

              <h1 className="big-title-content-tutorialPython">
                Adding strings together (concatenate)
              </h1>

              <p className="text-content-tutorialPython">
                We can add add multiple strings together by using the plus character ("+"):
              </p>


              <SyntaxHighlighter language="python" style={dark}>
                {"a = \"This is the first line\"\nb = \"This is the second line\"\nprint(a + b)"}
              </SyntaxHighlighter> 

              <p className="text-content-tutorialPython">
                This will get us the output:
              </p>
              <SyntaxHighlighter language="python" style={dark}>
                {"This is the first lineThis is the second line"}
              </SyntaxHighlighter>

              <br />
              <p className="text-content-tutorialPython">
                We can clearly see that this is not what we want. First let's add a space between the sentences.
                < br/>
                We can add it simply by adding a empty space at the end of the first string:
              </p>

              <SyntaxHighlighter language="python" style={dark}>
                {"a = \"This is the first line \"\nb = \"This is the second line\"\nprint(a + b)"}
              </SyntaxHighlighter> 
              <p className="text-content-tutorialPython">
                Output:
              </p>
              <SyntaxHighlighter language="python" style={dark}>
                {"This is the first line This is the second line"}
              </SyntaxHighlighter>

              <br />

              <p className="text-content-tutorialPython">
                But now.. how do we add a new line? Well there is a special character called
                "new line indicator character" and it looks like this "\n". If we will put this 
                character in a string it will add a new line. Let's add it!
              </p>

              <SyntaxHighlighter language="python" style={dark}>
                {"a = \"This is the first line \\n\"\nb = \"This is the second line\"\nprint(a + b)"}
              </SyntaxHighlighter> 
              <p className="text-content-tutorialPython">
                Output:
              </p>
              <SyntaxHighlighter language="python" style={dark}>
                {"This is the first line\nThis is the second line"}
              </SyntaxHighlighter>

            <br />

            <h1 className="big-title-content-tutorialPython">String Length</h1>
            <p className="text-content-tutorialPython">
                We can check get the length of a string by using the "len()" function:
            </p>

            <SyntaxHighlighter language="python" style={dark}>
                {"a = \"Mom went to store and bought 3 apples.\"\nprint(len(a))"}
            </SyntaxHighlighter> 
            <p className="text-content-tutorialPython">
                Output:
            </p>
            <SyntaxHighlighter language="python" style={dark}>
                {"38"}
            </SyntaxHighlighter>

            <br />

            <h1 className="big-title-content-tutorialPython">Try it Yourself:</h1>

            <iframe src="https://trinket.io/embed/python/85d473294d?runOption=run" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>


            <br />
            <br />
        </div>
        </div>
        </>
    )
}
