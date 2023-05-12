import { useState } from "react";
import { CardComponent, Image } from "../../components/units/AboutRLRC/AboutRLRC.styles"
export default function KeyProjectCard({ smallImage, largeImage }) {
    const [isOver, setIsOver] = useState(false);
    return (
        <CardComponent
            onMouseOver={() => setIsOver(true)}
            onMouseOut={() => setIsOver(false)}
        >
            {isOver ? <Image src={largeImage} /> : <Image src={smallImage} />}
        </CardComponent>
    );
}