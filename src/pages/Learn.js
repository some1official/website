import styled from "styled-components";
import NavbarComponent from "../components/Navbar/NavbarComponent";
import ReactTypingEffect from "react-typing-effect";

const Home = (props) => {
  return (
    <Container>
      <NavbarComponent />

      <br />
      <br />
      <br />
      <br />
      <br />

      <FeaturedSection>
        <FeaturedTitle>
          <h1>Learning Paths</h1>
          <p>Work your way through a structured learning path.</p>
        </FeaturedTitle>

        <CardSection>
          <Card>
            <img src="/icons/python.png" alt="" />
            <CardContainer>
              <h1>
                <b>
                  Python <br /> Software Engineer
                </b>
              </h1>

              <p>
                Learn the fundamentals <br /> by creating projects.
              </p>

              <button>Learn</button>
            </CardContainer>
          </Card>

          <Card>
            <img src="/icons/react.png" alt="" />
            <CardContainer>
              <h1>
                <b>
                  React <br /> Frontend Developer
                </b>
              </h1>
              <p>
                Learn One of the most <br /> Popular Frontend Libraries
              </p>
              <button>Learn</button>
            </CardContainer>
          </Card>

          <Card>
            <img src="/icons/htmlcssjs.png" alt="" />
            <CardContainer>
              <h1>
                <b>
                  HTML, CSS, <br /> JavaScript
                </b>
              </h1>
              <p>
                Learn to build websites & <br /> integrate JavaScript
              </p>
              <button>Learn</button>
            </CardContainer>
          </Card>

          <Card>
            <img src="/icons/linuxsysadmin.png" alt="" />
            <CardContainer>
              <h1>
                <b>
                  Linux <br /> System Admin
                </b>
              </h1>
              <p>
                Learn to control & manage <br /> the operating system linux.
              </p>
              <button>Learn</button>
            </CardContainer>
          </Card>

          <Card>
            <img src="/icons/cpp.png" alt="" />
            <CardContainer>
              <h1>
                <b>
                  C++ <br /> Software Engineer
                </b>
              </h1>
              <p>
                Learn the fundamentals <br /> by creating projects.
              </p>
              <button>Learn</button>
            </CardContainer>
          </Card>

          <Card>
            <img src="/icons/webexploitation.png" alt="" />
            <CardContainer>
              <h1>
                <b>Web Exploitation</b>
              </h1>
              <p>
                Learn the tools & the methods <br /> used to exploit web
                applications.
              </p>
              <button>Learn</button>
            </CardContainer>
          </Card>

          <Card>
            <img src="/icons/cpp.png" alt="" />
            <CardContainer>
              <h1>
                <b>C++</b>
              </h1>
              <button>Learn</button>
            </CardContainer>
          </Card>

          <Card>
            <img src="/icons/webexploitation.png" alt="" />
            <CardContainer>
              <h1>
                <b>Web Exploitation</b>
              </h1>
              <button>Learn</button>
            </CardContainer>
          </Card>

          <Card>
            <img src="/icons/linux.png" alt="" />
            <CardContainer>
              <h1>
                <b>Linux</b>
              </h1>
              <button>Learn</button>
            </CardContainer>
          </Card>
        </CardSection>
      </FeaturedSection>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
`;

const FeaturedSection = styled.div``;

const FeaturedTitle = styled.h1`
  font-weight: 600;
  margin-left: 25%;

  h1 {
    font-size: 35px;
    font-weight: bold;
  }

  p {
    color: #676767;
  }
`;

const CardSection = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 25%;
  margin-right: 25%;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 30px;

  @media (max-width: 1200px) {
    margin-left: 20%;
    margin-right: 20%;
  }

  @media (max-width: 1000px) {
    margin-left: 10%;
    margin-right: 10%;
  }

  @media (max-width: 850px) {
    margin-left: 5%;
    margin-right: 5%;
  }
`;

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  text-align: center;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 10px;
  padding: 16px 16px;

  h1 {
    font-size: 19px;
  }

  p {
    color: #676767;
    font-weight: 600;
    font-size: 14px;
    margin-top: 8px;
    margin-bottom: 4px;
  }

  button {
    margin-top: 5px;
    background-color: #2977c9;
    border-color: #2977c9;
    border-radius: 12px;
    color: white;
    font-weight: 600;
    font-size: 16px;
    padding: 2px 10px;

    &:hover {
      background-color: #015cb2;
    }
  }

  &:hover {
    box-shadow: 0 32px 32px 0 rgba(0, 0, 0, 0.2);
  }

  img {
    width: 96px;
  }
`;

const CardContainer = styled.div`
  padding: 2px 16px;
`;

export default Home;
