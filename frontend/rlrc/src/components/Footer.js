import React from "react";
import styled from "styled-components";
import footer from "../static/footer.png";
function Footer() {
  return <FooterContainer src={footer}></FooterContainer>;
}
const FooterContainer = styled.img`
  width: 100%;
  height: auto;
  background: #e5e5e5 0% 0% no-repeat padding-box;
  opacity: 1;
`;
export default Footer;
