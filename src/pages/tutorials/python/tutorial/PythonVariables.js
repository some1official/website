import React from "react";
import "./../../../../style/pages/tutorials/python/base.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CgMenuBoxed } from "react-icons/cg";
import NavbarComponent from "../../../../components/Navbar/NavbarComponent";
import {
  Title,
  Author,
  NextButton,
  MenuButton,
  Content,
  HR,
  Text,
  BigTitle,
  ListContent,
  BackButton,
} from "./../../../../style/pages/tutorials/base";

export default function PythonVariables() {
  return (
    <>
      <NavbarComponent />

      <Content>
        <Title>Python Variables</Title>
        <Author>
          Written by <a href="/p/timnik">Timnik</a>
        </Author>
        <div>
          <BackButton>
            <a
              href="/course/python/comments"
              style={{ textDecoration: "inherit" }}
            >
              <FaArrowLeft style={{ position: "relative", top: "2px" }} /> Back
            </a>
          </BackButton>{" "}
          <NextButton>
            <a
              href="/course/python/strings"
              style={{ textDecoration: "inherit" }}
            >
              Next <FaArrowRight style={{ position: "relative", top: "2px" }} />
            </a>
          </NextButton>{" "}
          <MenuButton>
            <a
              href="/learning-path/python-software-engineer"
              style={{ textDecoration: "inherit" }}
            >
              Menu <CgMenuBoxed style={{ position: "relative", top: "2px" }} />
            </a>
          </MenuButton>
        </div>

        <HR />

        <Text>
          Variables are containers used to store different types of data values.
        </Text>

        <br />

        <BigTitle>Creating Variables & Displaying Them</BigTitle>

        <Text>
          Python has not special command for declaring a variable.
          <br />A variable is created when a value is assigned to it.
          <SyntaxHighlighter language="python" style={dark}>
            number = 12
          </SyntaxHighlighter>
          <SyntaxHighlighter language="python" style={dark}>
            name = "John"
          </SyntaxHighlighter>
          <br />
          To output code we use the command print() as you can see below:
          <SyntaxHighlighter language="python" style={dark}>
            print(number)
          </SyntaxHighlighter>
          <SyntaxHighlighter language="python" style={dark}>
            print(name)
          </SyntaxHighlighter>
          <br />
          <h1 className="small-title-content-tutorialPython">Output:</h1>
          <SyntaxHighlighter language="python" style={dark}>
            12
          </SyntaxHighlighter>
          <SyntaxHighlighter language="python" style={dark}>
            John
          </SyntaxHighlighter>
        </Text>

        <br />

        <BigTitle>Different types of data</BigTitle>

        <Text>
          In python there are different types of data, that can be stored inside
          a variable. Now you learn a bit about every single one of them, but we
          will talk more about every single one later in the tutorial.
          <br />
        </Text>

        <br />

        <h1 className="small-title-content-tutorialPython">
          Standard Data Types:
        </h1>
        <ul>
          <Text>
            <ListContent>Number</ListContent>
            <SyntaxHighlighter language="python" style={dark}>
              number = 5
            </SyntaxHighlighter>

            <ListContent>String</ListContent>
            <SyntaxHighlighter language="python" style={dark}>
              message = "This is a string."
            </SyntaxHighlighter>

            <ListContent>Bool</ListContent>
            <SyntaxHighlighter language="python" style={dark}>
              boolean = True
            </SyntaxHighlighter>

            <ListContent>List</ListContent>
            <SyntaxHighlighter language="python" style={dark}>
              myFriends = ["George", "David", "Alex", "Andreea"]
            </SyntaxHighlighter>

            <ListContent>Tuple</ListContent>
            <SyntaxHighlighter language="python" style={dark}>
              myNumbers = (21.6, 5, -263, 53225)
            </SyntaxHighlighter>

            <ListContent>Dictionary</ListContent>
            <SyntaxHighlighter language="python" style={dark}>
              prices = idk to show them
            </SyntaxHighlighter>
          </Text>
        </ul>
      </Content>
    </>
  );
}
