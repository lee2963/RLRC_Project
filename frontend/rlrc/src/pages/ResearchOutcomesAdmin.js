import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import styles from "../styles/researchOutcomesAdmin.module.css";
import SearchIcon from "../static/search.png";
import axios from "axios";
import Pagination from "../components/Pagination";
import { useNavigate, Link } from "react-router-dom";
import AdminNavbar from "../../src/components/Navbar";
import ContentBar from "../../src/components/ContentBar";
import ContentIndex from "../../src/components/ContentIndex";
const sampleThesis = {
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


function ResearchOutcomesAdmin() {
  const [content, setContent] = useState("PUBLCATION");
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
        `/admin/${content === "PUBLCATION" ? "thesis" : content.toLowerCase()}/read`,
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

  const nowYear = new Date().getFullYear();

  const years = [
    { value: nowYear, name: nowYear },
    { value: nowYear - 1, name: nowYear - 1 },
    { value: nowYear - 2, name: nowYear - 2 },
    { value: nowYear - 3, name: nowYear - 3 },
    { value: nowYear - 4, name: nowYear - 4 },
  ];

  const handleYear = async (e) => {
    // event handler
    const year = e.target.value;

    if (year !== "default") {
      try {
        if (content === "PUBLCATION") {
          const response = await axios.get(`/thesis/search/year?year=${year}`);
          setThesisPosts(response.data);
          return;
        }

        if (content === "PATENT") {
          const response = await axios.get(`/patent/search/year?year=${year}`);
          setPatentPosts(response.data);
        }
      } catch (error) {
        switch (error.response.status) {
          case 400:
            content === "PUBLCATION"
              ? setThesisPosts(null)
              : setPatentPosts(null);
            break;
          default:
            console.log(error);
        }
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
        `/${content === "PUBLCATION" ? "thesis" : "patent"}/search/title?word=${encodeURIComponent(
          searchText
        )}`
      );
      content === "PUBLCATION"
        ? setThesisPosts(response.data)
        : setPatentPosts(response.data);
    } catch (error) {
      // // 디버그 코드
      // content === "PUBLCATION"
      //   ? setThesisPosts(sampleThesis)
      //   : setPatentPosts(samplePatent);
      // //
      switch (error.response.status) {
        case 400:
          content === "PUBLCATION"
            ? setThesisPosts(null)
            : setPatentPosts(null);
          break;
        default:
          console.log(error);
      }
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
        `/${content === "PUBLCATION" ? "thesis" : "patent"}/search/all?page=${page - 1}`
      );
      content === "PUBLCATION"
        ? setThesisPosts(response.data)
        : setPatentPosts(response.data);
    } catch (error) {
      switch (error.response.status) {
        case 400:
          content === "PUBLCATION"
            ? setThesisPosts(null)
            : setPatentPosts(null);
          break;
        default:
          console.log(error);
      }
      // // 디버그 코드
      // content === "PUBLCATION"
      //   ? setThesisPosts(sampleThesis)
      //   : setPatentPosts(samplePatent);
      // //
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
    getThesisPatent(content);
    // getThesisPatentYear(content);
  }, [content, page]);

  const [showContent, setShowContent] = useState(false);
  return (
    <>
      <main className={styles.main}>
        <AdminNavbar />
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
      <OutComes id="outcomes">
        <ThesisButton
          onClick={() => {
            setContent("PUBLCATION");
            setUpload(false);
            setPage(1);
            // setPosts(sampleThesis);
          }}
          content={content}
          id="new_notice"
        >
          PUBLCATION
        </ThesisButton>
        <PatenteButton
          onClick={() => {
            setContent("PATENT");
            setUpload(false);
            setPage(1);
            // setPosts(samplePatent);
          }}
          content={content}
        >
          PATENT
        </PatenteButton>
      </OutComes>
      <ContentsWrapper>
        {content === "PUBLCATION" ? (
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
                  <FunctionWrapper>
                    <UploadButton onClick={handleUpload}>파일 업로드</UploadButton>
                    <SelectYearWrapper>
                      <SelectYear onChange={handleYear}>
                        <option value="default" selected>연도</option>
                        {years.map((years) => (
                          <option
                            key={years.value}
                            value={years.value}
                          >
                            {years.name}
                          </option>
                        ))}
                      </SelectYear>
                      <IconSVG
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10 14L16 6H4L10 14Z"
                          fill="#1A1A1A"
                        />
                      </IconSVG>
                    </SelectYearWrapper>
                    <Search placeholder="검색" onChange={changeSearch} />
                    <IconWrapper>
                      <Icon src={SearchIcon} onClick={handleSearch}></Icon>
                    </IconWrapper>
                  </FunctionWrapper>
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
                              width: "7.5vw",
                              height: "84px",
                              background: "#D5D5D5 0% 0% no-repeat padding-box",
                              opacity: 1,
                            }}
                          >
                            <RowTitle>업로드 파일</RowTitle>
                          </td>
                          <td
                            style={{
                              display: "flex",
                              // width: "1078px",
                              width: "62.3vw",
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
                                width: "50vw",
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
                        width: "100%",
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
                      <TableTitleData style={{ width: "5%" }}>No</TableTitleData>
                      <TableTitleData style={{ width: "6%" }}>Year</TableTitleData>
                      <TableTitleData style={{ width: "30%" }}> Title</TableTitleData>
                      <TableTitleData style={{ width: "16%" }}>Authors</TableTitleData>
                      <TableTitleData style={{ width: "16%" }}>Journal</TableTitleData>
                      <TableTitleData style={{ width: "8%" }}>IF</TableTitleData>
                      <TableTitleData style={{ width: "8%" }}>JCR</TableTitleData>
                      <TableTitleData style={{ width: "8%" }}>DOI</TableTitleData>
                    </TableTitle>
                    {thesisPosts && (
                      <>
                        {thesisPosts.content.map((PUBLCATION) => {
                          return (
                            <TableRow key={PUBLCATION.id}>
                              <TableData>{PUBLCATION.id}</TableData>
                              <TableData>{PUBLCATION.year}</TableData>
                              <TableData style={{ maxWidth: "300px" }}>
                                {PUBLCATION.title}
                              </TableData>
                              <TableData>{PUBLCATION.authors}</TableData>
                              <TableData>{PUBLCATION.journal}</TableData>
                              <TableData>{PUBLCATION.iif}</TableData>
                              <TableData>{PUBLCATION.jcr}</TableData>
                              <TableData><a href={PUBLCATION.doi}>{PUBLCATION.doi}</a></TableData>
                            </TableRow>
                          );
                        })}
                      </>
                    )}
                  </tbody>
                </Table>
              )}
              {thesisPosts && (
                <footer
                  style={{
                    // position: "relative",
                    // top: "270px",
                    // right: "10px",
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
            </ThesisContainer>

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
                  <FunctionWrapper>
                    <UploadButton onClick={handleUpload}>파일 업로드</UploadButton>
                    <SelectYearWrapper>
                      <SelectYear onChange={handleYear}>
                        <option value="default" selected>연도</option>
                        {years.map((years) => (
                          <option
                            key={years.value}
                            value={years.value}
                          >
                            {years.name}
                          </option>
                        ))}
                      </SelectYear>
                      <IconSVG
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10 14L16 6H4L10 14Z"
                          fill="#1A1A1A"
                        />
                      </IconSVG>
                    </SelectYearWrapper>
                    <Search placeholder="검색" onChange={changeSearch} />
                    <IconWrapper>
                      <Icon src={SearchIcon} onClick={handleSearch}></Icon>
                    </IconWrapper>
                  </FunctionWrapper>
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
                              width: "7.5vw",
                              height: "84px",
                              background: "#D5D5D5 0% 0% no-repeat padding-box",
                              opacity: 1,
                            }}
                          >
                            <RowTitle>업로드 파일</RowTitle>
                          </td>
                          <td
                            style={{
                              display: "flex",
                              // width: "1078px",
                              width: "62.3vw",
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
                                width: "50vw",
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
                        width: "100%",
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
                <>
                  <Table>
                    <tbody>
                      <TableTitle>
                        <TableTitleData style={{ width: "10%" }}>연번</TableTitleData>
                        <TableTitleData style={{ width: "15%" }}>출원일자</TableTitleData>
                        <TableTitleData style={{ width: "17%" }}>출원등록구분</TableTitleData>
                        <TableTitleData >출원등록명</TableTitleData>
                        <TableTitleData style={{ width: "30%" }}>발명자명</TableTitleData>
                      </TableTitle>

                      {patentPosts &&
                        patentPosts.content.map((patent) => {
                          return (
                            <TableRow key={patent.id}>
                              <TableData>{patent.id}</TableData>
                              <TableData>{patent.date}</TableData>
                              <TableData>{patent.submit}</TableData>
                              <TableData style={{ maxWidth: "300px" }}>
                                {patent.title}
                              </TableData>
                              <TableData>{patent.author}</TableData>
                            </TableRow>
                          );
                        })}
                    </tbody>
                  </Table>
                </>
              )}
              {patentPosts && (
                <footer>
                  <Pagination
                    total={patentPosts.totalPages}
                    page={page}
                    setPage={setPage}
                    pageSize={patentPosts.size}
                  />
                </footer>
              )}
            </PatentContainer>

          </>
        )}
      </ContentsWrapper>

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

const OutComes = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const ContentsWrapper = styled.div`
  display:flex;
  justify-content: center;
  // background: green;
  width: 100vw;
  heigth: 100%;
  margin-top: 150px;
`;

const FunctionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 40px;
  // background : red;
  width: 100%;
  // margin-right: 26.5%;
`;

const SelectYearWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  `
  ;

const SelectYear = styled.select`
  background: #D3D3D35C 0% 0% no-repeat padding-box;
  border: 0px;
  height: 4.6vh;
  margin-left: 20px;
  margin-right: -20px;
  width: 129px;
  padding: 0 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-align: left;
  font: normal normal normal 16px/30px sans-serif;
  font-size: 0.8vw;
  letter-spacing: 0px;
  color: #171717;
  opacity: 0.7;
`;

const IconSVG = styled.svg`
	margin-left: -28px;
	width: 24px;
	height: 24px;
`;
const ThesisButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 18vh;
  background: 0% 0% no-repeat padding-box;
  background-color: ${(props) =>
    props.content === "PUBLCATION" ? "#ffffff" : "#447bfb"};
  opacity: 1;

  font: var(--unnamed-font-style-normal) normal bold 33px/70px
    var(--unnamed-font-family-sans-serif);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal bold 33px/70px sans-serif;
  font-size: 1.8vw;
  letter-spacing: 0px;
  color: ${(props) => (props.content === "PUBLCATION" ? "#447bfb" : "#ffffff")};
  text-transform: uppercase;
  opacity: 1;
  text-align: center;
  border-style: none;
`;
const PatenteButton = styled.button`
  width: 50vw;
  height: 18vh;
  background: 0% 0% no-repeat padding-box;
  background-color: ${(props) =>
    props.content === "PUBLCATION" ? "#447bfb" : "#ffffff"};
  opacity: 1;

  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal bold 33px/70px sans-serif;
  letter-spacing: 0px;
  color: ${(props) => (props.content === "PATENT" ? "#447bfb" : "#ffffff")};
  text-transform: uppercase;
  opacity: 1;
  text-align: center;
  border-style: none;
  font-size: 1.8vw;
`;

const ThesisContainer = styled.div`
display:flex;
flex-direction: column;
align-items: center;  
height: 1500px;
  // width: 1250px;
  width: 70vw;
  // background: red;
`;
const PatentContainer = styled.div`
  height: 1500px;
  width: 70vw;
  // background: red;
  
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
  display: flex;
  border: none;
  // width: 132px;
  width: 7vw;
  // height: 46px;
  height: 4.6vh;
  /* UI Properties */
  background: #d3d3d35c 0% 0% no-repeat padding-box;
  opacity: 1;
  /* text-align: center; */
  justify-content: center;
  align-items: center;
  font: normal normal normal 16px/30px sans-serif;
  font-size: 0.8vw;
  letter-spacing: 0px;
  color: #171717;
  opacity: 0.7;
`;
const Search = styled.input`
  margin-left: 30px;
  // width: 280px;
  width: 10.5vw;
  // height: 46px;
  height: 4.6vh;
  background: #d3d3d35c 0% 0% no-repeat padding-box;
  opacity: 1;
  border: none;
  padding-left: 20px;
  font-size: 0.8vw;
`;
const IconWrapper = styled.div`
display: flex;
align-items: center;
height: 4.9vh;    
background: #efefef;
padding: 0 30px;
`;

const Icon = styled.img`
  width: 25px;
  height: 25px;
  
`;
const Table = styled.table`
  width: 100%;
  height: auto;
  opacity: 1;
  border-spacing: 0px;
  border-top: 2px solid #414ffd;
  border-bottom: 2px solid #447bf7;
  table-layout: fixed;
  word-break : break-all; 
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
  // padding: 10px;
`;
const TableData = styled.td`
  border-bottom: 1px solid #b4b4b4;
  padding: 10px;
  border-right: none;
  white-space: pre-line;

  & > a:visited {
    color: blueviolet;
  }
`;

const UploadContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  // height: 274px;
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
  font-size: 1.8vw;
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
