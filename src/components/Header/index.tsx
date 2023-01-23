import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../type";
import { QtyInfo } from "../CartComponents/QtyInfo";
import { Hero } from "../Hero";

import { Container, CartDisplay, CartTotal } from "./styles";

export function Header() {
  const cart = useSelector((state: RootState) => state.cart);
  return (
    <Container>
      <Hero />
      <CartDisplay>
        <CartTotal>£ {cart.totalCost}</CartTotal>
        <QtyInfo value={cart.itemCount} key="header" />
      </CartDisplay>
    </Container>
  );
}
