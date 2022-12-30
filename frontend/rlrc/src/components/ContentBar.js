import React from "react";
import styled from "styled-components";
import sidebarIcon from "../static/sidebarIcon.png";
function ContentBar(props) {
  const { setShow } = props;
  return (
    <SidebarButton
      onClick={() => {
        setShow(true);
      }}
    >
      <img
        src={sidebarIcon}
        style={{ height: "21px", width: "25px", color: "black" }}
      ></img>
    </SidebarButton>
  );
}

export default ContentBar;

const SidebarButton = styled.button`
  position: absolute;
  top: 55px;
  background-color: transparent;
  border-width: 0px;
  left: 1700px;
`;
