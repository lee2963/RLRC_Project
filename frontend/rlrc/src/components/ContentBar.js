import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import sidebarIcon from "../static/sidebarIcon.png";
function ContentBar() {
  return (
    <ButtonContainer>
      <SidebarButton to="/SiteMap">
        <img src={sidebarIcon} style={{ height: "21px", width: "25px" }}></img>
      </SidebarButton>
    </ButtonContainer>
  );
}

export default ContentBar;

const ButtonContainer = styled.div`
  position: relative;
  float: right;
  right: 160px;
  top: -80px;
  background-color: transparent;

  z-index: 1;
`;
const SidebarButton = styled((props) => <Link {...props} />)`
  background-color: transparent;
  border: none;
`;
