import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import styles from "../styles/researchOutcomes.module.css";
import SearchIcon from "../static/search.png";
import axios from "axios";
import Pagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../../src/components/AdminNavbar";
function ResearchOutcomesAdmin() {
  const [content, setContent] = useState("THESIS");
  const [searchText, setSearchText] = useState("");
  // const [years, setYears] = useState(null);
  const [thesisPosts, setThesisPosts] = useState(null);
  const [patentPosts, setPatentPosts] = useState(null);
  const [page, setPage] = useState(1);
  const [isUpload, setUpload] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", selectedFile);

    formData.append("content", content);
    try {
      const response = await axios.post(
        `/admin/${content.toLowerCase()}/read`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("업로드 성공");
      console.log(response);
      setUpload(false);
      window.location.reload();
    } catch (error) {
      if (error.status === 400) {
        navigate("/Login");
      }
    }
  };
  const input = useRef(null);
  const changeSearch = (event) => {
    setSearchText(event.target.value);
  };
  const handleUpload = () => {
    setUpload(true);
  };
  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `/${content.toLowerCase()}/search/title?word=${encodeURIComponent(
          searchText
        )}`
      );
      content === "THESIS"
        ? setThesisPosts(response.data)
        : setPatentPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFileName(file.name);
    setSelectedFile(file);
  };
  const getThesisPatent = async (content) => {
    try {
      const response = await axios.get(
        `/${content.toLowerCase()}/search/all?page=${page - 1}`
      );
      content === "THESIS"
        ? setThesisPosts(response.data)
        : setPatentPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getThesisPatentSearch = async (content) => {
    try {
      const response = await axios.get(
        `/${content.toLowerCase()}/search/title?word=${encodeURIComponent(
          searchText
        )}`
      );
      content === "thesis"
        ? setThesisPosts(response.data)
        : setPatentPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  // const getThesisPatentYear = async (content) => {
  //   try {
  //     const response = await axios.get(`/${content}/year`);
  //     setYears(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    // // 페이지 요청
    searchText ? getThesisPatentSearch(content) : getThesisPatent(content);
    // getThesisPatentYear(content);
  }, [content, page]);
  return (
    <main className={styles.main}>
      <AdminNavbar />
      <OutComes id="outcomes">
        <ThesisButton
          onClick={() => {
            setContent("THESIS");
            setUpload(false);
            // setPosts(sampleThesis);
          }}
          content={content}
          id="new_notice"
        >
          THESIS
        </ThesisButton>
        <PatenteButton
          onClick={() => {
            setContent("PATENT");
            setUpload(false);
            // setPosts(samplePatent);
          }}
          content={content}
        >
          PATENT
        </PatenteButton>
      </OutComes>
      {content === "THESIS" ? (
        <>
          <ThesisContainer>
            {!isUpload && (
              <>
                <TabList>
                  <Tab>
                    전체<Cases>200건</Cases>
                  </Tab>
                  <Tab>
                    2023<Cases>50건</Cases>
                  </Tab>
                  <Tab>
                    2022<Cases>50건</Cases>
                  </Tab>
                  <Tab>
                    2021<Cases>50건</Cases>
                  </Tab>
                  <Tab>
                    2020<Cases>50건</Cases>
                  </Tab>
                </TabList>
                <UploadButton onClick={handleUpload}>파일 업로드</UploadButton>
                <Search placeholder="검색" onChange={changeSearch} />
                <Icon src={SearchIcon} onClick={handleSearch}></Icon>
              </>
            )}
            {isUpload ? (
              <UploadContainer>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <UploadTitle>{content} 파일 업로드</UploadTitle>
                  <table
                    style={{
                      borderCollapse: "collapse",
                    }}
                  >
                    <tbody>
                      <tr
                        style={{
                          borderTop: "3px solid #447BF7",
                        }}
                      >
                        <td
                          style={{
                            width: "160px",
                            height: "84px",
                            background: "#D5D5D5 0% 0% no-repeat padding-box",
                            opacity: 1,
                          }}
                        >
                          <RowTitle>첨부파일</RowTitle>
                        </td>
                        <td
                          style={{
                            display: "flex",
                            width: "1078px",
                            height: "84px",
                            background: "#F4F4F4 0% 0% no-repeat padding-box",
                            opacity: 1,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <input
                            ref={input}
                            type={"file"}
                            onChange={handleFileSelect}
                            style={{
                              display: "none",
                            }}
                          ></input>
                          <label
                            htmlFor="file"
                            style={{
                              display: "inline-block",
                              padding: "0px 20px",
                              color: "#fff",
                              verticalAlign: "middle",
                              cursor: "pointer",
                              marginLeft: "10px",
                              textAlign: "center",
                              width: "83px",
                              height: "47px",
                              background: "#DDDDDD 0% 0% no-repeat padding-box",
                              border: "1px solid #9F9F9F",
                              opacity: 1,
                            }}
                            onClick={() => {
                              input.current?.click();
                            }}
                          >
                            <span
                              style={{
                                position: "relative",
                                top: "0.7rem",
                                font: "normal normal bold 20px/28px Roboto",
                                letterSpacing: "0px",
                                color: "#000000",
                                opacity: 0.7,
                              }}
                            >
                              파일선택
                            </span>
                          </label>
                          <input
                            className="upload-name"
                            placeholder={selectedFileName}
                            style={{
                              position: "relative",
                              display: "inline-block",
                              padding: "0 10px",
                              verticalAlign: "middle",
                              border: "1px solid #dddddd",
                              width: "863px",
                              height: "47px",
                              right: "6px",
                            }}
                            readOnly
                          ></input>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      width: "1250px",
                      height: "100px",
                      marginTop: "60px",
                    }}
                  >
                    <Button
                      style={{ marginRight: "1em" }}
                      onClick={() => {
                        setUpload(false);
                      }}
                    >
                      목록으로
                    </Button>
                    <Button type="submit" value="Upload File">
                      게시하기
                    </Button>
                  </div>
                </form>
              </UploadContainer>
            ) : (
              <Table border={1}>
                <tbody>
                  <TableTitle>
                    <TableData>No</TableData>
                    <TableData>Year</TableData>
                    <TableData>Title</TableData>
                    <TableData>Authors</TableData>
                    <TableData>Journal</TableData>
                    <TableData>IF</TableData>
                    <TableData>JCI</TableData>
                    <TableData>DOI</TableData>
                  </TableTitle>
                  {thesisPosts && (
                    <>
                      {thesisPosts.content.map((thesis) => {
                        return (
                          <>
                            <TableRow>
                              <TableData>{thesis.id}</TableData>
                              <TableData>{thesis.year}</TableData>
                              <TableData>{thesis.title}</TableData>
                              <TableData>{thesis.authors}</TableData>
                              <TableData>{thesis.journal}</TableData>
                              <TableData>{thesis.iif}</TableData>
                              <TableData>{thesis.jcr}</TableData>
                              <TableData>{thesis.doi}</TableData>
                            </TableRow>
                          </>
                        );
                      })}
                    </>
                  )}
                </tbody>
              </Table>
            )}
          </ThesisContainer>
          {thesisPosts && (
            <footer
              style={{
                position: "relative",
                top: "270px",
                right: "10px",
              }}
            >
              <Pagination
                total={thesisPosts.totalPages}
                page={page}
                setPage={setPage}
                pageSize={thesisPosts.size}
              />
            </footer>
          )}
        </>
      ) : (
        <>
          <PatentContainer>
            {!isUpload && (
              <>
                <TabList>
                  <Tab>
                    전체<Cases>200건</Cases>
                  </Tab>
                  <Tab>
                    2023<Cases>50건</Cases>
                  </Tab>
                  <Tab>
                    2022<Cases>50건</Cases>
                  </Tab>
                  <Tab>
                    2021<Cases>50건</Cases>
                  </Tab>
                  <Tab>
                    2020<Cases>50건</Cases>
                  </Tab>
                </TabList>
                <UploadButton onClick={handleUpload}>파일 업로드</UploadButton>
                <Search placeholder="검색" onChange={changeSearch} />
                <Icon src={SearchIcon} onClick={handleSearch}></Icon>
              </>
            )}
            {isUpload ? (
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <UploadTitle>{content} 파일 업로드</UploadTitle>
                <table
                  style={{
                    borderCollapse: "collapse",
                  }}
                >
                  <tbody>
                    <tr
                      style={{
                        borderTop: "3px solid #447BF7",
                      }}
                    >
                      <td
                        style={{
                          width: "160px",
                          height: "84px",
                          background: "#D5D5D5 0% 0% no-repeat padding-box",
                          opacity: 1,
                        }}
                      >
                        <RowTitle>첨부파일</RowTitle>
                      </td>
                      <td
                        style={{
                          display: "flex",
                          width: "1078px",
                          height: "84px",
                          background: "#F4F4F4 0% 0% no-repeat padding-box",
                          opacity: 1,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <input
                          ref={input}
                          type={"file"}
                          onChange={handleFileSelect}
                          style={{
                            display: "none",
                          }}
                        ></input>
                        <label
                          htmlFor="file"
                          style={{
                            display: "inline-block",
                            padding: "0px 20px",
                            color: "#fff",
                            verticalAlign: "middle",
                            cursor: "pointer",
                            marginLeft: "10px",
                            textAlign: "center",
                            width: "83px",
                            height: "47px",
                            background: "#DDDDDD 0% 0% no-repeat padding-box",
                            border: "1px solid #9F9F9F",
                            opacity: 1,
                          }}
                          onClick={() => {
                            input.current?.click();
                          }}
                        >
                          <span
                            style={{
                              position: "relative",
                              top: "0.7rem",
                              font: "normal normal bold 20px/28px Roboto",
                              letterSpacing: "0px",
                              color: "#000000",
                              opacity: 0.7,
                            }}
                          >
                            파일선택
                          </span>
                        </label>
                        <input
                          className="upload-name"
                          placeholder={selectedFileName}
                          style={{
                            position: "relative",
                            display: "inline-block",
                            padding: "0 10px",
                            verticalAlign: "middle",
                            border: "1px solid #dddddd",
                            width: "863px",
                            height: "47px",
                            right: "6px",
                          }}
                          readOnly
                        ></input>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    width: "1250px",
                    height: "100px",
                    marginTop: "60px",
                  }}
                >
                  <Button
                    style={{ marginRight: "1em" }}
                    onClick={() => {
                      setUpload(false);
                    }}
                  >
                    목록으로
                  </Button>
                  <Button type="submit" value="Upload File">
                    게시하기
                  </Button>
                </div>
              </form>
            ) : (
              <>
                <Table>
                  <tbody>
                    <TableTitle>
                      <TableData>No</TableData>
                      <TableData>Date</TableData>
                      <TableData>Submit</TableData>
                      <TableData>Title</TableData>
                      <TableData>Author</TableData>
                    </TableTitle>
                    {patentPosts &&
                      patentPosts.content.map((patent) => {
                        return (
                          <>
                            <TableRow>
                              <TableData>{patent.id}</TableData>
                              <TableData>{patent.date}</TableData>
                              <TableData>{patent.submit}</TableData>
                              <TableData>{patent.title}</TableData>
                              <TableData>{patent.author}</TableData>
                            </TableRow>
                          </>
                        );
                      })}
                  </tbody>
                </Table>
              </>
            )}
          </PatentContainer>
          {patentPosts && (
            <footer
              style={{
                position: "relative",
                top: "270px",
                right: "10px",
              }}
            >
              <Pagination
                total={patentPosts.totalPages}
                page={page}
                setPage={setPage}
                pageSize={patentPosts.size}
              />
            </footer>
          )}
        </>
      )}
    </main>
  );
}
const OutComes = styled.div`
  position: relative;
  top: 330px;
  width: 1920px;
  height: 1050px;
`;
const ThesisButton = styled.button`
  position: absolute;
  top: 620px;
  left: 0px;
  width: 960px;
  height: 186px;
  background: 0% 0% no-repeat padding-box;
  background-color: ${(props) =>
    props.content === "THESIS" ? "#ffffff" : "#447bfb"};
  opacity: 1;

  font: var(--unnamed-font-style-normal) normal bold 33px/70px
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal bold 33px/70px Roboto;
  letter-spacing: 0px;
  color: ${(props) => (props.content === "THESIS" ? "#447bfb" : "#ffffff")};
  text-transform: uppercase;
  opacity: 1;
  text-align: center;
  border-style: none;
`;
const PatenteButton = styled.button`
  position: absolute;
  top: 620px;
  left: 960px;
  width: 960px;
  height: 186px;
  background: 0% 0% no-repeat padding-box;
  background-color: ${(props) =>
    props.content === "THESIS" ? "#447bfb" : "#ffffff"};
  opacity: 1;

  font: var(--unnamed-font-style-normal) normal bold 33px/70px
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal bold 33px/70px Roboto;
  letter-spacing: 0px;
  color: ${(props) => (props.content === "PATENT" ? "#447bfb" : "#ffffff")};
  text-transform: uppercase;
  opacity: 1;
  text-align: center;
  border-style: none;
`;

const ThesisContainer = styled.div`
  position: relative;
  top: 300px;
  left: 335px;
  height: 1400px;
  width: 1250px;
`;
const PatentContainer = styled.div`
  position: relative;
  top: 300px;
  left: 335px;
  height: 1400px;
  width: 1250px;
`;

const TabList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 700px;
`;
const Tab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 125px;
  height: 46px;
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) 17px/30px
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  text-align: left;
  font: normal normal normal 17px/30px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  background: var(--unnamed-color-447bf7) 0% 0% no-repeat padding-box;
  background: #447bf7 0% 0% no-repeat padding-box;
  opacity: 1;
  margin-right: 10px;
`;
const Cases = styled.div`
  width: 53px;
  height: 28px;
  border-radius: 10px;
  font: var(--unnamed-font-style-normal) normal bold 15px/30px
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-447bf7);
  text-align: center;
  font: normal normal bold 15px/30px Roboto;
  letter-spacing: 0px;
  color: #447bf7;
  opacity: 1;
  background-color: white;
`;
const UploadButton = styled.button`
  border: none;
  position: absolute;
  display: flex;
  left: 800px;
  top: 0px;
  width: 132px;
  height: 46px;
  /* UI Properties */
  background: #d3d3d35c 0% 0% no-repeat padding-box;
  opacity: 1;
  /* text-align: center; */
  justify-content: center;
  align-items: center;
  font: normal normal normal 16px/30px Roboto;
  letter-spacing: 0px;
  color: #171717;
  opacity: 0.7;
`;
const Search = styled.input`
  position: relative;
  top: -47px;
  left: 950px;
  width: 280px;
  height: 46px;
  background: #d3d3d35c 0% 0% no-repeat padding-box;
  opacity: 1;
  border: none;
  padding-left: 20px;
`;
const Icon = styled.img`
  position: relative;
  top: -38px;
  left: 908px;
  width: 25px;
  height: 25px;
`;
const Table = styled.table`
  position: absolute;
  width: 1250px;
  height: 84px;
  opacity: 1;
  border-spacing: 0px;
  border-top: 2px solid #414ffd;
  border-bottom: 2px solid #447bf7;
`;
const TableTitle = styled.tr`
  height: 84px;
  text-align: center;
  vertical-align: middle;
  background: #f4f4f4 0% 0% no-repeat padding-box;
  opacity: 1;
  font: var(--unnamed-font-style-normal) normal medium 20px /
    var(--unnamed-line-spacing-28) var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: center;
  font: normal normal bold 20px/28px Roboto;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`;
const TableRow = styled.tr`
  background-color: white;
  text-align: center;
  vertical-align: middle;
  height: 117px;
`;
const TableData = styled.td`
  border-bottom: 1px solid #b4b4b4;
  border-right: none;
`;

const UploadContainer = styled.div`
  height: 274px;
`;
const UploadTitle = styled.h1`
  font: var(--unnamed-font-style-normal) normal bold 33px/70px
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-447bf7);
  text-align: left;
  font: normal normal bold 33px/70px Roboto;
  letter-spacing: 0px;
  color: #447bf7;
  text-transform: uppercase;
  opacity: 1;
`;
const RowTitle = styled.p`
  text-align: center;
  font: normal normal bold 20px/28px Roboto;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`;
const Button = styled.button`
  width: 143px;
  height: 45px;
  /* UI Properties */
  background: #e8e8e8 0% 0% no-repeat padding-box;
  opacity: 1;
  border: none;
  font: normal normal bold 18px/28px Roboto;
  letter-spacing: 0px;
  color: #575757;
  opacity: 1;
`;

export default ResearchOutcomesAdmin;
