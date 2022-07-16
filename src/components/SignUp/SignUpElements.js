import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

export const SignUpWrapper = styled.div`
  background: linear-gradient(to left bottom, rgb(3 191 113), rgb(5 68 50));
  min-height: 100vh;
  display: grid;
  place-content: center;
`;

export const SignUpContainer = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 4px;
  box-shadow: 1px 1px 3px 1px rgb(0 0 0 / 0.2);
  margin-bottom: 18rem;
`;
export const SignUpForm = styled.div`
  padding: 1rem;
  display: grid;
`;

export const SignUpFormH1 = styled.h1`
  margin-bottom: 1rem;
`;

export const SignUpLabel = styled.label`
  font-size: 1.2rem;
  margin: 1rem 0 0.5rem 0;
`;

export const SignUpInput = styled.input`
  padding: 1rem;
  font-size: 1.2rem;
`;

export const SignUpCheckbox = styled.input`
  margin: 2rem;
`;

export const SignUpButton = styled.button`
  border-radius: 0.25rem;
  background: #000;
  white-space: nowrap;
  padding: 0.5rem 4rem;
  color: #fff;
  font-size: 1.25rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  height: 4rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #01bf71;
  }
`;

export const BackToSignIn = styled(Link)`
  font-size: 1.2rem;
  padding: 1rem;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  margin-left: 2rem;
  &:hover {
    color: #01bf71;
  }
`;

export const SignUpActions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

export const BackToHomeLink = styled(Link)`
  position: absolute;
  top: 2rem;
  left: 2rem;
  display: flex;
  background: rgba(0, 0, 0, 0.25);
  color: #fff;
  padding: 0.75rem 2rem;
  text-decoration: none;
  border-radius: 50px;

  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #01bf71;
  }
`;

export const ArrowLeft = styled(MdArrowBack)`
  font-size: 1.25rem;
  margin-right: 0.5rem;
`;
