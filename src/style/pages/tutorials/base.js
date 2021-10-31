import styled from "styled-components";

export const Content = styled.div`
  color: black;
  margin-right: 20%;
  margin-left: 20%;
  margin-top: 5%;

  @media (max-width: 1500px) {
    margin-right: 10%;
    margin-left: 10%;
    margin-top: 10%;
  }
`;

export const Title = styled.h1`
  color: black;
  font-size: 35px;
  margin-top: 5%;
`;

export const Author = styled.div`
  color: black;
  margin-top: 1%;
  margin-bottom: 10px;
  font-size: 18px;

  a {
    color: red;
    text-decoration: none;

    &:hover {
      color: #c13333;
      text-decoration: underline;
    }
  }
`;

export const BackButton = styled.button`
  background-color: rgb(231, 64, 64);
  border: rgb(231, 64, 64);
  border-radius: 6px;
  padding: 4px 20px;
  font-weight: normal;
  font-size: 17px;

  &:hover {
    background-color: rgb(189, 24, 24);
  }
`;

export const NextButton = styled.button`
  background-color: rgb(0, 233, 0);
  border: rgb(0, 233, 0);
  border-radius: 6px;
  padding: 4px 20px;
  font-weight: normal;
  font-size: 17px;

  &:hover {
    background-color: rgb(0, 173, 0);
  }

  a {
    text-decoration: inherit;
  }
`;

export const MenuButton = styled.button`
  background-color: rgb(44, 180, 166);
  border: rgb(44, 180, 166);
  border-radius: 6px;
  padding: 4px 15px;
  font-weight: normal;
  font-size: 17px;

  &:hover {
    background-color: rgb(34, 151, 140);
  }

  a {
    text-decoration: inherit;
  }
`;

export const HR = styled.hr`
  color: black;
`;

export const Text = styled.p`
  font-family: "Segoe UI", Arial, sans-serif;
  font-weight: lighter;
  font-size: 20px;
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const BigTitle = styled.h1`
  color: black;
  font-family: "Segoe UI", Arial, sans-serif;
  font-size: 25px;
  font-weight: normal;
`;

export const ListContent = styled.li`
  margin-left: 1%;
  margin-top: 0px;
  margin-bottom: 0px;
`;
