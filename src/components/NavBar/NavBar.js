import React, { useState } from "react";
import {
  Nav,
  NavMenu,
  NavLink,
  Bars,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";
import SearchFeature from "./SearchFeature";
import deliLogo from "../../assets/images/deli_edited.png";
const NavBar = (props) => {
  const [updateSearchTerm, setupdateSearchTerm] = useState("");
  console.log(updateSearchTerm);
  props.setSearchTerm(updateSearchTerm);

  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={deliLogo} max-width="55%" width="100px" alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <SearchFeature setupdateSearchTerm={setupdateSearchTerm} />
          <NavLink to="/home" activeStyle>
            홈
          </NavLink>
          <NavLink to="/popular-gift" activeStyle>
            인기 선물
          </NavLink>
          <NavLink to="/addFriends" activeStyle>
            친구 찾기
          </NavLink>
          <NavLink to="/profile" activeStyle>
            프로필
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signup">Sign Up</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default NavBar;
