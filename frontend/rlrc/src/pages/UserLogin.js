import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import styled from "styled-components";
import loginImage from "../static/images/LoginImage.png";
import swal from "sweetalert";
import PathSelection from "../components/PathSelection";
// import { useDispatch } from "react-redux";
// import userSlice from "../slices/user";
function UserLogin() {
  // const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [checkLogin, setCheckLogIn] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) {
      return;
    }
    if (!userId || !userId.trim()) {
      //trim은 좌우 공백 없애는 함수
      return swal("이메일을 입력해주세요");
    }
    if (!password || !password.trim()) {
      return swal("비밀번호를 입력해주세요");
    }
    try {
      setLoading(true);
      const response = await axios.post(`/login`, {
        loginId: userId,
        password: password,
      });
      swal("로그인 되었습니다.");
      setLoading(false);
      setCheckLogIn(true);
    } catch (error) {
      setLoading(false);
      const errorResponse = error.response;
      if (errorResponse) {
        swal("회원정보와 일치하지 않습니다.");
      }
    }
  };
  const receiveLoginStatus = async () => {
    try {
      const response = await axios.get("/check-login");
      // console.log(response.data);
      setCheckLogIn(true);
    } catch (error) {
      // setCheckLogIn(true); 로그인 스킵 코드
      setCheckLogIn(false);
    }
  };
  const handleId = useCallback((e) => {
    setUserId(e.currentTarget.value);
  }, []);
  const handlePassword = useCallback((e) => {
    setPassword(e.currentTarget.value);
  }, []);
  useEffect(() => {
    receiveLoginStatus();
  });
  return (
    <>
      {checkLogin ? (
        <PathSelection />
      ) : (
        <MainContaniner>
          <Container>
            <Image src={loginImage}></Image>
            <LoginForm onSubmit={handleSubmit}>
              <InputWrapper>
                <IdLabel htmlFor="userId">ID</IdLabel>
                <IdInput
                  type="text"
                  id="userId"
                  onChange={handleId}
                  value={userId}
                />
              </InputWrapper>

              <InputWrapper>
                <PasswordLabel htmlFor="password" > Password </PasswordLabel>
                <PasswordInput
                  id="password"
                  type="password"
                  onChange={handlePassword}
                  value={password}
                />
              </InputWrapper>
              <Button type="submit">Login</Button>
            </LoginForm>
          </Container>
        </MainContaniner>
      )}
    </>
  );
}

const MainContaniner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Container = styled.main`
  width: 1190px;
  height: 738px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 3px 7px 33px #00000029;
  opacity: 1;

  display: flex;
  flex-direction: row;
`;
const Image = styled.img`
  // position: relative;
  width: (1190 / 2) px;
  height: 738px;
`;

const LoginForm = styled.form`
  // position: absolute;
  // top: 200px;
  // left: 580px;
  // display: flexbox;
  // align-items: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid #2680eb;
  margin-bottom: 30px;
  width: 391px;
`;


const IdInput = styled.input`
  // position: relative;
  // top: -3px;
  // left: 140px;
  width: 100%;
  height: 35px;
  text-align: left;
  font: normal normal 25px sans-serif;
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
  // position: relative;
  // left: 118px;
  // width: 17px;


  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal 25px sans-serif;
  letter-spacing: 0px;
  color: #2680eb;
  opacity: 1;
  margin-right: 36px;
`;
const PasswordInput = styled.input`
  // position: relative;
  // top: 73px;
  // left: 140px;

  width: 100%;
  height: 35px;
  text-align: left;
  font: normal normal 25px sans-serif;
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
  font: normal normal 25px sans-serif;
  letter-spacing: 0px;
  color: #2680eb;
  opacity: 1;
  margin-right: 36px;
`;

const Button = styled.button`
  // position: relative;
  // top: 210px;
  // right: 110px;
  margin-top: 60px;
  width: 176px;
  height: 43px;
  background: #2576f8 0% 0% no-repeat padding-box;
  opacity: 1;
  font: var(--unnamed-font-style-normal) normal medium 18px/21px
    var(--unnamed-font-family-sans-serif);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  text-align: left;
  font: normal normal medium 18px/21px sans-serif;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  text-align: center;
  border: none;
`;
export default UserLogin;
