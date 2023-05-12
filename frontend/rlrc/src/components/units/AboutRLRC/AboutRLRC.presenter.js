import { useEffect } from "react";
import * as S from "./AboutRLRC.styles"
import Navbar from "../../commons/Navbar";
import Footer from "../../commons/Footer";
import ContentBar from "../../commons/ContentBar";
import ContentIndex from "../../commons/ContentIndex";
import KeyProjectCard from "../../commons/KeyProjectCard";
import { keyProjectImages, partners, partnersList } from "./AboutRLRC.images";

export default function AboutRLRCUI(props) {
    useEffect(() => {
        props.getMap();
    }, []);

    return (
        <S.ScrollContainer>
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
                        <S.StyledLink to="/AboutRLRC" selected={true}> ABOUT </S.StyledLink>
                        <S.StyledLink to="/Research" selected={false} > RESEARCH </S.StyledLink>
                        <S.StyledLink to="/ResearchOutcomes" selected={false}> OUTCOME </S.StyledLink>
                        <S.StyledLink to="/NewNotice" selected={false}> NEW & NOTICE </S.StyledLink>
                    </S.SelectionBarMenu>
                </S.SelectionBarCotainer>
            </S.main>
            <S.VisionMission />
            <S.KeyProject>
                <S.KeyProjectTitle> Key Projects </S.KeyProjectTitle>
                <S.KeyProjectContents>
                    {keyProjectImages.map((image, index) => (
                        <KeyProjectCard key={index} smallImage={image.small} largeImage={image.large} />
                    ))}
                </S.KeyProjectContents>
            </S.KeyProject>
            <S.PartnersContainer id="partners">
                <S.PartnersTitle src={partners} />
                <S.Partners src={partnersList} />
            </S.PartnersContainer>
            <S.InfoContainer>
                <S.MapWrapper>
                    <S.MapTitle>오시는 길</S.MapTitle>
                    <S.Map id="map"></S.Map>
                    <S.AddressInfoWrapper>
                        <S.AddressText>[38541] 경상북도 경산시 대학로 280 영남대학교 기계관 327호</S.AddressText>
                        <S.TelText>TEL 053-810-1477~1478</S.TelText>
                        <S.FaxText>FAX 053-810-4741</S.FaxText>
                    </S.AddressInfoWrapper>
                </S.MapWrapper>
                <Footer />
            </S.InfoContainer>
        </S.ScrollContainer>
    )
}