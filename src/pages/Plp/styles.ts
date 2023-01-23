import styled from "styled-components";
import { device } from "../../config/device";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5vh;
  padding-right: 5vh;
  width: auto;

  @media ${device.laptop} {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 2fr 0fr;
    grid-row: 1 / 2;
  }
  @media ${device.desktop} {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 2fr 0fr;
    grid-row: 1 / 2;
    padding: 0;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(q, 1fr);
  grid-gap: 2.5rem;
  grid-row: 1 / 4;
  width: auto;
  border-top: ${(props) => `solid 1px ${props.theme["gray-300"]}`};
  padding-top: 1.5rem;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(3, 2fr);
    grid-gap: 1.5rem;
    min-width: 70%;
  }
`;
