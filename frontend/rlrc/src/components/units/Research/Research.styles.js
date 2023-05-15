import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import RESEARCH from '../../../static/images/RESEARCH.png'

export const main = styled.div`
  position: relative;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-image:  url(${RESEARCH});
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  opacity: 1;
  scroll-snap-align: start;
  `;

export const SelectionBarCotainer = styled.div`
  position: absolute;
  float: left;
  top: 250px;
  left: 200px;
  width: auto;
  height: auto;
`;

export const SelectionLineWhite = styled.div`
  position: relative;
  background-color: #ffffff;
  top: 2px;
  left: 170px;
  width: 190px;
  height: 2px;
  z-index: 10;
`;

export const SelectionLineGray = styled.div`
  background-color: rgba(221, 221, 221, 0.674);
  width: 800px;
  height: 2px;
`;

export const SelectionBarMenu = styled.ul`
  color: #ffffff;
  width: auto;
`;

export const StyledLink = styled((props) => <Link {...props} />)`
  &:link {
    color: white;
  }
  text-decoration: none;
  float: left;
  margin-top: 21.5px;
  position: relative;
  width: auto;
  height: 19px;
  text-align: left;
  font: normal normal 16px/19px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  letter-spacing: 0px;
  opacity: 1;
  margin-left: 50px;
  margin-right: 70px;
  color: ${props => props.selected ? 'white' : "#AAAAAA"};
`;

export const SectionTitle = styled.h2`
  position: relative;
  left: 150px;
  width: 90%;
  margin-top: 7%;
  text-align: center;
  font: normal normal bold 42px/49px sans-serif;
  letter-spacing: 0px;
  color: #191919;
  opacity: 1;
`;

export const MaterialGroup = styled.div`
  width: 100%;
  height: auto;
  background: white 0% 0% no-repeat padding-box;
  opacity: 1;
`;

export const MaterialTitle = styled.div`
  position: relative;
  left: -25px;
  width: auto;
  height: auto;
  text-align: center;
  font: normal normal bold 42px sans-serif;
  letter-spacing: 0px;
  color: #191919;
  opacity: 1;
  z-index: 1;
`;

export const MaterialIcon = styled.img`
  position: relative;
  left: 100px;
  top: 60px;
  width: 217px;
  height: 220px;
`;

export const MeterialCarousel = styled.div`
  position: relative;
  margin-top: 135px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Introduction = styled.div`
  position: relative;
  top: 405px;
  width: 100%;
  background: #f0f0f0 0% 0% no-repeat padding-box;
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const IntroductionImage = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;
  opacity: ${(props) => (props.visible ? 1 : 0.5)};
  animation: ${(props) => (props.visible ? fadeIn : fadeOut)} 0.5s ease-in-out;
  transition: opacity 0.1s ease;
`;

export const ButtonContainer = styled.table`
  position: absolute;
  margin-left: 3%;
  left: 50%;
  top: 50%;
  width: 45%;
  height: 27vw;
`;

export const Button = styled.button`
  width: 80%;
  height: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  text-align: center;
  vertical-align: center;
  border-width: 0px;
  font: normal normal bold 1.3vw sans-serif;
  letter-spacing: 0px;
  color: black;
  opacity: 1;
  &:hover {
    background-color: #3561f5;
    color: white;
  }
`;