import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import backgroundImg from "../static/images/Landing.png";
function Landing() {
    const navigate = useNavigate();
    return (
        <LandingContainer>
            <LinkButton onClick={() => {
                navigate("/AboutRLRC");
            }}>홈페이지 바로가기</LinkButton>
        </LandingContainer>
    );
}

const LandingContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    background-image: url(${backgroundImg});
    width: 100vw;
    height: 100vh;
    min-width: 1080px;
    background-size: cover;

`;

const LinkButton = styled.button`
    background: #447BF7 0% 0% no-repeat padding-box;
    border-radius: 30px;
    border: 0px;
    width: 230px;
    height: 60px;
    font: normal normal bold 18px/30px Roboto;
    letter-spacing: 0px;
    color: #FFFFFF;
    margin-right: 12.500vw;
    margin-bottom: 12.685vh;
`;



export default Landing;
