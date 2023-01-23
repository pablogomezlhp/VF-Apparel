import React from "react";
import { Container, Info, Title, Tax, Total as StyledTotal } from "./styles";

interface TotalProps {
  total: number;
  tax: number;
}

export function Total({ total, tax = 0 }: TotalProps) {
  return (
    <Container>
      <Info>
        <Title>total</Title>
        <Tax>In. £{tax} in taxes</Tax>
      </Info>
      <StyledTotal>£{total}</StyledTotal>
    </Container>
  );
}
