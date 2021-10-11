import React from "react";
import {
  FooterWrapper,
  FooterContainer,
  FooterCopyright
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterCopyright>&copy; 2021 all rights reserved</FooterCopyright>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
