import { useNavigate } from "react-router-dom";
import LandingUI from "./Landing.presenter";

export default function Landing() {
    const navigate = useNavigate()
    const toAboutRLRC = () => navigate("/AboutRLRC")
    return (
        <LandingUI toAboutRLRC={toAboutRLRC} />
    )
}