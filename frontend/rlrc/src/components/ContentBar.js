import React from "react";
import styled from "styled-components";
import sidebarIcon from "../static/sidebarIcon.png";
function ContentBar(props) {
  const { setShow } = props;
  return (
    <ButtonContainer>
      <SidebarButton
        onClick={() => {
          setShow(true);
        }}
      >
        <img src={sidebarIcon} style={{ height: "21px", width: "25px" }}></img>
      </SidebarButton>
    </ButtonContainer>
  );
}

export default ContentBar;

const ButtonContainer = styled.div`
  position: relative;
  float: right;
  right: 120px;
  top: -80px;
  background-color: transparent;
`;
const SidebarButton = styled.button`
  background-color: transparent;
  border: none;
`;
