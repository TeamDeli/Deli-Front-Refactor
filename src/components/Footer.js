import React from "react";
import Styled from "styled-components";
const FooterWrap = Styled.div`
    display: block;
    text-align: center;
    padding: 30px;
    background-color: Ivory;
    font-size: 18px;
    height: 140px;
`;

const Footer = () => {
  return (
    <FooterWrap>
      <p>© 2021 SOOKFLIX 📽</p>
    </FooterWrap>
  );
};

export default Footer;
