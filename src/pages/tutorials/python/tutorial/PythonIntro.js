import React from "react";
import "./../../../../style/pages/tutorials/python/base.css";
import { FaArrowRight } from "react-icons/fa";
import { CgMenuBoxed } from "react-icons/cg";
import NavbarComponent from "../../../../components/Navbar/NavbarComponent";
import styled from "styled-components";
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
} from "./../../../../style/pages/tutorials/base";

export default function PythonIntro() {
  return (
    <>
      <NavbarComponent />
      <Content>
        <Title>What is Python? (Introduction)</Title>
        <Author>
          Written by <a href="/p/timnik">Timnik</a>
        </Author>
        <div>
          <NextButton>
            <a
              href="/course/python/hello-world"
              style={{ textDecoration: "inherit" }}
            >
              Start{" "}
              <FaArrowRight style={{ position: "relative", top: "2px" }} />
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
          Python is an interpreted high-level general-purpose programming
          language. It was created by Guido van Rossum, and released in 1991.
          <br />
          <br />
          It is considered a great programming language for beginners to start
          with because it has simple syntax and it is high-level. And it is also
          a good language to have in any programmer's stack as it can be used
          for everything from web development to software development and
          scientific applications.
        </Text>

        <br />

        <BigTitle>Good to Know:</BigTitle>

        <ListContent>
          <Text>In this course you will learn Python 3, not Python 2.</Text>
        </ListContent>

        <ListContent>
          <Text>
            We will be usind an IDE {"(Integrated Development Environment)"} in
            this course, you can use our own IDE in your browser or install one
            yourself.
          </Text>
        </ListContent>
      </Content>
    </>
  );
}
