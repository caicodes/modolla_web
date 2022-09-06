import React from "react";
import {
  FooterWrapper,
  FooterContainer,
  FooterContent,
  FooterCopyright,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterContent>
          <img src="/mstile-150x150.png" alt="modolla wallet" />
          <div>Virtual Banking Made Easy</div>
        </FooterContent>
        <FooterCopyright>
          &copy; 2022 all rights reserved | Environment: {process.env.NODE_ENV}
        </FooterCopyright>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
