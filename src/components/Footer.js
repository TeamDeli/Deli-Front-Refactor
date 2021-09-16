import React from "react";
import Styled from "styled-components";
const FooterWrap = Styled.div`
    text-align: center;
    padding: 3px;
    background-color: Ivory;
    color: DarkGray;
`;

const Footer = () => {
  return (
    <FooterWrap>
      <p>
        Author: Hege Refsnes
        <a href="mailto:hege@example.com">hege@example.com</a>
      </p>
    </FooterWrap>
  );
};

export default Footer;
