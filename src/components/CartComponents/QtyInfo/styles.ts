import styled from "styled-components";

export const StyledQtyInfo = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 32px;
  width: 32px;
  margin-left: 8px;

  border-radius: 50%;
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  font-size: 12px;
`;
