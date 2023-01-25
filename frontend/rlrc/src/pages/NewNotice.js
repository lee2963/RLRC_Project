import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ContentBar from "../components/ContentBar";
import ContentIndex from "../components/ContentIndex";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import styles from "../styles/newNotice.module.css";

import styled from "styled-components";
import SearchIcon from "../static/search.png";

export default function NewNotice() {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);
  const [curContent, setCurContent] = useState("news");
  const [newsPosts, setNewsPosts] = useState(null);
  const [noticePosts, setNoticePosts] = useState(null);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [showButton, setShowButton] = useState(
    curContent === "news"
      ? newsPosts
        ? Array(newsPosts.numberOfElements).fill(false)
        : []
      : noticePosts
        ? Array(noticePosts.number).fill(false)
        : []
  );


  const handleYearSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `/${curContent}/search/title?word=${encodeURIComponent(searchText)}`
      );
      curContent === "news"
        ? setNewsPosts(response.data)
        : setNoticePosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `/${curContent}/search/title?word=${encodeURIComponent(searchText)}`
      );
      curContent === "news"
        ? setNewsPosts(response.data)
        : setNoticePosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = (id) => {
    navigate("/Detail", { state: [id, curContent] });
  };
  const handleEnter = (id) => {
    if (curContent === "news") {
      let arr = Array(newsPosts.numberOfElements).fill(false);
      arr[newsPosts.numberOfElements - id] =
        !arr[newsPosts.numberOfElements - id];
      setShowButton(arr);
    } else {
      let arr = Array(noticePosts.numberOfElements).fill(false);
      arr[noticePosts.numberOfElements - id] =
        !arr[noticePosts.numberOfElements - id];
      setShowButton(arr);
    }
  };
  const handleLeave = (id) => {
    if (curContent === "news") {
      setShowButton(Array(newsPosts.numberOfElements).fill(false));
    } else {
      setShowButton(Array(noticePosts.numberOfElements).fill(false));
    }
  };
  const getNewNotice = async (content) => {
    try {
      const response = await axios.get(
        `/${content}/search/all?page=${page - 1}`
      );
      content === "news"
        ? setNewsPosts(response.data)
        : setNoticePosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const changeSearch = (event) => {
    setSearchText(event.target.value);
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      alert(e.key);
      handleSearch(e);
    }
  };
  useEffect(() => {
    // 페이지 요청
    getNewNotice(curContent);
  }, [curContent, page]);

  return (
    <>
      <Navbar />
      <ContentBar setShow={setShowContent} />
      {showContent && (
        <ContentIndex setShow={setShowContent} isShow={showContent} />
      )}
      <main className={styles.main}>
        <SelectionBarCotainer>
          <div className={styles.selection_line_white} />
          <div className={styles.selection_line_grey} />
          <ul className={styles.selectionbar_menu}>
            <StyledLink
              to="/AboutRLRC"
              id={styles.selectbar_content}
              className="select_rlrc"
              style={{
                textDecoration: "none",
                color: "rgba(221, 221, 221, 0.674)",
              }}
            >
              ABOUT RLRC
            </StyledLink>
            <StyledLink
              to="/Research"
              id={styles.selectbar_content}
              className="slelect_research"
              style={{
                textDecoration: "none",
                color: "rgba(221, 221, 221, 0.674)",
              }}
            >
              RESEARCH
            </StyledLink>
            <StyledLink
              to="/ResearchOutcomes"
              id={styles.selectbar_content}
              className="select_research_outcomes"
              style={{
                textDecoration: "none",
                color: "rgba(221, 221, 221, 0.674)",
              }}
            >
              OUTCOMES
            </StyledLink>
            <StyledLink
              to="/NewNotice"
              id={styles.selectbar_content}
              className="select_new_notice"
              style={{
                textDecoration: "none",
              }}
            >
              NEW & NOTICE
            </StyledLink>
          </ul>
        </SelectionBarCotainer>
        <Title>NEWS & NOTICE</Title>
        <ButtonContainer>
          <NewsButton
            onClick={() => {
              setCurContent("news");
            }}
            content={curContent}
            id="new_notice"
          >
            NEWS
          </NewsButton>
          <NoticeButton
            onClick={() => {
              setCurContent("notice");
            }}
            content={curContent}
          >
            NOTICE
          </NoticeButton>
        </ButtonContainer>
        {curContent === "news" ? (
          <>
            <News>
              <form onSubmit={handleSearch}>
                <SearchContainer>
                  <NoticeTitle>NEWS</NoticeTitle>
                  <InputContainer>
                    <Search placeholder="검색" onChange={changeSearch} />
                    <Icon src={SearchIcon} onClick={handleSearch}></Icon>
                  </InputContainer>
                </SearchContainer>
              </form>
              <Line />
              <PaginationContainer>
                {newsPosts && (
                  <>
                    {newsPosts.content.map((ele) => (
                      <PaginationElement
                        key={ele.id}
                        onMouseEnter={() => {
                          handleEnter(ele.id);
                        }}
                        onMouseLeave={() => {
                          handleLeave(ele.id);
                        }}
                      >
                        <ContentContainer>
                          <h3
                            style={{
                              textAalign: "left",
                              font: "normal normal bold 2vw sans-serif",
                              letterSpacing: "0px",
                              color: "#447BF7",
                              opacity: 1,
                              display: "block",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              height: "auto",
                              width: "auto",
                            }}
                          >
                            {ele.title}
                          </h3>
                          <span
                            style={{
                              display: "-webkit-box",
                              textAlign: "left",
                              font: "normal normal normal 1vw sans-serif",
                              letterSpacing: "0px",
                              color: "#606060",
                              opacity: 1,
                              overflow: "hidden",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: 3,
                              textOverflow: "ellipsis",
                              lineClamp: 2,
                              height: "auto",
                            }}
                          >
                            {ele.content}
                          </span>
                          <p
                            style={{
                              position: "relative",
                              top: "5vw",
                              font: "normal normal normal 1vw sans-serif",
                              letterSpacing: "0px",
                              color: "#969696",
                              opacity: 1,
                            }}
                          >
                            {ele.dateTime}
                          </p>
                        </ContentContainer>
                        {showButton[newsPosts.content.length - ele.id] && (
                          <DetailButton
                            onClick={() => {
                              handleClick(ele.id);
                            }}
                          >
                            <p
                              style={{
                                color: "white",
                                fontSize: "1vw",
                                fontWeight: "bold",
                              }}
                            >
                              +
                            </p>
                          </DetailButton>
                        )}
                      </PaginationElement>
                    ))}
                  </>
                )}
              </PaginationContainer>
            </News>
            {newsPosts && (
              <Paginate>
                <Pagination
                  total={newsPosts.totalPages}
                  page={page}
                  setPage={setPage}
                />
              </Paginate>
            )}
          </>
        ) : (
          <>
            <Notice>
              <SearchContainer>
                <NoticeTitle>NOTICE</NoticeTitle>
                <InputContainer>
                  <Search placeholder="검색" onChange={changeSearch} />
                  <Icon src={SearchIcon} onClick={handleSearch}></Icon>
                </InputContainer>
              </SearchContainer>
              <Line />
              <PaginationContainer>
                {noticePosts && (
                  <>
                    {noticePosts.content.map((ele) => (
                      <PaginationElement
                        key={ele.id}
                        onMouseEnter={() => {
                          handleEnter(ele.id);
                        }}
                        onMouseLeave={() => {
                          handleLeave(ele.id);
                        }}
                      >
                        <ContentContainer>
                          <h3
                            style={{
                              textAalign: "left",
                              font: "normal normal bold 2vw sans-serif",
                              letterSpacing: "0px",
                              color: "#447BF7",
                              opacity: 1,
                              display: "block",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              height: "auto",
                              width: "auto",
                            }}
                          >
                            {ele.title}
                          </h3>
                          <span
                            style={{
                              display: "-webkit-box",
                              textAlign: "left",
                              font: "normal normal normal 1vw sans-serif",
                              letterSpacing: "0px",
                              color: "#606060",
                              opacity: 1,
                              overflow: "hidden",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: 3,
                              maxWidth: "100%",
                              textOverflow: "ellipsis",
                              lineClamp: 2,
                              height: "auto",
                            }}
                          >
                            {ele.content}
                          </span>
                          <p
                            style={{
                              position: "relative",
                              top: "5vw",
                              font: "normal normal normal 1vw sans-serif",
                              letterSpacing: "0px",
                              color: "#969696",
                              opacity: 1,
                            }}
                          >
                            {ele.dateTime}
                          </p>
                        </ContentContainer>
                        {showButton[noticePosts.content.length - ele.id] && (
                          <DetailButton
                            onClick={() => {
                              handleClick(ele.id);
                            }}
                          >
                            <p
                              style={{
                                color: "white",
                                fontSize: "20px",
                                fontWeight: "bold",
                              }}
                            >
                              +
                            </p>
                          </DetailButton>
                        )}
                      </PaginationElement>
                    ))}
                  </>
                )}
              </PaginationContainer>
            </Notice>
            {noticePosts && (
              <Paginate>
                <Pagination
                  total={noticePosts.totalPages}
                  page={page}
                  setPage={setPage}
                />
              </Paginate>
            )}
          </>
        )}
      </main>
    </>
  );
}
const SelectionBarCotainer = styled.div`
  position: absolute;
  float: left;
  top: 250px;
  left: 200px;
  width: auto;
  height: auto;
`;
const Title = styled.p`
  position: absolute;
  top: 65%;
  left: 200px;
  width: auto;
  text-align: left;
  font: normal normal bold 4vw sans-serif;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 1;
`;
const ButtonContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const NewsButton = styled.button`
  position: relative;
  left: 0px;
  width: 50%;
  height: 13vw;
  background: 0% 0% no-repeat padding-box;
  background-color: ${(props) =>
    props.content === "news" ? "#ffffff" : "#447bfb"};
  opacity: 1;
  font: normal normal bold 2vw sans-serif;
  letter-spacing: 0px;
  color: ${(props) => (props.content === "news" ? "#447bfb" : "#ffffff")};
  text-transform: uppercase;
  opacity: 1;
  text-align: center;
  border-style: none;
`;
const NoticeButton = styled.button`
  position: relative;
  width: 50%;
  height: 13vw;
  background: 0% 0% no-repeat padding-box;
  background-color: ${(props) =>
    props.content === "news" ? "#447bfb" : "#ffffff"};
  opacity: 1;
  font: normal normal bold 2vw sans-serif;
  letter-spacing: 0px;
  color: ${(props) => (props.content === "notice" ? "#447bfb" : "#ffffff")};
  text-transform: uppercase;
  opacity: 1;
  text-align: center;
  border-style: none;
`;
const News = styled.div`
  position: relative;
  height: auto;
`;
const Notice = styled.div`
  position: relative;
`;
const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  top: 135px;
`;
const InputContainer = styled.div`
  display: inline-flex;
`;
const NoticeTitle = styled.p`
  position: relative;
  width: calc(97 / 1920 * 100%);
  height: auto;
  text-align: center;
  font: normal normal bold 28px/50px sans-serif;
  letter-spacing: 0px;
  color: #6a6a6a;
  margin: 0;
  opacity: 1;
`;

const Search = styled.input`
  position: relative;
  float: right;
  width: 30vw;
  background: #d3d3d35c 0% 0% no-repeat padding-box;
  opacity: 1;
  border: none;
  padding-left: 20px;
`;
const Icon = styled.img`
  position: relative;
  float: left;
  top: 25%;
  right: 45px;
  width: 25px;
  height: 25px;
`;

const Line = styled.div`
  position: relative;
  top: 200px;
  width: 99.9%;
  border: 1px solid #447bf7;
  background-color: #447bf7;
  opacity: 1;
`;

const PaginationContainer = styled.div`
  position: relative;
  display: flex;
  top: 300px;
  left: 4.5%;
  padding: 10px;
  width: 90%;
  height: auto;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px 3vw;
  justify-content: center;
  align-content: space-around;
`;
const ContentContainer = styled.div`
  height: auto;
  width: auto;
  padding: 70px 45px 64px 42px;
`;
const PaginationElement = styled.article`
  position: relative;
  width: 25vw;
  height: 25vw;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 5px 5px 22px #00000029;
  opacity: 1;
  justify-content: center;
  text-align: left;
`;
const DetailButton = styled.button`
  position: absolute;
  top: 21vw;
  left: 21vw;
  width: 4vw;
  height: 4vw;
  background: #447bf7;
  opacity: 1;
  border: none;
`;
const Paginate = styled.div`
  position: relative;
  top: calc(135px * 3);
`;

const StyledLink = styled((props) => <Link {...props} />)`
  &:link {
    color: white;
  }
  text-decoration: none;
`;
