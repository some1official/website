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
  BackButton,
  Content,
  HR,
  BigTitle,
  ListContent,
  Text,
} from "../../../../style/pages/tutorials/base";

export default function PythonComments() {
  return (
    <>
      <NavbarComponent />

      <Content>
        <Title>Python Comments</Title>
        <Author>
          Written by <a href="/p/timnik">Timnik</a>
        </Author>
        <div>
          <BackButton>
            <a
              href="/course/python/hello-world"
              style={{ textDecoration: "inherit" }}
            >
              <FaArrowLeft style={{ position: "relative", top: "2px" }} /> Back
            </a>
          </BackButton>{" "}
          <NextButton>
            <a href="/course/python/variables">
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

        <BigTitle>Comments are used for a multiple of reasons:</BigTitle>

        <ListContent>
          <Text>To explain code</Text>
        </ListContent>

        <ListContent>
          <Text>Stop code from executing for testing</Text>
        </ListContent>

        <ListContent>
          <Text>Make code more readable</Text>
        </ListContent>

        <br />

        <BigTitle>How to create a Comment:</BigTitle>

        <Text>
          Comments start with a "#", after that any text on the same line will
          be ignored
          <SyntaxHighlighter language="python" style={dark}>
            {'#This code will be ignored \nprint("Hello, World!")'}
          </SyntaxHighlighter>
        </Text>

        <br />
        <BigTitle>Try it Yourself:</BigTitle>

        <iframe
          src="https://trinket.io/embed/python/61c4bb08c5?runOption=run"
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
