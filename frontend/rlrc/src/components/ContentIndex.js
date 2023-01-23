import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styled, { keyframes } from "styled-components";
import back from "../static/back.png";

function ContentIndex({ history }) {
  const navigate = useNavigate();
  return (
    <Container>
      <BackButton
        onClick={() => {
          navigate(-1);
        }}
      >
        <img
          src={back}
          style={{ height: "1.8vw", width: "2vw", color: "black" }}
        ></img>
      </BackButton>
      <ContentTable>
        <TableHeader>
          <p style={{ whiteSpace: "nowrap" }}>ABOUT RLRC</p>
        </TableHeader>
        <TableHeader>
          <p style={{ whiteSpace: "nowrap" }}>RESEARCH</p>
        </TableHeader>
        <TableHeader>
          <p style={{ whiteSpace: "nowrap" }}>OUTCOMES</p>
        </TableHeader>
        <TableHeader>
          <p style={{ whiteSpace: "nowrap" }}>NEW & NOTICE</p>
        </TableHeader>
        <TableRow>
          <TableData>
            <StyledLink smooth to="/AboutRLRC#vision_mission">
              Vision & Mission
            </StyledLink>
          </TableData>
          <TableData>
            <StyledLink smooth to="/Research#key_project">
              Research Group
            </StyledLink>
          </TableData>
        </TableRow>
        <TableRow>
          <TableData>
            <StyledLink smooth to="/AboutRLRC#material">
              Key Projects
            </StyledLink>
          </TableData>
          <TableData>
            <StyledLink smooth to="/Research#field">
              Researcher
            </StyledLink>
          </TableData>
        </TableRow>
        <TableRow>
          <TableData>
            <StyledLink smooth to="/AboutRLRC#partners">
              Cooperation
            </StyledLink>
          </TableData>
        </TableRow>
      </ContentTable>
      <AdminButton>
        <AdminLink to="/UserLogin">관리자</AdminLink>
      </AdminButton>
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
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  /* UI Properties */
  background: #000000 0% 0% no-repeat padding-box;
`;

const ContentTable = styled.table`
  position: relative;
  width: 80%;
  left: 30px;
  text-align: center;
  border-spacing: 50px;
`;
const TableRow = styled.tr`
  text-align: center;
  width: auto;
`;
const TableData = styled.td`
  text-align: center;
  width: auto;
  font: normal normal 1.8vw sans-serif;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;
const TableHeader = styled.th`
  /* UI Properties */
  text-align: center;
  font: normal normal 900 3vw sans-serif;
  color: #ffffff;
  opacity: 1;
`;
const BackButton = styled.button`
  position: absolute;
  top: 135px;
  left: 80px;
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

const AdminButton = styled.div`
  position: relative;
  top: 35%;
  right: 10%;
  width: 9vw;
  height: 3.8vw;
  background: #464646;
  border: 1px solid #464646;
  border-radius: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
`;
const AdminLink = styled((props) => <Link {...props} />)`
  text-align: center;
  font: normal normal bold 21px/24px sans-serif;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  white-space: nowrap;
  text-decoration: none;
  &:hover {
    color: #447bf7;
  }
`;

export default ContentIndex;
