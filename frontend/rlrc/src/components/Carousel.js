import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import styled from "styled-components";

import leftArrow from "../static/leftArrow.png";
import righttArrow from "../static/rightArrow.png";
function Carousel(props) {
  const [items, setItems] = React.useState(props.images);
  const [selected, setSelected] = React.useState([]);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick = (id) => () => {
    const itemSelected = isItemSelected(id);

    setSelected((currentSelected) =>
      itemSelected
        ? currentSelected.filter((el) => el !== id)
        : currentSelected.concat(id)
    );
  };
  return (
    <Container>
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        style={{ width: "1920px" }}
      >
        {items.map((item) => (
          <Card
            itemId={item.id} // NOTE: itemId is required for track items
            title={item.id}
            key={item.id}
            image={item.src}
            onClick={handleClick(item.id)}
            selected={isItemSelected(item.id)}
          />
        ))}
      </ScrollMenu>
    </Container>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      <ArrowText>
        <img src={leftArrow} style={{ width: "20px", height: "20px" }}></img>
      </ArrowText>
    </Arrow>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
      <ArrowText>
        <img src={righttArrow} style={{ width: "20px", height: "20px" }}></img>
      </ArrowText>
    </Arrow>
  );
}
function Arrow({ children, disabled, onClick, className }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={"arrow" + `-${className}`}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        fontSize: "24px",
        right: "1%",
        opacity: disabled ? "0" : "1",
        height: "200px",
        borderRadius: 10,
        borderWidth: 0,
        backgroundColor: "transparent",
      }}
    >
      {children}
    </button>
  );
}

function Card({ onClick, image, name }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div onClick={() => onClick(visibility)} style={{}} tabIndex={0}>
      <CardComponent>
        <Image src={image}></Image>
      </CardComponent>
    </div>
  );
}

const Container = styled.div`
  overflow: hidden;
`;

const Image = styled.img`
  position: relative; /* 핵심코드 */
  width: 551px;
  height: 246px;
  background-size: cover;
  padding-left: 30px;
  box-shadow: 4px -3px 5px grey;
  filter: brightness(100%);
`;

const ImageText = styled.p`
  transform: translate(34%, -450%);
  text-align: left;
  font: normal normal 900 28px/33px Roboto;
  letter-spacing: 0px;
  color: white;
  text-shadow: 4px 9px 16px #00000036;
`;

const ArrowText = styled.p`
  color: gray;
  font-weight: bold;
`;
const CardComponent = styled.div`
  height: 220px;
`;
export default Carousel;
