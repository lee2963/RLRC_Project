import * as S from "./Research.styles"
import Carousel from "../../Carousel";
import ContentBar from "../../ContentBar";
import ContentIndex from "../../ContentIndex";
import Navbar from "../../Navbar";
import { materialIcon } from "./Research.images";
import ProfessorTable from "./components/ProfessorTable/ProfessorTable.index";
export default function ResearchUI(props) {
    return (
        <>
            <S.main>
                <Navbar />
                <ContentBar setShow={props.setShowContent} />
                {props.showContent && (
                    <ContentIndex setShow={props.setShowContent} isShow={props.showContent} />
                )}
                <S.SelectionBarCotainer>
                    <S.SelectionLineWhite />
                    <S.SelectionLineGray />
                    <S.SelectionBarMenu>
                        <S.StyledLink to="/AboutRLRC" selected={false}> ABOUT </S.StyledLink>
                        <S.StyledLink to="/Research" selected={true} > RESEARCH </S.StyledLink>
                        <S.StyledLink to="/ResearchOutcomes" selected={false}> OUTCOME </S.StyledLink>
                        <S.StyledLink to="/NewNotice" selected={false}> NEW & NOTICE </S.StyledLink>
                    </S.SelectionBarMenu>
                </S.SelectionBarCotainer>
            </S.main>

            <S.SectionTitle>Research Group</S.SectionTitle>
            <S.MaterialGroup>
                <S.MaterialTitle>
                    <S.MaterialIcon src={materialIcon} />
                    소재그룹
                </S.MaterialTitle>
            </S.MaterialGroup>
            <S.MeterialCarousel>
                <Carousel images={props.materialImages}></Carousel>
            </S.MeterialCarousel>

            <S.MaterialGroup>
                <S.MaterialTitle>
                    <S.MaterialIcon src={materialIcon} />
                    부품그룹
                </S.MaterialTitle>
            </S.MaterialGroup>
            <S.MeterialCarousel>
                <Carousel images={props.partImages}></Carousel>
            </S.MeterialCarousel>

            <S.Introduction id="field">
                <S.IntroductionImage src={props.showIntro} visible={props.isVisible} />
                <S.ButtonContainer>
                    <ProfessorTable
                        setIsVisible={props.setIsVisible}
                        setShowIntro={props.setShowIntro}
                    />
                </S.ButtonContainer>
            </S.Introduction>
        </>
    );
}