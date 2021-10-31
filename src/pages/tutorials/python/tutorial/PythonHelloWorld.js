import React from "react";
import "./../../../../style/pages/tutorials/python/base.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CgMenuBoxed } from "react-icons/cg";
import NavbarComponent from "../../../../components/Navbar/NavbarComponent";
import {
  Content,
  Title,
  Author,
  BackButton,
  NextButton,
  MenuButton,
  HR,
  Text,
  BigTitle,
} from "../../../../style/pages/tutorials/base";

export default function PythonHelloWorld() {
  return (
    <>
      <NavbarComponent />
      <Content>
        <Title>Python Hello World</Title>
        <Author>
          Written by <a href="/p/timnik">Timnik</a>
        </Author>
        <div>
          <BackButton>
            <a
              href="/course/python/intro"
              style={{ textDecoration: "inherit" }}
            >
              <FaArrowLeft style={{ position: "relative", top: "2px" }} /> Back
            </a>
          </BackButton>{" "}
          <NextButton>
            <a href="/course/python/comments">
              Next <FaArrowRight style={{ position: "relative", top: "2px" }} />
            </a>
          </NextButton>{" "}
          <MenuButton>
            <a href="/learning-path/python-software-engineer">
              Menu <CgMenuBoxed style={{ position: "relative", top: "2px" }} />
            </a>
          </MenuButton>
        </div>

        <HR />

        <Text>
          A "Hello, World!" program is computer program that outputs or displays
          the message "Hello, World!". This program is very to easy to
          understand and is often used to teach the basic syntax of a
          programming language. Now you'll learn how to create your own "Hello,
          World!" program in Python.
        </Text>

        <br />

        <BigTitle>Making the Program</BigTitle>

        <Text>
          In python is very easy to create such a program. We will use the
          function:
          <SyntaxHighlighter language="python" style={dark}>
            print()
          </SyntaxHighlighter>
        </Text>

        <Text>
          To output the message "Hello, World!" we will need to use quotation
          marks ("), as you can see below:
          <SyntaxHighlighter language="python" style={dark}>
            print("Hello, World!")
          </SyntaxHighlighter>
        </Text>

        <br />

        <BigTitle>Running the program</BigTitle>

        <Text>
          By running the program we will get the following message displayed on
          the console:
          <SyntaxHighlighter language="python" style={dark}>
            Hello, World!
          </SyntaxHighlighter>
        </Text>

        <br />
        <BigTitle>Try it Yourself:</BigTitle>

        <iframe
          src="https://trinket.io/embed/python/b995bda901?runOption=run"
          width="100%"
          height="356"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          allowfullscreen
        ></iframe>

        <br />
        <br />
      </Content>
    </>
  );
}
