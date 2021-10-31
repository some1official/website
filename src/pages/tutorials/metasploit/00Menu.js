import React from "react";
import styled from "styled-components";

import NavbarComponent from "./../../../components/Navbar/NavbarComponent";

export default function Menu() {
  return (
    <>
      <NavbarComponent />

      <br />
      <br />
      <br />

      <Header>
        <img
          src="/icons/metasploit.png"
          height={150}
          style={{
            position: "relative",
            top: "-10px",
          }}
        />
        <p>Course</p>
        <h1>Metasploit</h1>
      </Header>

      {/* Statistics about the Learning Path */}

      <Statistics>
        {/* Hours statistics */}

        <StatisticsObject>
          <ObjectTitle>Hours Of Content</ObjectTitle>
          <ObjectSecondaryTitle>16</ObjectSecondaryTitle>
        </StatisticsObject>

        {/* Difficulty Statistics */}

        <StatisticsObject>
          <ObjectTitle>Difficulty</ObjectTitle>
          <ObjectSecondaryTitle>Easy</ObjectSecondaryTitle>
        </StatisticsObject>

        {/* Sections Statistics */}

        <StatisticsObject>
          <ObjectTitle>Sections</ObjectTitle>
          <ObjectSecondaryTitle>5</ObjectSecondaryTitle>
        </StatisticsObject>

        {/* Number of Tutorials Statistics */}

        <StatisticsObject>
          <ObjectTitle>Tutorials</ObjectTitle>
          <ObjectSecondaryTitle>35</ObjectSecondaryTitle>
        </StatisticsObject>
      </Statistics>

      <br />
      <br />

      <Content
        style={{
          marginLeft: "30%",
          marginRight: "30%",
        }}
      >
        <Line />

        <SectionDescription>Python for Everybody</SectionDescription>

        <Section>
          <SectionTitle>Section 1</SectionTitle>
          <SectionDescription>Python for Everybody</SectionDescription>

          <ul>
            <li>
              00 - <a href="/course/python/intro"> What is Python?</a>{" "}
              (Introduction)
            </li>
            <li>
              01 - <a href="/course/python/hello-world"> Hello, World</a>
            </li>
            <li>
              02 - <a href="/course/python/comments"> Comments</a>
            </li>
            <li>
              03 - <a href="/course/python/variables"> Variables</a>
            </li>
            <li>
              04 - <a href="/course/python/strings"> Strings</a>
            </li>
            <li>
              05 - <a href="/course/python/numbers"> Numbers</a>
            </li>
          </ul>
        </Section>

        <Section>
          <SectionTitle>Section 2</SectionTitle>
          <SectionDescription>Popular Python Tools</SectionDescription>
        </Section>

        <Section>
          <SectionTitle>Section 3</SectionTitle>
          <SectionDescription>Python Projects</SectionDescription>
        </Section>
      </Content>
    </>
  );
}

const Header = styled.div`
  text-align: center;
  position: relative;
  top: 50px;
  margin-bottom: 50px;

  p {
    color: black;
    font-style: italic;
    margin-bottom: 15px;
    font-size: 20px;
  }

  h1 {
    position: relative;
    top: -10px;
    font-size: 30px;
    font-weight: 600;
  }
`;

const Statistics = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 20px;
`;

const StatisticsObject = styled.div`
  margin-right: 15px;
  margin-left: 15px;
`;

const ObjectTitle = styled.div`
  color: black;
  margin-bottom: 1%;
  font-size: 20px;
  text-align: center;
  margin-bottom: 0px;
`;

const ObjectSecondaryTitle = styled.div`
  color: black;
  margin-bottom: 1%;
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
`;

const SectionTitle = styled.summary`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 1%;
  font-family: Source Code Pro, monospace;
  color: black;
`;

const SectionDescription = styled.p`
  font-family: Source Code Pro, monospace;
  color: black;
  font-size: 18px;
  margin-bottom: 1%;
`;

const Section = styled.details`
  ul {
    color: black;
    font-family: Source Code Pro, monospace;
    font-size: 20px;
    list-style-type: none;
  }

  a {
    &:hover {
      color: gray;
    }
  }
`;

const Line = styled.hr`
  color: black;
  border: 1px solid black;
`;

const Content = styled.div`
  margin-left: 30%;
  margin-right: 30%;
`;
