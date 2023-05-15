import ProfessorTableJS from "./ProfessorTable.container";

export default function ProfessorTable(props) {
    return (
        <ProfessorTableJS
            setIsVisible={props.setIsVisible}
            setShowIntro={props.setShowIntro}
        />
    )
}