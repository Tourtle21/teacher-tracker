import React from "react";
import * as Styled from "./styles/StyledHeader";

function Header() {
  return (
    <Styled.Header>
      <Styled.Wrapper>
        <a href="/">
          <h2>Teacher Tracker</h2>
        </a>
        <Styled.Nav>
          <a href="/classes">Classes</a>
          <a href="#">Teachers</a>
          <a href="#">Students</a>
        </Styled.Nav>
      </Styled.Wrapper>
    </Styled.Header>
  );
}

export default Header;
