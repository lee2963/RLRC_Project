import * as S from "./ProfessorTable.style"

export default function ProfessorTableUI(props) {
    return (
        <tbody>
            {props.ButtonMeta.map((row, index) => (
                <tr key={index}>
                    {row.map((item, itemIndex) => (
                        <td key={itemIndex}>
                            <center>
                                <S.Button
                                    onMouseOver={() => {
                                        props.setIsVisible(false);
                                        setTimeout(() => {
                                            props.setShowIntro(item.image);
                                            props.setIsVisible(true);
                                        }, 300);
                                    }}
                                    onClick={() => {
                                        props.navigateTo(item.path);
                                    }}
                                >
                                    {item.content}
                                </S.Button>
                            </center>
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    )
}