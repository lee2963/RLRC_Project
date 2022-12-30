import React from "react";
import styled, { keyframes } from "styled-components";
import { HashLink } from "react-router-hash-link";
import back from "../static/back.png";

function ContentIndex(props) {
  const setShow = props.setShow;
  const isShow = props.isShow;
  return (
    <Container isShow={isShow}>
      <BackButton
        onClick={() => {
          setShow(false);
        }}
      >
        <img
          src={back}
          style={{ height: "21px", width: "25px", color: "black" }}
        ></img>
      </BackButton>
      <ContentTable>
        <TableHeader>ABOUT RLRC</TableHeader>
        <TableHeader>RESEARCH</TableHeader>
        <TableHeader>NEW & NOTICE</TableHeader>
        <tr>
          <TableData>
            <StyledLink
              smooth
              to="/AboutRLRC#vision_mission"
              onClick={() => {
                setShow(false);
              }}
            >
              Vision & Mission
            </StyledLink>
          </TableData>
          <TableData>
            <StyledLink
              smooth
              to="/Research#key_project"
              onClick={() => {
                setShow(false);
              }}
            >
              Key Project
            </StyledLink>
          </TableData>
          <TableData>
            <StyledLink
              smooth
              to="/NewNotice#new_notice"
              onClick={() => {
                setShow(false);
              }}
            >
              NEWS
            </StyledLink>
          </TableData>
        </tr>
        <tr>
          <TableData>
            <StyledLink
              smooth
              to="/AboutRLRC#material"
              onClick={() => {
                setShow(false);
              }}
            >
              소재그룹
            </StyledLink>
          </TableData>
          <TableData>
            <StyledLink
              smooth
              to="/Research#field"
              onClick={() => {
                setShow(false);
              }}
            >
              연구분야
            </StyledLink>
          </TableData>
          <TableData>
            <StyledLink
              smooth
              to="/NewNotice#new_notice"
              onClick={() => {
                setShow(false);
              }}
            >
              NOTICE
            </StyledLink>
          </TableData>
        </tr>
        <tr>
          <TableData>
            <StyledLink
              smooth
              to="/AboutRLRC#part"
              onClick={() => {
                setShow(false);
              }}
            >
              부품그룹
            </StyledLink>
          </TableData>
          <TableData>
            <StyledLink
              smooth
              to="/ResearchOutcomes"
              onClick={() => {
                setShow(false);
              }}
            >
              Research Outcomes
            </StyledLink>
          </TableData>
          <TableData>
            <StyledLink
              to="/UserLogin"
              spy={true}
              smooth={true}
              onClick={() => {
                setShow(false);
              }}
            >
              관리자
            </StyledLink>
          </TableData>
        </tr>
        <tr>
          <TableData>
            <StyledLink
              to="연구그룹"
              spy={true}
              smooth={true}
              onSetActive={() => {
                setShow(false);
              }}
            >
              협력기관
            </StyledLink>
          </TableData>
        </tr>
      </ContentTable>
    </Container>
  );
}

const slideUp = keyframes`
  from{
    transform: translateY(0px);
  }
  to{
    transform: translateY(-1100px);
  }
`;
const slideDown = keyframes`
  from{
    transform: translateY(-1100px);
  }
  to{
    transform: translateY(0px);
  }
`;
const Container = styled.div`
  position: absolute;
  top: 0px;
  left: -2px;
  width: 1930px;
  height: 1100px;
  /* UI Properties */
  background: #000000 0% 0% no-repeat padding-box;
  animation: ${(props) => (props.isShow ? slideDown : slideUp)} 0.5s ease;
  z-index: 20;
`;

const ContentTable = styled.table`
  position: absolute;
  top: 238px;
  left: 388px;
  width: 1200px;
  height: 58px;
  text-align: center;
  border-spacing: 60px;
`;
const TableData = styled.td`
  text-align: center;
  font: normal normal 30px/35px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;
const TableHeader = styled.th`
  /* UI Properties */
  text-align: center;
  font: normal normal 900 50px/58px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;
const BackButton = styled.button`
  position: absolute;
  top: 128px;
  left: 193px;
  background-color: transparent;
  border-width: 0px;
`;
const StyledLink = styled((props) => <HashLink {...props} />)`
  &:hover {
    color: #447bf7;
  }
  &:link {
    color: white;
  }
  text-decoration: none;
`;

export default ContentIndex;
