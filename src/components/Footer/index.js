import React from "react";
import {
  FooterWrapper,
  FooterContainer,
  FooterCopyright,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterCopyright>
          &copy; 2022 all rights reserved | Environment: {process.env.NODE_ENV}
        </FooterCopyright>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
