import { useState } from "react";
import AboutRLRCUI from "./AboutRLRC.presenter";

export default function AboutRLRC() {
    const [showContent, setShowContent] = useState(false);

    function getMap() {
        const { kakao } = window;
        const container = document.getElementById("map");
        const options = {
            center: new kakao.maps.LatLng(35.8265, 128.7542),
            level: 3
        }
        const map = new kakao.maps.Map(container, options);
        console.log("debug");
        const markerPosition = new kakao.maps.LatLng(35.8265, 128.7542);

        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
            position: markerPosition
        });

        marker.setMap(map);

        kakao.maps.event.addListener(marker, 'click', function () {
            // 마커 위에 인포윈도우를 표시합니다
            window.open("http://kko.to/j3Y-ZcV2Rn", "", "");
        });
    }

    return <AboutRLRCUI
        getMap={getMap}
        showContent={showContent}
        setShowContent={setShowContent}
    />;
}


