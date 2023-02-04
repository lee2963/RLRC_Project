import React, { useEffect, useState } from "react";
import styled from "styled-components";
import leftArrow from "../static/leftArrow.png";
import righttArrow from "../static/rightArrow.png";
const PAGES_PER_LIST = 5;
function Pagination({ total, page, setPage }) {
  const [showing, setShowing] = useState({
    start: 1,
    end: PAGES_PER_LIST,
  });
  const changePageNumbersBackward = () => {
    page > 1 && setShowing((prev) => arrowHandler(prev, -1, total));
  };
  const changePageNumbersForward = () => {
    page < total && setShowing((prev) => arrowHandler(prev, 1, total));
  };
  const arrowHandler = (prev, sign, total) => {
    const nextIndex = prev.end + PAGES_PER_LIST;
    let res;
    console.log("prev", prev.end, prev.start);
    if (sign === 1) {
      res = nextIndex > total ? total : nextIndex;
    } else if (sign === -1) {
      res =
        prev.end - prev.start < 4
          ? prev.start + 4 - PAGES_PER_LIST
          : prev.end - PAGES_PER_LIST;
    }
    return { ...prev, start: prev.start + PAGES_PER_LIST * sign, end: res };
  };
  useEffect(() => {
    const lessThanFive = total <= PAGES_PER_LIST;
    lessThanFive
      ? setShowing((prev) => ({ ...prev, start: 1, end: total }))
      : setShowing((prev) => ({ ...prev, start: 1, end: PAGES_PER_LIST }));
  }, [total]);

  useEffect(() => {
    setPage(showing.start);
  }, [showing, setPage]);

  const pages = Array.from(
    { length: showing.end + 1 - showing.start },
    (_, i) => {
      return showing.start + i;
    }
  );
  return (
    <>
      <Nav>
        <Button
          onClick={() => {
            changePageNumbersBackward();
          }}
          style={{
            border: "none",
          }}
          disabled={page === 1}
        >
          <img src={leftArrow} style={{ width: "7px", height: "14px" }}></img>
        </Button>
        {/* <Button
          onClick={() => props.setPage(firstNum)}
          aria-current={props.page === firstNum ? "page" : null}
        >
          {firstNum}
        </Button> */}
        {pages.map((content, i) => {
          return (
            <Button
              key={i + 1}
              onClick={() => {
                setPage(content);
                console.log(showing);
              }}
              isActive={content === page}
            >
              {content}
            </Button>
          );
        })}
        <Button
          onClick={() => {
            changePageNumbersForward();
          }}
          style={{
            border: "none",
          }}
          disabled={showing.end === total}
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
  background-color: ${({ isActive }) => (isActive ? "#447bfb" : "#ffffff")};
  border: 1px solid #bababa;
  font: normal normal normal 22px/25px sans-serif;
  color: ${({ isActive }) => (isActive ? "#ffffff" : "#aaaaaa")};
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
