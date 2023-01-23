import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 95%;

  background-color: ${(props) => props.theme["gray-100"]};
  padding: 8px;
  justify-content: end;
`;

export const Info = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;
`;

export const Title = styled.span`
  text-transform: capitalize;
  color: ${(props) => props.theme.secondary};
  font-size: 12px;
`;

export const Tax = styled.span`
  text-transform: capitalize;
  color: ${(props) => props.theme["gray-500"]};
  font-size: 11px;
`;

export const Total = styled.span`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;

  text-transform: capitalize;
  color: ${(props) => props.theme["gray-700"]};
  font-size: 16px;
`;
