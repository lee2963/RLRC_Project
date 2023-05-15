import { useNavigate } from "react-router-dom";
import { introductions } from "../../Research.images"
import ProfessorTableUI from "./ProfessorTable.presenter";
export default function ProfessorTableJS(props) {
    const navigate = useNavigate();
    const toProfessor = (professor) => {
        navigate("/ResearchField", { state: professor });
    };
    const ButtonMeta = [
        [
            {
                path: "Joo",
                image: introductions[0],
                content: "Joo Sang Woo"
            },
            {
                path: "Rho",
                image: introductions[1],
                content: "Junsuk Rho"
            }
        ],
        [
            {
                path: "Park",
                image: introductions[2],
                content: "Ju Hyun Park"
            },
            {
                path: "Jeon",
                image: introductions[3],
                content: "Sangmin Jeon"
            }
        ],
        [
            {
                path: "Kyoung",
                image: introductions[4],
                content: "Hae Kyoung Kim"
            },
            {
                path: "Youl",
                image: introductions[5],
                content: "Ho-Youl Jung"
            }
        ],
        [
            {
                path: "Sook",
                image: introductions[6],
                content: "Misook Kang"
            },
            {
                path: "Won",
                image: introductions[7],
                content: "Seok-won Kang"
            }
        ],
    ];

    return (
        <ProfessorTableUI
            setIsVisible={props.setIsVisible}
            setShowIntro={props.setShowIntro}
            ButtonMeta={ButtonMeta}
            navigateTo={toProfessor}
        />
    )
}