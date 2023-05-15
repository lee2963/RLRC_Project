import ResearchUI from "./Research.presenter";
import { useState } from "react";
import * as Images from "./Research.images";

export default function Research() {
    const [showContent, setShowContent] = useState(false);
    const [showIntro, setShowIntro] = useState(Images.introductions[0]);
    const [isVisible, setIsVisible] = useState(true);

    const materialImages = Images.materialImages.reduce((res, image, index) => {
        res.push({
            id: index + 1,
            src: image
        });
        return res;
    }, [])

    const partImages = Images.partImages.reduce((res, image, index) => {
        res.push({
            id: index + 1,
            src: image
        });
        return res;
    }, [])

    return (
        <ResearchUI
            showContent={showContent}
            setShowContent={setShowContent}
            showIntro={showIntro}
            setShowIntro={setShowIntro}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            materialImages={materialImages}
            partImages={partImages} />
    )
}