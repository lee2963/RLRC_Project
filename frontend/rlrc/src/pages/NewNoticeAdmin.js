import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Pagination from "../components/Pagination";
import styles from "../styles/newNoticeAdmin.module.css";
import axios from "axios";
import SearchIcon from "../static/search.png";
import FormEditor from "../components/FormEditor";
import { useNavigate, Link } from "react-router-dom";
import AdminNavbar from "../../src/components/Navbar";
import ContentBar from "../../src/components/ContentBar";
import ContentIndex from "../../src/components/ContentIndex";
const page1 = {
  content: [
    {
      id: 8,
      attachFile: null,
      title: "8",
      content: "11111",
      dateTime: "2022-12-23T16:15:32.530192",
      uploadFileName: null,
      storeFileName: null,
    },
    {
      id: 7,
      attachFile: null,
      title: "7",
      content: "11111",
      dateTime: "2022-12-23T16:15:28.301017",
      uploadFileName: null,
      storeFileName: null,
    },
    {
      id: 6,
      attachFile: null,
      title: "6",
      content: "11111",
      dateTime: "2022-12-23T16:15:24.861397",
      uploadFileName: null,
      storeFileName: null,
    },
    {
      id: 5,
      attachFile: null,
      title: "5",
      content:
        "Quis sit reprehenderit fugiat in amet reprehenderit est exercitation incididunt. Aliqua tempor exercitation in pariatur ea non qui irure labore dolor occaecat excepteur aliqua commodo. Aliqua consectetur culpa cupidatat dolor aute officia consequat incididunt sit est consectetur consectetur. Est ullamco quis eu minim nulla id enim aute. In amet in fugiat consequat nulla. Voluptate veniam elit dolore elit sint ea cupidatat ea labore ad commodo Lorem commodo. Enim elit eu velit minim amet officia ipsum magna.Id ipsum sunt laboris labore aliquip ex aute Lorem aute esse dolore tempor. Ad reprehenderit dolore ut sint ex adipisicing officia nisi adipisicing fugiat ea labore. Dolor esse est sint nisi magna enim consectetur non.Pariatur consectetur cupidatat culpa dolor aliqua non amet velit exercitation culpa occaecat. Exercitation consequat do nostrud consequat non ea anim laborum anim cillum ut occaecat. Ipsum incididunt do cupidatat voluptate qui. Incididunt est eiusmod labore tempor exercitation dolor cillum nostrud tempor do deserunt velit nulla tempor.Labore tempor velit nulla ea adipisicing sit incididunt deserunt amet eiusmod. Ut ad laboris ut eiusmod aute. Aliquip quis duis et ea eiusmod tempor qui eiusmod esse. Consectetur excepteur ad minim commodo. Ad reprehenderit ut reprehenderit cupidatat nulla dolore non anim aliquip in. Tempor qui cillum adipisicing nostrud ex consectetur eiusmod aute ex. Elit Lorem incididunt nisi proident.",
      dateTime: "2022-12-23T16:15:21.558377",
      uploadFileName: null,
      storeFileName: null,
    },
    {
      id: 4,
      attachFile: null,
      title: "4",
      content: "11111",
      dateTime: "2022-12-23T16:15:17.429154",
      uploadFileName: null,
      storeFileName: null,
    },
    {
      id: 3,
      attachFile: null,
      title: "3",
      content: "11111",
      dateTime: "2022-12-23T16:15:14.163898",
      uploadFileName: null,
      storeFileName: null,
    },
  ],
  pageable: {
    sort: {
      empty: false,
      unsorted: false,
      sorted: true,
    },
    offset: 0,
    pageNumber: 0,
    pageSize: 6,
    paged: true,
    unpaged: false,
  },
  totalPages: 1,
  totalElements: 8,
  last: false,
  size: 6,
  number: 0,
  sort: {
    empty: false,
    unsorted: false,
    sorted: true,
  },
  numberOfElements: 6,
  first: true,
  empty: false,
};
export default function NewNoticeAdmin() {
  const navigate = useNavigate();
  const [curContent, setCurContent] = useState("news");
  const [newsPosts, setNewsPosts] = useState(null);
  const [noticePosts, setNoticePosts] = useState(null);
  const [page, setPage] = useState(1);
  const [deleteContent, setDeleteContent] = useState(false);
  const [addNews, setAddNews] = useState(false);
  const [addNotice, setAddNotice] = useState(false);
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
  const handleAddNews = () => {
    setAddNews(true);
  };
  const handleAddNotice = () => {
    setAddNotice(true);
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
  const handleDelete = () => {
    setDeleteContent(!deleteContent);
  };
  const handleDeleteContent = async (id, content) => {
    console.log(id, content);
    try {
      const response = await axios.delete(`/admin/${content}/${id}`);
      content === "news"
        ? setNewsPosts(response.data)
        : setNoticePosts(response.data);
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      window.location.reload();
    }, 100);
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
      // 디버그 코드
      setNewsPosts(page1);
      setNoticePosts(page1);
      //
    }
  };
  const getNewNoticeSearch = async (content) => {
    try {
      const response = await axios.get(
        `/${content}/search/title?page=${page - 1}&word=${searchText}`
      );
      content === "news"
        ? setNewsPosts(response.data)
        : setNoticePosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // 페이지 요청
    searchText ? getNewNoticeSearch(curContent) : getNewNotice(curContent);
  }, [curContent, page]);

  const changeSearch = (event) => {
    setSearchText(event.target.value);
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      alert(e.key);
      handleSearch(e);
    }
  };

  const [showContent, setShowContent] = useState(false);
  return (
    <>
      <main className={styles.main}>
        <AdminNavbar />
        <Title>NEWS & NOTICE</Title>
        <ContentBar setShow={setShowContent} />
        {showContent && (
          <ContentIndex setShow={setShowContent} isShow={showContent} />
        )}
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
              ABOUT
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
      </main>
      <ButtonWrapper>
        <NewsButton
          onClick={() => {
            setCurContent("news");
            setAddNews(false);
            setAddNotice(false);
            setDeleteContent(false);
            setSearchText("");
            // console.log("newsButton");
          }}
          content={curContent}
          id="new_notice"
        >
          NEWS
        </NewsButton>
        <NoticeButton
          onClick={() => {
            setCurContent("notice");
            setAddNews(false);
            setAddNotice(false);
            setDeleteContent(false);
            setSearchText("");
          }}
          content={curContent}
        >
          NOTICE
        </NoticeButton>
      </ButtonWrapper>
      {curContent === "news" ? (
        addNews === false ? (
          <News>
            <SearchWrapper>
              <NoticeTitle>NEWS</NoticeTitle>
              <form onSubmit={handleSearch} style={{
                display: "flex",
                flexDirection: "row"
              }}>
                <ButtonContainer>
                  <Button value="add" onClick={handleAddNews}>
                    추가
                  </Button>
                  <Button value="delete" onClick={handleDelete}>
                    삭제
                  </Button>
                </ButtonContainer>
                <Search placeholder="검색" onChange={changeSearch} />
                <Icon src={SearchIcon} onClick={handleSearch}></Icon>
              </form>
            </SearchWrapper>
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
                      {deleteContent && (
                        <DeleteButton
                          onClick={() => handleDeleteContent(ele.id, "news")}
                        >
                          X
                        </DeleteButton>
                      )}
                      <ContentContainer>
                        <h3
                          style={{
                            textAalign: "left",
                            font: "normal normal bold 22px/28px sans-serif",
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
                            font: "normal normal normal 16px/23px sans-serif",
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
                            font: "normal normal normal 20px sans-serif",
                            letterSpacing: "0px",
                            color: "#969696",
                            opacity: 1,
                          }}
                        >
                          {ele.dateTime}
                        </p>
                      </ContentContainer>
                      {showButton[newsPosts.content.length - ele.id] ===
                        true ? (
                        !deleteContent && (
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
                        )
                      ) : (
                        <></>
                      )}
                    </PaginationElement>
                  ))}
                </>
              )}
            </PaginationContainer>
            {newsPosts && (
              <footer>
                <Pagination
                  total={newsPosts.totalPages}
                  page={page}
                  setPage={setPage}
                  pageSize={newsPosts.size}
                />
              </footer>
            )}
          </News>
        ) : (
          <>

            <Editor>
              {/* <EditorTitle> NEWS 게시글 작성 </EditorTitle> */}
              <FormEditor
                addContents={addNews}
                setAddContents={setAddNews}
                content="news"
              />
            </Editor>
          </>
        )
      ) : addNotice === false ? (
        <Notice>
          <SearchWrapper>
            <NoticeTitle>NOTICE</NoticeTitle>

            <form onSubmit={handleSearch} style={{
              display: "flex",
              flexDirection: "row"
            }}>
              <ButtonContainer>
                <Button value="add" onClick={handleAddNotice}>
                  추가
                </Button>
                <Button value="delete" onClick={handleDelete}>
                  삭제
                </Button>
              </ButtonContainer>
              <Search placeholder="검색" onChange={changeSearch} />
              <Icon src={SearchIcon} onClick={handleSearch}></Icon>

            </form>
          </SearchWrapper>
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
                    {deleteContent && (
                      <DeleteButton
                        onClick={() => handleDeleteContent(ele.id, "notice")}
                      >
                        X
                      </DeleteButton>
                    )}
                    <ContentContainer>
                      <h3
                        style={{
                          textAalign: "left",
                          font: "normal normal bold 22px/28px sans-serif",
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
                          font: "normal normal normal 16px/23px sans-serif",
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
                          font: "normal normal normal 20px sans-serif",
                          letterSpacing: "0px",
                          color: "#969696",
                          opacity: 1,
                        }}
                      >
                        {ele.dateTime}
                      </p>
                    </ContentContainer>
                    {showButton[noticePosts.content.length - ele.id] ===
                      true ? (
                      !deleteContent && (
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
                      )
                    ) : (
                      <></>
                    )}
                  </PaginationElement>
                ))}
              </>
            )}
          </PaginationContainer>
          {noticePosts && (
            <>
              <footer>
                <Pagination
                  total={noticePosts.totalPages}
                  page={page}
                  setPage={setPage}
                  pageSize={noticePosts.size}
                />
              </footer>
            </>
          )}
        </Notice>
      ) : (
        <>
          {/* <EditorTitle> NOTICE 게시글 작성 </EditorTitle> */}
          <Editor>
            <FormEditor
              addContents={addNotice}
              setAddContents={setAddNotice}
              content="notice"
            />
          </Editor>
        </>
      )
      }
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


const StyledLink = styled((props) => <Link {...props} />)`
  &:hover {
    color: #447bf7;
  }
  &:link {
    color: white;
  }
  text-decoration: none;
`;
const Title = styled.p`
  position: absolute;
  top: 683px;
  left: 265px;
  top: 63vh;
  left: 12vw;
  width: 100%;
  height: 94px;
  font: var(--unnamed-font-style-normal) normal bold 80px/70px
    var(--unnamed-font-family-sans-serif);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal bold 80px/70px sans-serif;
  font-size: 4.1vw;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 1;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const NewsButton = styled.button`
  // position: absolute;
  // top: 1080px;
  // left: 0px;
  width: 50vw;
  height: 18vh;
  background: 0% 0% no-repeat padding-box;
  background-color: ${(props) =>
    props.content === "news" ? "#ffffff" : "#447bfb"};
  opacity: 1;

  font: var(--unnamed-font-style-normal) normal bold 33px/70px
    var(--unnamed-font-family-sans-serif);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal bold 33px/70px sans-serif;
  font-size: 1.8vw;
  letter-spacing: 0px;
  color: ${(props) => (props.content === "news" ? "#447bfb" : "#ffffff")};
  text-transform: uppercase;
  opacity: 1;
  text-align: center;
  border-style: none;

  
`;
const NoticeButton = styled.button`
  // position: absolute;
  // top: 1080px;
  // left: 960px;
  width: 50vw;
  height: 18vh;
  background: 0% 0% no-repeat padding-box;
  background-color: ${(props) =>
    props.content === "news" ? "#447bfb" : "#ffffff"};
  opacity: 1;

  font: var(--unnamed-font-style-normal) normal bold 33px/70px
    var(--unnamed-font-family-sans-serif);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal bold 33px/70px sans-serif;
  letter-spacing: 0px;
  color: ${(props) => (props.content === "notice" ? "#447bfb" : "#ffffff")};
  text-transform: uppercase;
  opacity: 1;
  text-align: center;
  border-style: none;
  font-size: 1.8vw;
`;
const News = styled.div`
  // background: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Notice = styled.div`
  // background: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  // background: red;
  width: 68vw;
  height: 18vh;
  margin-left: 10vh;
`;

const DeleteButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  border: none;
  // background-color: red;
  color: white;
  font-weight: bold;
`;
const NoticeTitle = styled.p`
  // position: absolute;
  // top: 1376px;
  // left: 350px;

  font: var(--unnamed-font-style-normal) normal bold 28px/70px
    var(--unnamed-font-family-sans-serif);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal bold 28px/70px sans-serif;
  letter-spacing: 0px;
  color: #6a6a6a;
  text-transform: uppercase;
  opacity: 1;
  font-size: 1.7vw;
`;
const Search = styled.input`
  // position: absolute;
  // top: 1415px;
  // left: 678px;
  width: 520px;
  height: 46px;
  background: #d3d3d35c 0% 0% no-repeat padding-box;
  opacity: 1;
  border: none;
  padding-left: 20px;
`;
const ButtonContainer = styled.div`
  // position: relative;
  // top: 79.8em;
  // left: 81em;
  // margin-top: 30px;
  width: 14em;
  display: flex;
  justify-content: space-around;
  // background: red;
  margin-right: 1em;
`;
const Button = styled.button`
  width: 100px;
  height: 50px;
  /* background-color: pink; */
  background-color: transparent;
  color: gray;
  font-size: 1rem;
  /* border: */
  border-width: 1px;
  border-color: gray;
  border-radius: 10px;
  /* border: none; */
  /* box-shadow: 5px 5px 22px #00000029; */
  &:hover {
    color: ${(props) => (props.value === "add" ? "#414ffd" : "red")};
  }
`;

const Line = styled.span`

  width: 100vw;
  border: 1px solid #447bf7;
  background-color: #447bf7;
  opacity: 1;
`;

const PaginationContainer = styled.div`
  display: flex;
  // position: absolute;
  padding-top: 80px; 
  width: 1500px;
  height: 800px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: space-around;
`;

const PaginationElement = styled.article`
  position: relative;
  width: 357px;
  height: 357px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 5px 5px 22px #00000029;
  opacity: 1;
  margin-bottom: 0em;
  margin-left: 6.5em;
  justify-content: center;
  text-align: left;
`;
const ContentContainer = styled.div`
  height: 225px;
  width: 270px;
  padding: 70px 45px 64px 42px;
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
const IconWrapper = styled.div`

`;

const Icon = styled.img`
  // position: absolute;
  // top: 1423px;
  // left: 1180px;
  width: 30px;
  height: 30px;
  background: #d3d3d35c;
  padding: 9px 0;
  padding-right: 16px;
`;

const Editor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  // background: green;
`;

const EditorTitle = styled.div`
  margin: 0 15.35vw;
  margin-top: 18vh;
  font: normal normal bold 33px/70px Roboto;
  letter-spacing: 0px;
  color: #447BF7;
  text-transform: uppercase;
`;
