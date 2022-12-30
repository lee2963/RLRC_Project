import React, { useState, useCallback } from "react";
import axios from "axios";
import styled from "styled-components";
import loginImage from "../static/images/LoginImage.png";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import userSlice from "../slices/user";

function UserLogin() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [logIn, setLogIn] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) {
      return;
    }
    if (!userId || !userId.trim()) {
      //trim은 좌우 공백 없애는 함수
      return alert("이메일을 입력해주세요");
    }
    if (!password || !password.trim()) {
      return alert("비밀번호를 입력해주세요");
    }
    try {
      setLoading(true);
      const response = await axios.post(`/login`, {
        loginId: userId,
        password: password,
      });
      alert("로그인 되었습니다.");
      setLoading(false);
      setLogIn(true);
      // dispatch(
      //   userSlice.actions.setUserInfo({
      //     userId: response.data.customeruserId,
      //     isLogIn: response.data.logIn,
      //   })
      // );
      navigate("/PathSelection");
    } catch (error) {
      setLoading(false);
      const errorResponse = error.response;
      if (errorResponse) {
        alert("회원정보와 일치하지 않습니다.");
      }
    }
  };
  const handleId = useCallback((e) => {
    setUserId(e.currentTarget.value);
  }, []);
  const handlePassword = useCallback((e) => {
    setPassword(e.currentTarget.value);
  }, []);
  return (
    <Container>
      {logIn ? (
        <></>
      ) : (
        <>
          <Image src={loginImage}></Image>
          <LoginForm onSubmit={handleSubmit}>
            <IdLabel htmlFor="userId">ID</IdLabel>
            <IdInput
              type="text"
              id="userId"
              onChange={handleId}
              value={userId}
            />
            <LineId />
            <br />
            <PasswordLabel htmlFor="password" value={password}>
              Password
            </PasswordLabel>
            <PasswordInput
              id="password"
              type="password"
              onChange={handlePassword}
            />
            <LinePassword />
            <Button type="submit">Login</Button>
          </LoginForm>
        </>
      )}
    </Container>
  );
}

const Container = styled.main`
  position: absolute;
  top: 90px;
  left: 18%;
  width: 1190px;
  height: 738px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 3px 7px 33px #00000029;
  opacity: 1;
`;
const Image = styled.img`
  position: relative;
  width: (1190 / 2) px;
  height: 738px;
`;

const LoginForm = styled.form`
  position: absolute;
  top: 200px;
  left: 580px;
  height: 200px;
  width: 50%;
  align-items: center;
  display: flexbox;
`;

const IdInput = styled.input`
  position: relative;
  top: -3px;
  width: 200px;
  height: 35px;
  left: 140px;
  text-align: left;
  font: normal normal 25px Roboto;
  letter-spacing: 0px;
  color: #363636;
  opacity: 1;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  border: none;
`;
const IdLabel = styled.label`
  position: relative;
  left: 118px;
  width: 17px;
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal 25px Roboto;
  letter-spacing: 0px;
  color: #2680eb;
  opacity: 1;
`;
const PasswordInput = styled.input`
  position: relative;
  top: 73px;
  left: 140px;
  width: 200px;
  height: 35px;
  text-align: left;
  font: normal normal 25px Roboto;
  letter-spacing: 0px;
  color: #363636;
  opacity: 1;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  border: none;
`;
const PasswordLabel = styled.label`
  position: relative;
  left: 118px;
  top: 75px;
  width: 80px;
  height: 21px;
  font: normal normal 25px Roboto;
  letter-spacing: 0px;
  color: #2680eb;
  opacity: 1;
`;
const LineId = styled.span`
  position: absolute;
  top: 110px;
  left: 120px;
  background-color: #2680eb;
  width: 350px;
  height: 2px;
`;
const LinePassword = styled.span`
  position: absolute;
  top: 220px;
  left: 120px;
  background-color: #2680eb;
  width: 350px;
  height: 2px;
`;
const Button = styled.button`
  position: relative;
  top: 210px;
  right: 110px;
  width: 176px;
  height: 43px;
  background: #2576f8 0% 0% no-repeat padding-box;
  opacity: 1;

  font: var(--unnamed-font-style-normal) normal medium 18px/21px
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  text-align: left;
  font: normal normal medium 18px/21px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  text-align: center;
  border: none;
`;
export default UserLogin;
