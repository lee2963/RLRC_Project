import React, { useState } from "react";
import styled from "styled-components";
import leftArrow from "../static/leftArrow.png";
import righttArrow from "../static/rightArrow.png";
function Pagination(props) {
  const numPages = props.total;
  const [currPage, setCurrPage] = useState(props.page);
  let firstNum = currPage - (currPage % 5) + 1;
  let lastNum = currPage - (currPage % 5) + 5;
  let slicePage = numPages < 5 ? numPages : 5;
  let remainPage = numPages % 5;
  return (
    <>
      <Nav>
        <Button
          onClick={() => {
            props.setPage(props.page - 1);
            setCurrPage(props.page - 2);
          }}
          style={{
            border: "none",
          }}
          disabled={props.page === 1}
        >
          <img src={leftArrow} style={{ width: "7px", height: "14px" }}></img>
        </Button>
        <Button
          onClick={() => props.setPage(firstNum)}
          aria-current={props.page === firstNum ? "page" : null}
        >
          {firstNum}
        </Button>
        {Array(currPage - 5 >= 0 ? remainPage - 1 : slicePage - 1)
          .fill()
          .map((_, i) => {
            if (i <= 2) {
              return (
                <Button
                  key={i + 1}
                  onClick={() => props.setPage(firstNum + i + 1)}
                  aria-current={props.page === firstNum + i + 1 ? "page" : null}
                >
                  {firstNum + 1 + i}
                </Button>
              );
            } else if (i >= 3) {
              return (
                <Button
                  key={i + 1}
                  onClick={() => props.setPage(lastNum)}
                  aria-current={props.page === lastNum ? "page" : null}
                >
                  {lastNum}
                </Button>
              );
            }
          })}
        <Button
          onClick={() => {
            props.setPage(props.page + 1);
            setCurrPage(props.page);
          }}
          style={{
            border: "none",
          }}
          disabled={props.page === numPages}
        >
          <img src={righttArrow} style={{ width: "7px", height: "14px" }}></img>
        </Button>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 16px;
  height: 100px;
`;

const Button = styled.button`
  border: none;
  padding: 8px;
  margin: 0;
  width: 53px;
  height: 53px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #bababa;
  font: normal normal normal 22px/25px sans-serif;
  color: #aaaaaa;
  opacity: 1;
  opacity: 1;
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: #447bf7;
    font-weight: bold;
    cursor: revert;
    transform: revert;
    color: white;
  }
`;

export default Pagination;
