import styled from "styled-components";
import NavbarComponent from "../components/Navbar/NavbarComponent";
import ReactTypingEffect from "react-typing-effect";

const Home = (props) => {
  return (
    <Container>
      <NavbarComponent />
      <Section>
        <Hero>
          <h1>
            Learn to{" "}
            <ReactTypingEffect
              speed={150}
              eraseSpeed={150}
              eraseDelay={350}
              typingDelay={100}
              text={["Program", "Hack", "Think."]}
              cursorRenderer={(cursor) => <h1>{cursor}</h1>}
              displayTextRenderer={(text, i) => {
                return (
                  <h1>
                    {text.split("").map((char, i) => {
                      const key = `${i}`;
                      return (
                        <span
                          key={key}
                          style={{ color: "black", fontWeight: "normal" }}
                        >
                          {char}
                        </span>
                      );
                    })}
                  </h1>
                );
              }}
            />
          </h1>
          <img src="/images/coding.png" alt="" />
        </Hero>
        <Form>
          <SignInButton>
            Sign in with Google <img src="/icons/google.png" alt="" />
          </SignInButton>
          <SignInButton>
            Sign in with Github <img src="/icons/github.png" alt="" />
          </SignInButton>
        </Form>
      </Section>

      <FeaturedSection>
        <FeaturedTitle>
          Learn{" "}
          <ReactTypingEffect
            speed={150}
            eraseSpeed={150}
            eraseDelay={350}
            typingDelay={100}
            text={[
              "Python",
              "HTML & CSS",
              "Metasploit",
              "Web Exploitation",
              "React",
              "React Native",
              "C++",
              "JavaScript",
              "Linux",
            ]}
            cursorRenderer={(cursor) => <h1>{cursor}</h1>}
            displayTextRenderer={(text, i) => {
              return (
                <h1>
                  {text.split("").map((char, i) => {
                    const key = `${i}`;
                    return (
                      <span key={key} style={{ color: "black" }}>
                        {char}
                      </span>
                    );
                  })}
                </h1>
              );
            }}
          />
        </FeaturedTitle>

        <CardSection>
          <Card>
            <img src="/icons/python.png" alt="" />
            <CardContainer>
              <h1>
                <b>Python</b>
              </h1>
              <button>Learn</button>
            </CardContainer>
          </Card>

          <Card>
            <img src="/icons/htmlcss.png" alt="" />
            <CardContainer>
              <h1>
                <b>HTML & CSS</b>
              </h1>
              <button>Learn</button>
            </CardContainer>
          </Card>

          <Card>
            <img src="/icons/metasploit.png" alt="" />
            <CardContainer>
              <h1>
                <b>Metasploit</b>
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
            <img src="/icons/react.png" alt="" />
            <CardContainer>
              <h1>
                <b>React</b>
              </h1>
              <button>Learn</button>
            </CardContainer>
          </Card>

          <Card>
            <img src="/icons/react.png" alt="" />
            <CardContainer>
              <h1>
                <b>React Native</b>
              </h1>
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
            <img src="/icons/javascript.png" alt="" />
            <CardContainer>
              <h1>
                <b>JavaScript</b>
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

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 12px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;

const Section = styled.a`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 25px;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    /*z-index: -1;*/
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;

    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 400px;
  @media (max-width: 768px) {
    margin-top: 20px;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
  }
`;

const SignInButton = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0%);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167px;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 10px;

  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }

  img {
    height: 20px;
    margin-left: 6px;
  }

  @media (max-width: 768px) {
  }
`;

const FeaturedSection = styled.div``;

const FeaturedTitle = styled.h1`
  text-align: center;
  font-size: 35px;
  font-weight: 600;
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
