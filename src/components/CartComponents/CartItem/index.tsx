import React from "react";

import { Button } from "../../Button";
import {
  Container,
  Desciption,
  Title,
  Price,
  Actions,
  Subject,
} from "./styles";

interface CartItemProps {
  title: string;
  price: string;
  description: string;
  size: string;
  removeFromCart: () => void;
}

export function CartItem({
  title,
  price,
  size,
  description,
  removeFromCart,
}: CartItemProps) {
  return (
    <Container>
      <Desciption>
        <Title>{title}</Title>
        <Subject>
          {description}/{size}
        </Subject>
      </Desciption>
      <Actions>
        <Price>£ {price}</Price>
        <Button
          size="small"
          variant="secondary"
          text="remove"
          onClick={removeFromCart}
        />
      </Actions>
    </Container>
  );
}
