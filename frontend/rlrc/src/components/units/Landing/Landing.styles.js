import styled from "styled-components";
import { backgroundImg } from "./Landing.images";

export const LandingContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    background-image: url(${backgroundImg});
    background-size: 100vw 100vh; 
    width: 100vw;
    height: 100vh;
`;

export const LinkButton = styled.button`
    background: #447BF7 0% 0% no-repeat padding-box;
    border-radius: 30px;
    border: 0px;
    width: 230px;
    height: 60px;
    font: normal normal bold 18px/30px sans-serif;
    letter-spacing: 0px;
    color: #FFFFFF;
    margin-right: 12.500vw;
    margin-bottom: 12.685vh;
`;