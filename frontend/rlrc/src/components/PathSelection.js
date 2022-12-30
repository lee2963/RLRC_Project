import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import pathSelectionImage from "../static/images/pathSelection.png";

import rightArrow from "../static/rightArrowWhite.png";
function PathSelection() {
  const navigate = useNavigate();
  return (
    <Container>
      <PathContainer src={pathSelectionImage}>
        <ButtonContainer>
          <Button
            style={{ width: "358px" }}
            onClick={() => {
              navigate("/ResearchOutcomesAdmin");
            }}
          >
            <Text>RESEARCH OUTCOMES</Text>
            <img
              src={rightArrow}
              style={{
                position: "relative",
                top: "36px",
                left: "2.5em",
                width: "7px",
                height: "14px",
              }}
            ></img>
          </Button>
          <Button
            style={{ width: "322px" }}
            onClick={() => {
              navigate("/NewNoticeAdmin");
            }}
          >
            <Text style={{ width: "169px", left: "61px" }}>NEWS & NOTICE</Text>
            <img
              src={rightArrow}
              style={{
                position: "relative",
                top: "36px",
                left: "3.5em",
                width: "7px",
                height: "14px",
              }}
            ></img>
          </Button>
        </ButtonContainer>
      </PathContainer>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: -2px;
  left: 0px;
  width: 1920px;
  height: 1150px;
  background: #f0f0f0 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PathContainer = styled.div`
  position: absolute;
  top: 216px;
  left: 365px;
  width: 1190px;
  height: 738px;
  /* background: #2680eb 0% 0% no-repeat padding-box; */
  background-image: url(${(props) => props.src});
  opacity: 1;
`;
const ButtonContainer = styled.div`
  position: relative;
  top: 552px;
  left: 353px;
  width: 725px;
  height: 86px;
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  width: 322px;
  height: 86px;
  background: #64a3eb 0% 0% no-repeat padding-box;
  opacity: 0.34;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border: none;
  font: normal normal 23px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 1;
  display: flex;
  flex-direction: row;
`;
const Text = styled.span`
  position: relative;
  top: 31px;
  left: 47px;
  width: 243px;
  height: 27px;
  font: var(--unnamed-font-style-normal) normal 23px
    var(--unnamed-font-family-roboto);
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 1;
  font-weight: bold;
`;
export default PathSelection;
