import styled from "styled-components";
import { device } from "../../../config/device";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 500px;
  padding: 10px;
  padding-bottom: 16px;

  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);
  background: ${(props) => props.theme.white};
  border-top: ${(props) => `solid 5px ${props.theme.primary}`};

  margin-top: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media ${device.laptop} {
    margin-left: 40px;

    margin-top: -100px;
  }
`;

export const Items = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  margin-bottom: 40px;
  height: 500px;
  max-height: 500px;
  overflow: scroll;
`;
export const Header = styled.section`
  display: flex;
  justify-content: start;
  align-items: center;

  width: 100%;
  padding: 16px;
  border-bottom: ${(props) => `solid 1px ${props.theme["gray-300"]}`};
`;
export const Title = styled.p`
  font-size: 18px;
  text-transform: uppercase;
`;
export const Empty = styled.p`
  display: flex;
  font-size: 18px;
  text-transform: capitalize;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
