import React, { useState, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
function FormEditor(props) {
  const navigate = useNavigate();
  const setAddContents = props.setAddContents;
  const currentContent = props.content;
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState([]);
  const [selectedImageName, setSelectedImageName] = useState("");
  const input = useRef(null);
  const inputImage = useRef(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (title === "" || content === "") {
      alert("제목과 내용을 입력해주세요");
      return;
    }
    const formData = new FormData();
    formData.append("title", title);
    if (selectedFile) {
      selectedFile.forEach((file) => formData.append("attachFiles", file));
    }
    selectedImage && formData.append("imageFile", selectedImage);
    formData.append("content", content);
    try {
      const response = await axios.post(
        `/admin/${currentContent}/save`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("성공");
      console.log(response);
      setAddContents(false);
      window.location.reload();
    } catch (error) {
      if (error.status === 400) {
        navigate("/Login");
      }
    }
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };
  const handleFileSelect = (event) => {
    const fileNames = Array.from(event.target.files).map((ele) => ele.name);
    setSelectedFileName(fileNames);
    setSelectedFile(Array.from(event.target.files));
  };

  const handleImageSelect = (event) => {
    const image = event.target.files[0];
    console.log(image.width, image.height);
    setSelectedImageName(image.name);
    setSelectedImage(image);
  };
  const toAdminHome = () => {
    setAddContents(false);
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <table
        style={{
          position: "relative",
          borderCollapse: "separate",
          borderSpacing: "0 8px",
          right: "5em",
        }}
      >
        <tbody>
          <tr>
            <td
              style={{
                width: "160px",
                height: "84px",
                background: "#D5D5D5 0% 0% no-repeat padding-box",
                opacity: 1,
                borderTopWidth: "3px",
                borderTopColor: "#447BF7",
                borderTopStyle: "solid",
              }}
            >
              <RowTitle>제목</RowTitle>
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
                borderTopWidth: "3px",
                borderTopColor: "#447BF7",
                borderTopStyle: "solid",
              }}
            >
              <input
                style={{
                  width: "996px",
                  height: "47px",
                  background: "#FFFFFF 0% 0% no-repeat padding-box",
                  border: "0.4000000059604645px solid",
                  borderColor: "rgb(112 112 112 / 27%)",
                  opacity: 1,
                }}
                type="text"
                value={title}
                onChange={handleTitleChange}
              />
            </td>
          </tr>
          <tr>
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
                multiple
              ></input>
              <label
                htmlFor="file"
                style={{
                  display: "inline-block",
                  padding: "0px 20px",
                  color: "#fff",
                  verticalAlign: "middle",
                  backgroundColor: "#999999",
                  cursor: "pointer",
                  marginLeft: "10px",
                  textAlign: "center",
                  width: "83px",
                  height: "47px",
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
          <tr>
            <td
              style={{
                width: "160px",
                height: "84px",
                background: "#D5D5D5 0% 0% no-repeat padding-box",
                opacity: 1,
              }}
            >
              <RowTitle>이미지</RowTitle>
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
                ref={inputImage}
                type={"file"}
                onChange={handleImageSelect}
                style={{
                  display: "none",
                }}
                multiple
              ></input>
              <label
                htmlFor="file"
                style={{
                  display: "inline-block",
                  padding: "0px 20px",
                  color: "#fff",
                  verticalAlign: "middle",
                  backgroundColor: "#999999",
                  cursor: "pointer",
                  marginLeft: "10px",
                  textAlign: "center",
                  width: "83px",
                  height: "47px",
                }}
                onClick={() => {
                  inputImage.current?.click();
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
                placeholder={selectedImageName}
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
          <tr>
            <td
              style={{
                width: "160px",
                height: "633px",
                background: "#D5D5D5 0% 0% no-repeat padding-box",
                opacity: "1",
              }}
            >
              <RowTitle>내용</RowTitle>
            </td>
            <td
              style={{
                display: "flex",
                width: "1078px",
                height: "633px",
                background: "#F4F4F4 0% 0% no-repeat padding-box",
                opacity: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <textarea
                style={{
                  width: "996px",
                  height: "586px",
                  background: "#FFFFFF 0% 0% no-repeat padding-box",
                  border: "0.4000000059604645px solid",
                  borderColor: "rgb(112 112 112 / 27%)",
                  opacity: 1,
                  resize: "none",
                }}
                onChange={handleContentChange}
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          width: "1160px",
          height: "100px",
          marginTop: "60px",
        }}
      >
        <Button style={{ marginRight: "1em" }} onClick={toAdminHome}>
          목록으로
        </Button>
        <Button type="submit" value="Upload File">
          게시하기
        </Button>
      </div>
    </form>
  );
}

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

export default FormEditor;
