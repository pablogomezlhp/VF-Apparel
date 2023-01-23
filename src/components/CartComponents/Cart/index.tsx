import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import RootState from "../../../interfaces/Product";
import Product  from "../../../interfaces/Product";
import { removeFromCart } from "../../../store/reducers/cartReducer";
import { CartItem } from "../CartItem";
import { QtyInfo } from "../QtyInfo";
import { Total } from "../Total";

import {
  Container,
  Items,
  Header,
  Title,
  Empty
} from "./styles";

export function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const [items, setItems] = useState<Product[]>(cart.items);

  useEffect(() => {
    setItems(cart.items);
  }, [cart.items]);

  return (
    <Container>
      <Header>
        <Title>cart</Title>
        <QtyInfo value={cart.itemCount as number} />
      </Header>
      <Items>
        {items.length > 0 ? (
          items.map((item) => (
            <CartItem
              key={item.id}
              title={item.title}
              price={item.variants[0].price}
              description={item.variants[0].option1}
              size={item.variants[0].option2}
              removeFromCart={() => dispatch(removeFromCart(item))}
            />
          ))
        ) : (
          <Empty>The basket is empty.</Empty>
        )}
      </Items>
      <Total tax={0} total={cart.totalCost} />
    </Container>
  );
}
