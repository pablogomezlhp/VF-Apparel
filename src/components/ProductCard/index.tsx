/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";

import { Button } from "../Button";
import {
  ImageWrapper,
  ProductImage,
  TextWrapper,
  ProductTitle,
  ProductPrice,
  ProductActions,
  Container,
} from "./styles";

interface ProductCard {
  title: string;
  price: string;
  image: string;
  addToCart: () => void;
}

export function ProductCard({ title, price, image, addToCart }: ProductCard) {
  return (
    <Container>
      <ImageWrapper>
        <ProductImage src={image} />
      </ImageWrapper>

      <TextWrapper>
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>£ {price}</ProductPrice>
      </TextWrapper>
      <ProductActions>
        <Button text="add to cart" onClick={addToCart} />
        <Button text="quick view" variant="secondary" onClick={() => {}} />
      </ProductActions>
    </Container>
  );
}
