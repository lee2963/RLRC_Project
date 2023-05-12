import styled from "styled-components";
import { Link } from "react-router-dom";
import AboutRLRC from '../../../static/images/AboutRLRC.png'
import VISIONMISSION from '../../../static/images/VISIONMISSION.png'

export const ScrollContainer = styled.div`
  overflow: auto;
  scroll-snap-type: y mandatory;
  height: 100vh;
`;

export const main = styled.div`
  position: relative;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-image:  url(${AboutRLRC});
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  opacity: 1;
  scroll-snap-align: start;
`

export const CardComponent = styled.div`
  display: inline-flex;
  justify-content: center;
  width: auto;
`;
export const Image = styled.img`
  position: relative;
  width: 11vw;
  height: 33.5vw;
  padding: 10px;
  object-fit: cover;
  transition-duration: 0.25s;
  &:hover {
    width: 17vw;
    height: 33.5vw;
  }
`;

export const SelectionLineWhite = styled.div`
  position: relative;
  top: 2px;
  background-color: #ffffff;
  width: 160px;
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

export const SelectionBarCotainer = styled.div`
  position: absolute;
  float: left;
  top: 250px;
  left: 200px;
  width: auto;
  height: auto;
`;

export const VisionMission = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${VISIONMISSION});
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  opacity: 1;
  scroll-snap-align: start;
`

export const KeyProject = styled.div`
  position: relative;
  width: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  height: 100%;
  scroll-snap-align: start;
`;

export const KeyProjectTitle = styled.h4`
  position: relative;
  text-decoration: none;
  top: 100px;
  text-align: center;
  width: auto;
  font: normal normal bold 40px/36px sans-serif;
  letter-spacing: 0px;
  color: black;
  opacity: 1;
`;

export const KeyProjectContents = styled.div`
  position: relative;
  top: calc(135px * 0.8);
  height: auto;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
`

export const PartnersContainer = styled.div`
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  
`;

export const KeyProjectContainer = styled.div`
  background-color: red;
`;

export const PartnersTitle = styled.img`
  width: 100vw;
  height: 35vh;
`;

export const Partners = styled.img`
  width: 54%;
  height: auto;
  margin-top: 50px;
  margin-left: 24.2%;

`;

export const InfoContainer = styled.div`
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MapWrapper = styled.div`
  width: 75vw;
  height: 74vh;
`;

export const MapTitle = styled.span`
  font: normal normal bold 33px/39px sans-serif;
  color: #191919;
  margin: 40px 0 0 0;
  display: inline-block;
`;

export const Map = styled.div`
  width: 100%;
  height: 60%;
  background-color: #c8c8c8;
  margin: 23px 0;
`;

export const AddressInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;`;

export const AddressText = styled.span`
  font: normal normal normal 20px/24px Apple SD Gothic Neo ;
  color: #707070;
  margin-bottom: 10px;
`;

export const TelText = styled.span`
  font: normal normal normal 16px/24px Noto Sans CJK KR;
  letter-spacing: -0.16px;
  color: #818181;
`;

export const FaxText = styled.span`
  font: normal normal normal 16px/24px Noto Sans CJK KR;
  letter-spacing: -0.16px;
  color: #818181;
`;