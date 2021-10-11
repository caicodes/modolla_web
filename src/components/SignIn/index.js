import React from "react";
import { Button } from "react-scroll";
import {
  SignInWrapper,
  SignInContainer,
  SignInForm,
  SignInFormH1,
  SignInLabel,
  SignInInput,
  SignInCheckbox,
  SignInButton,
  ForgotPassword,
  SignInActions,
  BackToHomeLink,
  ArrowLeft
} from "./SignInElements";
const SignIn = () => {
  return (
    <SignInWrapper>
      <SignInContainer>
        <BackToHomeLink to="/">
          <ArrowLeft />
          Back to Home
        </BackToHomeLink>
        <SignInForm>
          <SignInFormH1>Sign In</SignInFormH1>
          <SignInLabel for="uname">Username</SignInLabel>
          <SignInInput
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />
          <SignInLabel for="psw">Password </SignInLabel>
          <SignInInput
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          <SignInLabel>
            <SignInInput type="checkbox" name="remember" /> Remember me
          </SignInLabel>
          <SignInActions>
            <SignInButton>Sign In</SignInButton>
            <ForgotPassword to="/">Forgot Password?</ForgotPassword>
          </SignInActions>
        </SignInForm>
      </SignInContainer>
    </SignInWrapper>
  );
};

export default SignIn;
