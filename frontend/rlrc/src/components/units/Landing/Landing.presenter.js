import { LandingContainer, LinkButton } from "./Landing.styles"

export default function LandingUI(props) {
    return (
        <LandingContainer>
            <LinkButton onClick={props.toAboutRLRC}>
                홈페이지 바로가기
            </LinkButton>
        </LandingContainer>
    )
}