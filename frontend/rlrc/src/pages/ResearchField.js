import React from "react";
import JooSangWoo from "../components/JooSangWoo";
import RhoJunSuk from "../components/RhoJunSuk";
import ParkJuHyun from "../components/ParkJuHyun";
import JeonSangMin from "../components/JeonSangMin";
import KimHaeKyoung from "../components/KimHaeKyoung";
import JungHoYoul from "../components/JungHoYoul";
import KangMiSook from "../components/KangMiSook";
import KangSeokWon from "../components/KangSeokWon";
import { useLocation } from "react-router";
const professorComponent = {
  Joo: <JooSangWoo />,
  Rho: <RhoJunSuk />,
  Park: <ParkJuHyun />,
  Jeon: <JeonSangMin />,
  Kyoung: <KimHaeKyoung />,
  Youl: <JungHoYoul />,
  Sook: <KangMiSook />,
  Won: <KangSeokWon />,
};
function ResearchField(props) {
  const { state } = useLocation();
  const professor = Object.values(state)
    .slice(0, Object.values(state).length)
    .join("");
  console.log(professor);
  return <div>{professorComponent[professor]}</div>;
}

export default ResearchField;
