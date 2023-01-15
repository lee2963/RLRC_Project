import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ContentBar from "../components/ContentBar";
import ContentIndex from "../components/ContentIndex";
import Navbar from "../components/Navbar";
import styles from "../styles/newNotice.module.css";
import styled from "styled-components";
function Detail() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [detailData, setDetailData] = useState(null);
  const [showContent, setShowContent] = useState(false);
  const [imageName, setImageName] = useState("");
  const id = state ? state[0] : 0;
  const content = state ? state[1] : "";

  const getDetailData = async (content, id) => {
    try {
      const response = await axios.get(`/${content}/${id}`);
      console.log(response);
      setDetailData(response.data);
      setImageName(response.data.imageFile.storeFileName);
    } catch (error) {
      console.log(error);
    }
  };
  const downloadFile = async (fileId) => {
    const url = `/${content}/attach/${fileId}`;
    const download = document.createElement("a");
    download.href = url;
    download.setAttribute("download", imageName);
    download.setAttribute("type", "application/json");
    download.click();
  };

  useEffect(() => {
    getDetailData(content, id);
  }, [content, id]);

  return (
    <main className={styles.main}>
      <Navbar />
      <ContentBar setShow={setShowContent} />
      {showContent && (
        <ContentIndex setShow={setShowContent} isShow={showContent} />
      )}
      <div className={styles.selectionbar}>
        <div className={styles.selection_line_white} />
        <div className={styles.selection_line_grey} />
        <ul className={styles.selectionbar_menu}>
          <Link
            to="/"
            id={styles.selectbar_content}
            className="select_rlrc"
            style={{
              textDecoration: "none",
            }}
          >
            ABOUT RLRC
          </Link>
          <Link
            to="/Research"
            id={styles.selectbar_content}
            className="slelect_research"
            style={{
              textDecoration: "none",
            }}
          >
            RESEARCH
          </Link>
          <Link
            to="/NewNotice"
            id={styles.selectbar_content}
            className="select_new_notice"
            style={{
              textDecoration: "none",
            }}
          >
            NEW & NOTICE
          </Link>
        </ul>
      </div>
      <Title>NEWS & NOTICE</Title>
      <NewsButton
        onClick={() => {
          navigate("/NewNotice");
        }}
        content={content}
        id="new_notice"
      >
        NEWS
      </NewsButton>
      <NoticeButton
        onClick={() => {
          navigate("/NewNotice");
        }}
        content={content}
      >
        NOTICE
      </NoticeButton>
      <DetailContainer>
        <DetailTitle>
          <TitleText>{detailData && <span>{detailData.title}</span>}</TitleText>
        </DetailTitle>
        <DetailProperties>
          <h3 style={{ marginLeft: "10px", marginRight: "10px" }}>등록일</h3>
          <span style={{ fontSize: "18px" }}>
            {detailData && <span>{detailData.date}</span>}
          </span>
        </DetailProperties>
        <DetailProperties
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <h3 style={{ marginLeft: "10px", marginRight: "10px" }}>첨부파일</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "1000px",
            }}
          >
            {detailData &&
              detailData.attachFile.map((item) => {
                return (
                  <span
                    style={{
                      fontSize: "18px",
                      marginLeft: "15px",
                      textDecorationLine: "underline",
                    }}
                    onClick={() => {
                      downloadFile(item.id);
                    }}
                  >
                    {item.uploadFileName}
                  </span>
                );
              })}
          </div>
        </DetailProperties>
        {detailData && (
          <DetailContent>
            {imageName && <DetailImage src={`/notice/image/${imageName}`} />}
            <br />
            <br />
            <br />
            {detailData.content}
          </DetailContent>
        )}
      </DetailContainer>
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
    var(--unnamed-font-family-sans-serif);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal bold 80px/70px sans-serif;
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
    var(--unnamed-font-family-sans-serif);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal bold 33px/70px sans-serif;
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
`;
const DetailContainer = styled.div`
  position: absolute;
  top: 1440px;
  height: 1800px;
  width: 1246px;
  left: 338px;
  border-top: 3px solid #447bf7;
`;
const DetailTitle = styled.div`
  display: flex;
  width: 1246px;
  height: 84px;
  background: #f4f4f4 0% 0% no-repeat padding-box;
  opacity: 1;
  font: var(--unnamed-font-style-normal) normal bold 20px /
    var(--unnamed-line-spacing-28) var(--unnamed-font-family-sans-serif);
  letter-spacing: var(--unnamed-character-spacing-0);
  vertical-align: center;
  justify-content: flex-start;
  align-items: center;
  font: normal normal bold 20px/28px sans-serif;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`;
const TitleText = styled.p`
  position: relative;
  left: 45px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const DetailProperties = styled.div`
  height: 53px;
  width: 1246px;
  background-color: white;
  border-bottom: 1px solid #b4b4b4;
  opacity: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  font: var(--unnamed-font-style-normal) normal medium 20px/30px
    var(--unnamed-font-family-sans-serif);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal medium 20px/30px sans-serif;
  letter-spacing: 0px;
  color: #535353;
  opacity: 1;
`;
const DetailContent = styled.div`
  padding: 66px;
  height: 1200px;
  width: 1115px;
  border-bottom: 1px solid #b4b4b4;
  opacity: 1;
  line-height: 2;
  overflow: scroll;
  white-space: pre-wrap;
`;
const DetailImage = styled.img`
  position: relative;
  width: 500px;
  height: 500px;
  left: 250px;
`;
export default Detail;
