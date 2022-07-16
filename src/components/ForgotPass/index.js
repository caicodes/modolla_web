import React from "react";
import { Button } from "react-scroll";
import {
  ForgotPassWrapper,
  ForgotPassContainer,
  ForgotPassForm,
  ForgotPassFormH1,
  ForgotPassLabel,
  ForgotPassInput,
  ForgotPassCheckbox,
  ForgotPassButton,
  ForgotPassword,
  ForgotPassActions,
  BackToHomeLink,
  ArrowLeft,
  BackToSignIn,
} from "./ForgotPassElements";
const ForgotPass = () => {
  return (
    <ForgotPassWrapper>
      <ForgotPassContainer>
        <BackToHomeLink to="/">
          <ArrowLeft />
          Back to Home
        </BackToHomeLink>
        <ForgotPassForm>
          <ForgotPassFormH1>Forgot Password</ForgotPassFormH1>
          <ForgotPassLabel htmlFor="uname">Username</ForgotPassLabel>
          <ForgotPassInput
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />
          <ForgotPassLabel htmlFor="psw">Password </ForgotPassLabel>
          <ForgotPassInput
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          <ForgotPassLabel>
            <ForgotPassInput type="checkbox" name="remember" /> Remember me
          </ForgotPassLabel>
          <ForgotPassActions>
            <ForgotPassButton>Sign In</ForgotPassButton>
            <BackToSignIn to="/signin">Back To Sign In</BackToSignIn>
          </ForgotPassActions>
        </ForgotPassForm>
      </ForgotPassContainer>
    </ForgotPassWrapper>
  );
};

export default ForgotPass;
