import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ContentBar from "../components/ContentBar";
import ContentIndex from "../components/ContentIndex";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import styles from "../styles/newNotice.module.css";
import axios from "axios";

import SearchIcon from "../static/search.png";
import styled from "styled-components";

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
    <main className={styles.main}>
      <Navbar />
      <ContentBar setShow={setShowContent} />
      {showContent && (
        <ContentIndex setShow={setShowContent} isShow={showContent} />
      )}
      <>
        <div className={styles.selectionbar}>
          <div className={styles.selection_line_white} />
          <div className={styles.selection_line_grey} />
          <ul className={styles.selectionbar_menu}>
            <StyledLink
              to="/"
              id={styles.selectbar_content}
              className="select_rlrc"
              style={{
                textDecoration: "none",
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
              }}
            >
              RESEARCH
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
        </div>
        <Title>NEWS & NOTICE</Title>
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
        {curContent === "news" ? (
          <News>
            <NoticeTitle>NEWS</NoticeTitle>
            <form onSubmit={handleSearch}>
              <Search placeholder="검색" onChange={changeSearch} />
              <Icon src={SearchIcon} onClick={handleSearch}></Icon>
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
                            font: "normal normal bold 22px/28px Roboto",
                            letterSpacing: "0px",
                            color: "#447BF7",
                            opacity: 1,
                            display: "block",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {ele.title}
                        </h3>
                        <span
                          style={{
                            display: "-webkit-box",
                            textAlign: "left",
                            font: "normal normal normal 16px/23px Roboto",
                            letterSpacing: "0px",
                            color: "#606060",
                            opacity: 1,
                            overflow: "hidden",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 3,
                            maxWidth: "100%",
                            textOverflow: "ellipsis",
                            lineClamp: 2,
                            height: "66px",
                          }}
                        >
                          {ele.content}
                        </span>
                        <p
                          style={{
                            position: "relative",
                            top: "31px",
                            font: "normal normal normal 20px Roboto",
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
            {newsPosts && (
              <footer
                style={{
                  position: "relative",
                  right: "50px",
                  top: "2200px",
                }}
              >
                <Pagination
                  total={newsPosts.totalPages}
                  page={page}
                  setPage={setPage}
                />
              </footer>
            )}
          </News>
        ) : (
          <Notice>
            <NoticeTitle>NOTICE</NoticeTitle>
            <form onSubmit={handleSearch}>
              <Search placeholder="검색" onChange={changeSearch} />
              <Icon src={SearchIcon} onClick={handleSearch}></Icon>
            </form>
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
                            font: "normal normal bold 22px/28px Roboto",
                            letterSpacing: "0px",
                            color: "#447BF7",
                            opacity: 1,
                            display: "block",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {ele.title}
                        </h3>
                        <span
                          style={{
                            display: "-webkit-box",
                            textAlign: "left",
                            font: "normal normal normal 16px/23px Roboto",
                            letterSpacing: "0px",
                            color: "#606060",
                            opacity: 1,
                            overflow: "hidden",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 3,
                            maxWidth: "100%",
                            textOverflow: "ellipsis",
                            lineClamp: 2,
                            height: "66px",
                          }}
                        >
                          {ele.content}
                        </span>
                        <p
                          style={{
                            position: "relative",
                            top: "31px",
                            font: "normal normal normal 20px Roboto",
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
            {noticePosts && (
              <footer
                style={{
                  position: "relative",
                  right: "50px",
                  top: "2200px",
                }}
              >
                <Pagination
                  total={noticePosts.totalPages}
                  page={page}
                  setPage={setPage}
                  pageSize={noticePosts.size}
                />
              </footer>
            )}
          </Notice>
        )}
      </>
    </main>
  );
}
const Title = styled.p`
  position: absolute;
  top: 683px;
  left: 265px;
  width: 592px;
  height: 94px;
  font: var(--unnamed-font-style-normal) normal bold 80px/70px
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal bold 80px/70px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 1;
`;

const NewsButton = styled.button`
  position: absolute;
  top: 1080px;
  left: 0px;
  width: 960px;
  height: 186px;
  background: 0% 0% no-repeat padding-box;
  background-color: ${(props) =>
    props.content === "news" ? "#ffffff" : "#447bfb"};
  opacity: 1;

  font: var(--unnamed-font-style-normal) normal bold 33px/70px
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal bold 33px/70px Roboto;
  letter-spacing: 0px;
  color: ${(props) => (props.content === "news" ? "#447bfb" : "#ffffff")};
  text-transform: uppercase;
  opacity: 1;
  text-align: center;
  border-style: none;
`;
const NoticeButton = styled.button`
  position: absolute;
  top: 1080px;
  left: 960px;
  width: 960px;
  height: 186px;
  background: 0% 0% no-repeat padding-box;
  background-color: ${(props) =>
    props.content === "news" ? "#447bfb" : "#ffffff"};
  opacity: 1;

  font: var(--unnamed-font-style-normal) normal bold 33px/70px
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal bold 33px/70px Roboto;
  letter-spacing: 0px;
  color: ${(props) => (props.content === "notice" ? "#447bfb" : "#ffffff")};
  text-transform: uppercase;
  opacity: 1;
  text-align: center;
  border-style: none;
`;
const News = styled.div``;
const Notice = styled.main``;
const NoticeTitle = styled.p`
  position: absolute;
  top: 1376px;
  left: 350px;
  width: 97px;
  height: 33px;

  font: var(--unnamed-font-style-normal) normal bold 28px/70px
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal bold 28px/70px Roboto;
  letter-spacing: 0px;
  color: #6a6a6a;
  text-transform: uppercase;
  opacity: 1;
`;
const Search = styled.input`
  position: absolute;
  top: 1415px;
  left: 1078px;
  width: 472px;
  height: 46px;
  background: #d3d3d35c 0% 0% no-repeat padding-box;
  opacity: 1;
  border: none;
  padding-left: 20px;
`;

const Line = styled.span`
  position: absolute;
  top: 1530px;
  left: 0.5px;
  width: 1920px;
  border: 1px solid #447bf7;
  background-color: #447bf7;
  opacity: 1;
`;

const PaginationContainer = styled.div`
  position: absolute;
  display: flex;
  top: 1600px;
  left: 13%;
  padding: 10px;
  width: 1500px;
  height: 800px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: space-around;
`;
const ContentContainer = styled.div`
  height: 225px;
  width: 270px;
  padding: 70px 45px 64px 42px;
`;
const PaginationElement = styled.article`
  position: relative;
  width: 357px;
  height: 357px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 5px 5px 22px #00000029;
  opacity: 1;
  margin-bottom: 0em;
  margin-left: 5em;
  justify-content: center;
  text-align: left;
`;
const DetailButton = styled.button`
  position: relative;
  top: -5.3em;
  left: 21.8em;
  width: 68px;
  height: 68px;
  background: #447bf7;
  opacity: 1;
  border: none;
`;

const Icon = styled.img`
  position: absolute;
  top: 1427px;
  left: 1535px;
  width: 25px;
  height: 25px;
`;
const StyledLink = styled((props) => <Link {...props} />)`
  &:hover {
    color: #447bf7;
  }
  &:link {
    color: white;
  }
  text-decoration: none;
`;
