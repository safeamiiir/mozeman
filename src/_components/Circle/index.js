import styled from "styled-components";
import logo from "./../../_images/logo.png";

const Circle = styled.div.attrs(({ x, y, radius }) => ({
  style: {
    transform: `translate(${x - radius}px, ${y - radius}px)`,
  }
}))`
  background: url(${logo});
  cursor: grab;
  position: absolute;
  width: 76px;
  height: 76px;

  ${({ isDragging }) => isDragging && `opacity: 0.8;cursor: grabbing;`}
`;

export default Circle;
