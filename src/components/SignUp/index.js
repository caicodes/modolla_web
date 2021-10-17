import React from "react";
import { Button } from "react-scroll";
import {
  SignUpWrapper,
  SignUpContainer,
  SignUpForm,
  SignUpFormH1,
  SignUpLabel,
  SignUpInput,
  SignUpButton,
  SignUpActions,
  BackToHomeLink,
  ArrowLeft,
  BackToSignIn,
} from "./SignUpElements";
const SignUp = () => {
  return (
    <SignUpWrapper>
      <SignUpContainer>
        <BackToHomeLink to="/">
          <ArrowLeft />
          Back to Home
        </BackToHomeLink>
        <SignUpForm>
          <SignUpFormH1>Sign Up</SignUpFormH1>
          <SignUpLabel htmlFor="uname">Username</SignUpLabel>
          <SignUpInput
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />
          <SignUpLabel htmlFor="psw">Password </SignUpLabel>
          <SignUpInput
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          <SignUpLabel>
            <SignUpInput type="checkbox" name="remember" /> Remember me
          </SignUpLabel>
          <SignUpActions>
            <SignUpButton>Sign In</SignUpButton>
            <BackToSignIn to="/signin">Back To Sign In</BackToSignIn>
          </SignUpActions>
        </SignUpForm>
      </SignUpContainer>
    </SignUpWrapper>
  );
};

export default SignUp;
