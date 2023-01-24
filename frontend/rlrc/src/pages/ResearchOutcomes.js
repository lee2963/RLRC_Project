import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ContentBar from "../components/ContentBar";
import ContentIndex from "../components/ContentIndex";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import SearchIcon from "../static/search.png";
import styles from "../styles/researchOutcomes.module.css";

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

export default function ResearchOutcomes() {
  const [showContent, setShowContent] = useState(false);
  const [content, setContent] = useState("thesis");
  const [searchText, setSearchText] = useState("");
  // const [years, setYears] = useState(null);
  const [thesisPosts, setThesisPosts] = useState(null);
  const [patentPosts, setPatentPosts] = useState(null);
  const [page, setPage] = useState(1);
  // console.log("env", process.env.production.REACT_APP_API_URL);
  const handleSearch = async (event) => {
    event.preventDefault();
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
  const changeSearch = (event) => {
    setSearchText(event.target.value);
  };

  const getThesisPatent = async (content) => {
    try {
      const response = await axios.get(
        `/${content}/search/all?page=${page - 1}`
      );
      content === "thesis"
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
    // const pageContent = page === 1 ? page1 : page2;
    searchText ? getThesisPatentSearch(content) : getThesisPatent(content);
    // getThesisPatentYear(content);
  }, [content, page]);

  return (
    <>
      <Navbar />
      <ContentBar />
      {showContent && <ContentIndex />}
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
                color: "rgba(221, 221, 221, 0.674)",
              }}
            >
              NEW & NOTICE
            </StyledLink>
          </ul>
        </SelectionBarCotainer>
        <OutComes id="outcomes">
          <ThesisButton
            onClick={() => {
              setContent("thesis");
              setPage(1);
            }}
            content={content}
            id="new_notice"
          >
            THESIS
          </ThesisButton>
          <PatenteButton
            onClick={() => {
              setContent("patent");
              setPage(1);
            }}
            content={content}
          >
            PATENT
          </PatenteButton>
        </OutComes>
        <ContentsWrapper>
          {content === "thesis" ? (
            <>
              <ThesisContainer>
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
                <form onSubmit={handleSearch}>
                  <SearchContainer>
                    <InputContainer>
                      <Search placeholder="검색" onChange={changeSearch} />
                      <Icon src={SearchIcon} onClick={handleSearch}></Icon>
                    </InputContainer>
                  </SearchContainer>
                </form>
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
                {thesisPosts && (
                  <Paginate>
                    <Pagination
                      total={thesisPosts.totalPages}
                      page={page}
                      setPage={setPage}
                      pageSize={thesisPosts.size}
                    />
                  </Paginate>
                )}
              </ThesisContainer>
            </>
          ) : (
            <>
              <PatentContainer>
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
                <form onSubmit={handleSearch}>
                  <SearchContainer>
                    <InputContainer>
                      <Search placeholder="검색" onChange={changeSearch} />
                      <Icon src={SearchIcon} onClick={handleSearch}></Icon>
                    </InputContainer>
                  </SearchContainer>
                </form>
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
                {patentPosts && (
                  <Paginate>
                    <Pagination
                      total={patentPosts.totalPages}
                      page={page}
                      setPage={setPage}
                      pageSize={patentPosts.size}
                    />
                  </Paginate>
                )}
              </PatentContainer>
            </>
          )}
        </ContentsWrapper>
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
const OutComes = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;
const ContentsWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  // background: green;
  width: 100vw;
  margin-top: 200px;
`;
const FunctionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 40px;
`;
const ThesisButton = styled.button`
  position: relative;
  left: 0px;
  width: 50%;
  height: 13vw;
  background: 0% 0% no-repeat padding-box;
  background-color: ${(props) =>
    props.content === "thesis" ? "#ffffff" : "#447bfb"};
  opacity: 1;
  font: normal normal bold 2vw sans-serif;
  letter-spacing: 0px;
  color: ${(props) => (props.content === "thesis" ? "#447bfb" : "#ffffff")};
  text-transform: uppercase;
  opacity: 1;
  text-align: center;
  border-style: none;
`;
const PatenteButton = styled.button`
  position: relative;
  width: 50%;
  height: 13vw;
  background: 0% 0% no-repeat padding-box;
  background-color: ${(props) =>
    props.content === "thesis" ? "#447bfb" : "#ffffff"};
  opacity: 1;

  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal bold 2vw sans-serif;
  letter-spacing: 0px;
  color: ${(props) => (props.content === "patent" ? "#447bfb" : "#ffffff")};
  text-transform: uppercase;
  opacity: 1;
  text-align: center;
  border-style: none;
`;

const ThesisContainer = styled.div`
  position: relative;

  width: 100%;
  height: auto;
`;
const PatentContainer = styled.div`
  position: relative;
  width: 100%;
`;
const SearchContainer = styled.div`
  position: relative;
  width: 90%;
  margin: 0;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: 5.5vw;
`;
const InputContainer = styled.div`
  display: inline-flex;
`;
const Search = styled.input`
  position: relative;
  width: 500px;
  height: 50px;
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

const Table = styled.table`
  position: relative;
  top: 4%;
  width: 90%;
  /* margin: 0; */
  margin-left: 5%;
  height: auto;
  opacity: 1;
  border-spacing: 0px;
  border-top: 2px solid #414ffd;
  border-bottom: 2px solid #447bf7;
  table-layout: fixed;
  word-break: break-all;
  margin-bottom: 3%;
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
`;

const Paginate = styled.div`
  position: relative;
  top: calc(135px * 1);
`;
const StyledLink = styled((props) => <Link {...props} />)`
  &:link {
    color: white;
  }
  text-decoration: none;
`;
