import styled from "styled-components";
import React from "react";
import PrivateRoute from "./../../auth/PrivateRoute";
import firebase from "./../../configs/firebase-config";

// icons
import { IoHomeSharp } from "react-icons/io5";
import { FiBookOpen } from "react-icons/fi";
import { BsFillPeopleFill } from "react-icons/bs";

const Navbar = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/">SOME1</a>
        </Logo>
        <Nav>
          <NavListWrap>
            <NavList>
              <a href="/">
                <div>
                  <IoHomeSharp size={20} />
                </div>
                <span>Home</span>
              </a>
            </NavList>

            <NavList>
              <a href="/learn">
                <div>
                  <FiBookOpen size={20} />
                </div>
                <span>Learn</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <div>
                  <BsFillPeopleFill size={20} />
                </div>
                <span>Posts</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/icons/navbar/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/icons/navbar/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
            </NavList>

            <User>
              {PrivateRoute ? (
                <a>
                  <img src="/icons/navbar/user.svg" alt />
                  <span>Me</span>
                  <img src="/icons/navbar/down-icon.svg" alt="" />
                </a>
              ) : (
                <a>
                  <span>No</span>
                </a>
              )}

              <SignOut>
                <a>Sign Out</a>
              </SignOut>
            </User>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: #333333;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 25px;
  color: white;

  a {
    text-decoration: none;
    font-size: 30px;
    font-family: Source Code Pro, monospace;
    font-weight: 600;

    &:hover {
      color: #d4d3d3;
    }
  }
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;

const SearchIcon = styled.div`
  width: 60px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 1px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: white;
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 42px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: white;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
    div {
      color: white;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: #d4d3d3;
      }
      div {
        color: #d4d3d3;
      }
    }
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
`;

const User = styled(NavList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }
  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  span {
    display: flex;
    align-items: center;
  }
  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;

export default Navbar;
