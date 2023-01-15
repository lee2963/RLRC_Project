import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import styles from "../styles/researchOutcomes.module.css";
import SearchIcon from "../static/search.png";
import axios from "axios";
import Pagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../../src/components/AdminNavbar";

/*const sampleThesis = {
  content: [
    {
      id: 19,
      no: 19,
      year: 2020,
      title: "Modern Catalysts in A3- Coupling Reactions",
      authors: "Ali Ramazani, Hamideh Ahankar, Zahra T. Nafeh, Sang W. Joo",
      journal: "CURRENT ORGANIC CHEMISTRY",
      iif: 2.029,
      jcr: 54.0,
      doi: "10.2174/1385272823666191113160643",
    },
    {
      id: 18,
      no: 18,
      year: 2019,
      title: "Seismic phononic crystals by elastodynamic Navier equation",
      authors: "Lee, Dongwoo, Joo Hwan Oh, In Seok Kang, Junsuk Rho",
      journal: "PHYSICAL REVIEW E",
      iif: 2.353,
      jcr: 12.0,
      doi: "10.1103/PhysRevE.100.063002",
    },
    {
      id: 17,
      no: 17,
      year: 2019,
      title:
        "Observation of enhanced optical spin hall effect in a vertical hyperbolic metamaterial",
      authors:
        "Dasol Lee, Tae Hak Kim, Younghwan Yang, Hui Joon Park, Minkyung Kim,  Junsuk Rho",
      journal: "ACS Photonics",
      iif: 7.143,
      jcr: 6.0,
      doi: "10.1021/acsphotonics.9b00904.",
    },
    {
      id: 16,
      no: 16,
      year: 2019,
      title:
        "Spectrally sharp plasmon resonances in near-infrared:subwavel ength coreshell nanoparticles",
      authors: "Jungho Mun, Sunae So, Junsuk Rho",
      journal: "Physical Review\nApplied",
      iif: 4.532,
      jcr: 17.0,
      doi: "10.1103/PhysRevApplied.12.044072",
    },
    {
      id: 15,
      no: 15,
      year: 2019,
      title:
        "Wavelength-decoupled geometric metasurfaces by arbitrary dispersion control",
      authors:
        "Jeonghyun Kim, Jungho Mun , Dasol Lee, Gwanho Yoon,Junsuk Rho\n, Ki Tae Nam ",
      journal: "Communication\nPhysics",
      iif: null,
      jcr: null,
      doi: "10.1038/s42005-019-0232-7",
    },
    {
      id: 14,
      no: 14,
      year: 2019,
      title: "Twisted non-diffracting beams through all dielectric meta-axicon",
      authors:
        "Heonyeong Jeong,  Inki Kim, Muhammad Qasim Mehmood, Muhammad Zubair, Ali Akbar, Murtaza Saleem, Muhammad Sabieh Anwar, Farooq Ahmad Tahir, Nasir Mahmood, Junsuk Rho",
      journal: "Nanoscale",
      iif: 6.97,
      jcr: 12.0,
      doi: "10.1039/C9NR04888J",
    },
    {
      id: 13,
      no: 13,
      year: 2019,
      title: "Metasurface zone plate: light manipulation in vectorial regime",
      authors:
        "Gwanho Yoon, Junsuk Rho,  Jaehyuck Jang,Jungho Mun, Ki Tae Nam ",
      journal: "COMMUNICATIONS PHYSICS",
      iif: null,
      jcr: null,
      doi: "10.1038/s42005-019-0258-x",
    },
    {
      id: 12,
      no: 12,
      year: 2020,
      title:
        "Performance Enhancement of a\nQuartz Tuning Fork Sensor\nusing a Cellulose\nNanocrystal-Reinforced\nNanoporous Polymer Fiber",
      authors: "Wuseok Kim, Sangmin Jeon, Eunjin Park",
      journal: "SENSORS",
      iif: 3.031,
      jcr: 24.0,
      doi: "10.3390/s20020437",
    },
    {
      id: 11,
      no: 11,
      year: 2020,
      title:
        "Facile Fabrication of a Highly Efficient Moisture-Driven Power Generator using Laser-Induced Graphitization under Ambient Conditions",
      authors: "Sanghee Lee, Sangmin Jeon, Jakyung Eun",
      journal: "Nano\nEnergy",
      iif: 15.548,
      jcr: 4.0,
      doi: "10.1016/j.nanoen.2019.104364",
    },
    {
      id: 10,
      no: 10,
      year: 2019,
      title:
        "Asymmetric Encoder-Decoder Structured FCN Based LiDAR to Color Image Generation",
      authors: "Hyun-Koo Kim, Kook-Yeol Yoo, Ju H. Park, Ho-Youl Jung",
      journal: "SENSORS",
      iif: 3.031,
      jcr: 24.0,
      doi: "10.3390/s19214818",
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
    pageSize: 10,
    paged: true,
    unpaged: false,
  },
  totalPages: 2,
  totalElements: 19,
  last: false,
  size: 10,
  number: 0,
  sort: {
    empty: false,
    unsorted: false,
    sorted: true,
  },
  numberOfElements: 10,
  first: true,
  empty: false,
};
const samplePatent = {
  content: [
    {
      id: 24,
      no: 24,
      date: "20220113",
      submit: "PCT 출원",
      title:
        "가시광에서 투명한 저손실 수소화 비정질 실리콘 및 이의 제조방법(Low-loss hydrogenated amorphous silicon transparent to visible light and Manufacturing method thereof)",
      author: "양영환, 윤관호, 노준석",
    },
    {
      id: 23,
      no: 23,
      date: "2022.06.03",
      submit: "등록",
      title:
        "표면 굴곡 구조를 이용한 태양열 증기 발생에서의 염 석출\n방지 및 에너지 전환 효율 향상 방법",
      author: "전상민, 장한솔, 최지훈",
    },
    {
      id: 22,
      no: 22,
      date: "2022. 06. 20",
      submit: "출원",
      title: "알칼리 수전해용 삼원 합금 촉매를 포함하는 전극 및 이의 제조방법",
      author: "강미숙, 박병현",
    },
    {
      id: 21,
      no: 21,
      date: "2021",
      submit: "출원",
      title: "보호장비 착용에 대한 보상 제공 방법 및 장치",
      author: "정호열, 이동민, 김나연, 박웅규",
    },
    {
      id: 20,
      no: 20,
      date: "2021.12.16",
      submit: "출원",
      title: "이중안전 전동식 조향장치의 제어성능 평가 실험장치",
      author: "강석원\n남강현\n최정현\n김지헌",
    },
    {
      id: 19,
      no: 19,
      date: "2021",
      submit: "출원",
      title:
        "의미론적 분할을 이용하여 관심 영역을 집중적으로 측정하는 방법 및 그를 위한 라이다 장\n치",
      author: "정호열, 최연규, 박웅규",
    },
    {
      id: 18,
      no: 18,
      date: "20210428",
      submit: "출원",
      title: "홀로그래픽 메타표면 가스 센서 및 이를 포함하는 웨어러블 장치",
      author: "김인기, 김원식, 김영기, 노준석",
    },
    {
      id: 17,
      no: 17,
      date: "20210401",
      submit: "출원",
      title:
        "IGZO(Indium-Gallium-Zinc-Oxide)를 포함하는 컬러필터 및 이의 제조방법",
      author: "김인기, 윤주영, 정윤영, 노준석",
    },
    {
      id: 16,
      no: 16,
      date: "20210331",
      submit: "출원",
      title: "온도 반응형 상전이 냉각소자",
      author: "김민경, 이다솔, 노준석",
    },
    {
      id: 15,
      no: 15,
      date: "20210317",
      submit: "출원",
      title: "가시광에서 투명한 저손실 수소화 비정질 실리콘 및 이의 제조방법",
      author: "양영환, 윤관호, 노준석",
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
    pageSize: 10,
    paged: true,
    unpaged: false,
  },
  totalPages: 3,
  totalElements: 24,
  last: false,
  size: 10,
  number: 0,
  sort: {
    empty: false,
    unsorted: false,
    sorted: true,
  },
  numberOfElements: 10,
  first: true,
  empty: false,
};
*/

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
                {/* <TabList>
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
                </TabList> */}
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
                                font: "normal normal bold 20px/28px sans-serif",
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
                    <TableTitleData>No</TableTitleData>
                    <TableTitleData>Year</TableTitleData>
                    <TableTitleData>Title</TableTitleData>
                    <TableTitleData>Authors</TableTitleData>
                    <TableTitleData>Journal</TableTitleData>
                    <TableTitleData>IF</TableTitleData>
                    <TableTitleData>JCI</TableTitleData>
                    <TableTitleData>DOI</TableTitleData>
                  </TableTitle>
                  {thesisPosts && (
                    <>
                      {thesisPosts.content.map((thesis) => {
                        return (
                          <>
                            <TableRow>
                              <TableData>{thesis.id}</TableData>
                              <TableData>{thesis.year}</TableData>
                              <TableData style={{ maxWidth: "300px" }}>
                                {thesis.title}
                              </TableData>
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
                {/* <TabList>
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
                </TabList> */}
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
                              font: "normal normal bold 20px/28px sans-serif",
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
                      <TableTitleData>No</TableTitleData>
                      <TableTitleData>Date</TableTitleData>
                      <TableTitleData>Submit</TableTitleData>
                      <TableTitleData>Title</TableTitleData>
                      <TableTitleData>Author</TableTitleData>
                    </TableTitle>
                    {patentPosts &&
                      patentPosts.content.map((patent) => {
                        return (
                          <>
                            <TableRow>
                              <TableData>{patent.id}</TableData>
                              <TableData>{patent.date}</TableData>
                              <TableData>{patent.submit}</TableData>
                              <TableData style={{ maxWidth: "300px" }}>
                                {patent.title}
                              </TableData>
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
                top: "180px",
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
    var(--unnamed-font-family-sans-serif);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal bold 33px/70px sans-serif;
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
    var(--unnamed-font-family-sans-serif);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal bold 33px/70px sans-serif;
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
  height: 1500px;
  width: 1250px;
`;
const PatentContainer = styled.div`
  position: relative;
  top: 300px;
  left: 335px;
  height: 1500px;
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
    var(--unnamed-font-family-sans-serif);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  text-align: left;
  font: normal normal normal 17px/30px sans-serif;
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
    var(--unnamed-font-family-sans-serif);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-447bf7);
  text-align: center;
  font: normal normal bold 15px/30px sans-serif;
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
  top: -45px;
  width: 132px;
  height: 46px;
  /* UI Properties */
  background: #d3d3d35c 0% 0% no-repeat padding-box;
  opacity: 1;
  /* text-align: center; */
  justify-content: center;
  align-items: center;
  font: normal normal normal 16px/30px sans-serif;
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
    var(--unnamed-line-spacing-28) var(--unnamed-font-family-sans-serif);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: center;
  font: normal normal bold 20px/28px sans-serif;
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
const TableTitleData = styled.td`
  border-bottom: 1px solid #b4b4b4;
  border-left: 1px solid #dfdcdc;
  border-right: 1px solid #dfdcdc;
  white-space: pre-line;
  padding: 10px;
`;
const TableData = styled.td`
  border-bottom: 1px solid #b4b4b4;
  padding: 10px;
  border-right: none;
  white-space: pre-line;
`;

const UploadContainer = styled.div`
  height: 274px;
`;
const UploadTitle = styled.h1`
  font: var(--unnamed-font-style-normal) normal bold 33px/70px
    var(--unnamed-font-family-sans-serif);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-447bf7);
  text-align: left;
  font: normal normal bold 33px/70px sans-serif;
  letter-spacing: 0px;
  color: #447bf7;
  text-transform: uppercase;
  opacity: 1;
`;
const RowTitle = styled.p`
  text-align: center;
  font: normal normal bold 20px/28px sans-serif;
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
  font: normal normal bold 18px/28px sans-serif;
  letter-spacing: 0px;
  color: #575757;
  opacity: 1;
`;

export default ResearchOutcomesAdmin;
