import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  width: 95%;
  height: 100px;
  min-height: 100px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  justify-content: space-between;
  border-bottom: ${(props) => `solid 1px ${props.theme["gray-300"]}`};
`;

export const Desciption = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  flex-grow: 1;
  padding-top: 2px;
  padding-bottom: 2px;
`;

export const Actions = styled.section`
  display: flex;
  flex-direction: column;
  width: 30px;
  flex-grow: 1;
  justify-content: space-between;
`;

export const Title = styled.span`
  font-size: 14px;
`;

export const Subject = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.primary};
`;

export const Price = styled.span``;
